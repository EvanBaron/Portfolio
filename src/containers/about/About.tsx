import { useState } from "react";
import { useTranslation } from "react-i18next";
import Bubble from "../../components/misc/Bubble";
import "./about.css";
function About() {
  const { t } = useTranslation();

  const [isReading, setIsReading] = useState<boolean>(false);

  return (
    <div className="section about">
      <img
        src="/images/about_image.png"
        className="about_image"
        alt="background"
      ></img>

      <span className="about_glow"></span>

      <Bubble
        className="bubble_1"
        animationClass="floating_3"
        setIsReading={setIsReading}
      >
        {t("bubble_1_1")} <br />
        {t("bubble_1_2")}
      </Bubble>

      <Bubble
        className="bubble_2"
        animationClass="floating_4"
        setIsReading={setIsReading}
      >
        {t("bubble_2_1")}
      </Bubble>

      <Bubble
        className="bubble_3"
        animationClass="floating_2"
        setIsReading={setIsReading}
      >
        {t("bubble_3_1")} <br />
        {t("bubble_3_2")}
      </Bubble>

      <Bubble
        className="bubble_4"
        animationClass="floating_3"
        setIsReading={setIsReading}
      >
        {t("bubble_4_1")} <br />
        {t("bubble_4_2")}
      </Bubble>

      <Bubble
        className="bubble_5"
        animationClass="floating_1"
        setIsReading={setIsReading}
      >
        {t("bubble_5_1")} <br />
        {t("bubble_5_2")}
      </Bubble>

      <Bubble
        className="bubble_6"
        animationClass="floating_2"
        setIsReading={setIsReading}
      >
        {t("bubble_6_1")}
      </Bubble>

      <p className={`info ${isReading ? "tracking-out" : ""}`}>{t("info")}</p>
    </div>
  );
}

export default About;
