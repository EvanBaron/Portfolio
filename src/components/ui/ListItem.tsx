"use client";

import Image from "next/image";

interface ListItemProps {
  src: string;
  alt: string;
  text: string;
}

const ListItem = ({ src, alt, text }: ListItemProps) => {
  return (
    <li className="flex items-center gap-2 bg-[#3c3836] p-2 rounded-lg hover:bg-[#504945] transition-colors">
      <Image src={src} alt={alt} width={24} height={24} />
      <a>{text}</a>
    </li>
  );
};

export default ListItem;
