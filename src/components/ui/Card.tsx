"use client";

import Image from "next/image";
import Badge from "./Badge";

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  src: string;
  link: string;
}

const Card = ({ title, description, tags, src, link }: CardProps) => {
  return (
    <li className="bg-[#3c3836] p-6 rounded-lg hover:bg-[#504945] transition-colors">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex justify-center">
          <Image
            src={src}
            alt={title}
            width={300}
            height={300}
            className="rounded-lg mb-4 w-3/4 object-cover"
          />
        </div>
        <h3 className="text-4xl font-semibold text-[#ebdbb2] mb-2 text2">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} tag={tag} />
          ))}
        </div>
        <p className="text-[#a89984] text1">{description}</p>
      </a>
    </li>
  );
};

export default Card;
