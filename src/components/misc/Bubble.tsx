import { ReactNode, useState } from "react";
import "./bubble.css";

interface BubbleProps {
  className: string;
  animationClass: string;
  children: ReactNode;
}

const Bubble: React.FC<BubbleProps> = ({
  className,
  animationClass,
  children,
}) => {
  const [isPopped, setIsPopped] = useState(false);

  const popBubble = () => {
    setIsPopped(true);
  };

  return (
    <div className={`bubble_container ${className}`}>
      <span
        className={`bubble ${isPopped ? "popped" : animationClass}`}
        onMouseEnter={popBubble}
      ></span>
      <p className={`info_text ${isPopped ? "appear" : ""}`}>{children}</p>
    </div>
  );
};

export default Bubble;
