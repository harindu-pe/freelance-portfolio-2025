import OpenAI from "openai";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { DataAPIClient } from "@datastax/astra-db-ts";

const {
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  OPENAI_API_KEY,
} = process.env;

const openaiClient = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(ASTRA_DB_API_ENDPOINT!, { keyspace: ASTRA_DB_NAMESPACE! });

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const latestMessage = messages[messages.length - 1]?.content;
  let docContext = "";

  const embedding = await openaiClient.embeddings.create({
    model: "text-embedding-3-small",
    input: latestMessage,
    encoding_format: "float",
  });

  try {
    const collection = await db.collection(ASTRA_DB_COLLECTION!);
    const cursor = collection.find(
      {},
      {
        sort: {
          $vector: embedding.data[0].embedding,
        },
        limit: 10,
      },
    );

    const documents = await cursor.toArray();

    const docsMap = documents?.map((doc) => doc.text);

    docContext = JSON.stringify(docsMap);
  } catch (error) {
    console.log("Error querying database", error);
    docContext = "";
  }

  const template = {
    role: "system",
    content: `You are an AI assistant on a portfolio website for a frontend web developer. 
      --------------
      START CONTEXT: 
      ${docContext} 
      END CONTEXT
      --------------
      QUESTION: ${latestMessage}
      --------------
      `,
  };

  const result = streamText({
    model: openai("o4-mini"),
    messages: [template, ...messages],
  });

  return result.toDataStreamResponse();
}
