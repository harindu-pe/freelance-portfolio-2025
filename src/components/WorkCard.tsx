import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type workTemplates = {
  title: string;
  image: StaticImageData;
  year: string;
  description: string;
  techStack: string[];
  link: string;
};

const WorkCard = ({
  title,
  image,
  year,
  description,
  techStack,
  link,
}: workTemplates) => {
  return (
    <Card className="gap-0 rounded-lg border-none bg-white pt-1 shadow-none">
      <CardHeader className="aspect-video px-1 py-0">
        <CardTitle>
          <Image src={image} alt="" className="rounded-lg" />
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="mt-1 space-x-2">
          {techStack?.map((tech, index) => (
            <Badge key={index} className="px-2 py-1 font-sans">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex items-center font-sans font-semibold">
          <span> {`${title} - ${year}`} </span>
        </div>
      </CardContent>
      <CardFooter className="mt-2 flex justify-between">
        <div className="mr-2 font-sans text-sm text-balance text-gray-800">
          {description}
        </div>
        <Button asChild variant="outline" className="size-10">
          <Link href={`${link}`} target="_blank" rel="noopener noreferrer">
            <SquareArrowOutUpRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
