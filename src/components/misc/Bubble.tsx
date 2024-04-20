import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import "./bubble.css";

interface BubbleProps {
  className: string;
  animationClass: string;
  children: ReactNode;
  setIsReading: Dispatch<SetStateAction<boolean>>;
}

const Bubble: React.FC<BubbleProps> = ({
  className,
  animationClass,
  children,
  setIsReading,
}) => {
  const [isPopped, setIsPopped] = useState(false);

  const popBubble = () => {
    setIsPopped(true);
    setIsReading(true);
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
