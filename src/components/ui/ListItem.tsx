"use client";

import Image from "next/image";

interface ListItemProps {
  src: string;
  alt: string;
  text: string;
  link?: string;
}

const ListItem = ({ src, alt, text, link }: ListItemProps) => {
  return (
    <li className="bg-[#3c3836] p-2 rounded-lg hover:bg-[#504945] transition-colors">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <Image
          src={src}
          alt={alt}
          width={24}
          height={24}
          className="object-cover"
        />
        {text}
      </a>
    </li>
  );
};

export default ListItem;
