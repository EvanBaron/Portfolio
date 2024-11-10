"use client";

import Image from "next/image";

interface ImageButtonProps {
  link: string;
  src: string;
  alt: string;
}

const ImageButton = ({ link, src, alt }: ImageButtonProps) => {
  return (
    <a href={link} className="text-[#a89984] hover:text-[#ebdbb2]">
      <Image src={src} alt={alt} width={24} height={24} />
    </a>
  );
};

export default ImageButton;
