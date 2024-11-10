"use client";

interface BadgeProps {
  tag: string;
}

const Badge = ({ tag }: BadgeProps) => {
  return (
    <span className="px-2 py-1 text-sm rounded-full bg-[#504945] text-[#ebdbb2]">
      {tag}
    </span>
  );
};

export default Badge;
