import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./landing.css";

function Landing() {
  const { t } = useTranslation();

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: -300,
  });

  const handleMouseMovement = (event: React.MouseEvent<HTMLDivElement>) => {
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="section landing" onMouseMove={handleMouseMovement}>
      <img
        src="/images/landing_image.png"
        className="landing_image"
        alt="background"
      ></img>

      <span className="landing_glow"></span>

      <div className="center_text">
        <div className="introduction">
          <img src="images/waving_hand.svg" alt="waving hand" />
          <h3>{t("introduction")}</h3>
        </div>
        <h1 className="title">{t("name")}</h1>
      </div>

      <div className="waves">
        <img
          src="/images/brown_wave.svg"
          alt="brown wave"
          className="brown_wave"
          style={{
            top: -window.innerHeight / 30 + cursorPosition.y / 16,
          }}
        />
        <img
          src="/images/bright_brown_wave.svg"
          alt="bright brown wave"
          className="bright_brown_wave"
          style={{
            top: -window.innerHeight / 30 + cursorPosition.y / 12,
          }}
        />
        <img
          src="/images/white_wave.svg"
          alt="white wave"
          className="white_wave"
          style={{
            top: -window.innerHeight / 30 + cursorPosition.y / 8,
          }}
        />
      </div>
    </div>
  );
}

export default Landing;
