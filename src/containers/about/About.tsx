import { useTranslation } from "react-i18next";
import Bubble from "../../components/misc/Bubble";
import "./about.css";

function About() {
  const { t } = useTranslation();

  return (
    <div className="section about">
      <img
        src="/images/about_image.png"
        className="about_image"
        alt="background"
      ></img>

      <span className="about_glow"></span>

      <Bubble className="bubble_1" animationClass="floating_3">
        {t("bubble_1_1")} <br />
        {t("bubble_1_2")} <br />
        {t("bubble_1_3")}
      </Bubble>

      <Bubble className="bubble_2" animationClass="floating_4">
        {t("bubble_2_1")}
      </Bubble>

      <Bubble className="bubble_3" animationClass="floating_2">
        {t("bubble_3_1")} <br />
        {t("bubble_3_2")}
      </Bubble>

      <Bubble className="bubble_4" animationClass="floating_3">
        {t("bubble_4_1")} <br />
        {t("bubble_4_2")}
      </Bubble>

      <Bubble className="bubble_5" animationClass="floating_1">
        {t("bubble_5_1")} <br />
        {t("bubble_5_2")}
      </Bubble>

      <Bubble className="bubble_6" animationClass="floating_2">
        {t("bubble_6_1")}
      </Bubble>

      <p className="info">{t("info")}</p>
    </div>
  );
}

export default About;
