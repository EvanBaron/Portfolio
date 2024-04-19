import { useTranslation } from "react-i18next";
import i18next from "i18next";
import NavButton from "../misc/ScrollButton";
import LanguageButton from "../misc/LanguageButton";
import "./nav_panel.css";

function NavPanel() {
  const { t } = useTranslation();

  const closePanel = () => {
    const nav_panel = document.getElementsByClassName("nav_panel")[0];
    const navbar = document.getElementsByClassName("navbar")[0];
    nav_panel.classList.add("navpanel_close");
    nav_panel.classList.remove("navpanel_open");
    navbar.classList.add("navbar_open");
    navbar.classList.remove("navbar_close");
  };

  return (
    <div className="nav_panel">
      <img
        className="close_menu"
        src="/images/close_menu.svg"
        alt=""
        onClick={closePanel}
      />
      <span className="separator"></span>
      <NavButton className="panel_button" to={"landing"}>
        {t("home")}
      </NavButton>
      <NavButton className="panel_button" to={"about"}>
        {t("about")}
      </NavButton>
      <NavButton className="panel_button" to={"contact"}>
        {t("contact")}
      </NavButton>
      <a href="https://github.com/EvanBaron" className="panel_button nav_link">
        {t("projects")}
      </a>
      <LanguageButton className="panel_language_button">
        {i18next.language == "en" ? t("english") : t("french")}
      </LanguageButton>
      <a href="" className="panel_link">
        ebaron.dev
      </a>
    </div>
  );
}

export default NavPanel;
