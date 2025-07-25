"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Bot, Expand, Minimize, Send, Trash, X } from "lucide-react";
import { useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Input } from "./ui/input";

export function AIChatButton() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setChatOpen(true)}
        variant="outline"
        className="h-10 font-sans"
      >
        <Bot />
        <span>Ask AI</span>
      </Button>
      <AIChatBox open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

function AIChatBox({ open, onClose }: AIChatBoxProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  if (!open) return null;

  return (
    <div
      className={cn(
        "animate-in slide-in-from-bottom-10 bg-card fixed right-4 bottom-4 z-50 flex flex-col rounded-lg border shadow-lg duration-300 2xl:right-16",
        isExpanded
          ? "h-[650px] max-h-[90vh] w-[550px]"
          : "h-[500px] max-h-[80vh] w-80 sm:w-96",
      )}
    >
      <div className="bg-primary text-primary-foreground flex items-center justify-between rounded-t-lg border-b p-3">
        <div className="flex items-center gap-2">
          <Bot size={18} />
          <h3 className="font-medium">Ask AI</h3>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary-foreground hover:bg-primary/90 hidden h-8 w-8 md:inline-flex"
            title={isExpanded ? "Minimize" : "Expand"}
          >
            {isExpanded ? <Minimize /> : <Expand />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {}}
            className="text-primary-foreground hover:bg-primary/90 h-8 w-8"
            title="Clear chat"
          >
            <Trash />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-primary-foreground hover:bg-primary/90 h-8 w-8"
          >
            <X className="size-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-3">
        {/* TODO: Render messages here */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`max-w-xs rounded-2xl px-4 py-2 whitespace-pre-wrap shadow-md sm:max-w-sm md:max-w-md lg:max-w-lg ${
                message.role === "user"
                  ? "rounded-br-none bg-[#ed9d6b] text-black"
                  : "rounded-bl-none bg-gray-100 text-gray-900"
              }`}
            >
              {message.parts.map((part, i) => {
                if (part.type === "text") {
                  return <div key={`${message.id}-${i}`}>{part.text}</div>;
                }
              })}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 border-t p-3">
        <Input
          placeholder="Type your message..."
          className="max-h-[120px] min-h-[40px] resize-none overflow-y-auto"
          autoFocus
          value={input}
          onChange={handleInputChange}
        />
        <Button type="submit" size="icon">
          <Send className="size-4" />
        </Button>
      </form>
    </div>
  );
}

function Loader() {
  return (
    <div className="ml-2 flex items-center gap-1 py-2">
      <div className="bg-primary size-1.5 animate-pulse rounded-full" />
      <div className="bg-primary size-1.5 animate-pulse rounded-full delay-150" />
      <div className="bg-primary size-1.5 animate-pulse rounded-full delay-300" />
    </div>
  );
}
