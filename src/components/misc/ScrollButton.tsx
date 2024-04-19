import { ReactNode, useEffect, useState } from "react";
import { Link, Events } from "react-scroll/modules";
import "./scroll_button.css";

interface NavButtonProps {
  className?: string;
  to: string;
  children: ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ className, to, children }) => {
  const [isAutoScrolling, setScrollSnapType] = useState(false);

  useEffect(() => {
    // Change scroll-snap-type when a isAutoScrolling is changed
    if (isAutoScrolling) {
      document.documentElement.style.scrollSnapType = "";
    } else {
      document.documentElement.style.scrollSnapType = "y mandatory";
    }

    // When AutoScrolling has ended, reanable scroll-snap-type
    Events.scrollEvent.register("end", () => {
      setScrollSnapType(false);
    });
  }, [isAutoScrolling]);

  // Handle when user clicks on the navigations buttons
  const handleAutoScrolling = () => {
    setScrollSnapType(true);
  };

  return (
    <div className={`scroll_button ${className ? className : ""}`}>
      <Link
        className="scroll_link"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        onClick={handleAutoScrolling}
      >
        {children}
      </Link>
      <span className="underline"></span>
    </div>
  );
};

export default NavButton;
