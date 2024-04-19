import { useTranslation } from "react-i18next";
import i18next from "i18next";
import NavButton from "../misc/ScrollButton";
import LanguageButton from "../misc/LanguageButton";
import "./navbar.css";

function Navbar() {
  const { t } = useTranslation();

  const openPanel = () => {
    const nav_panel = document.getElementsByClassName("nav_panel")[0];
    const navbar = document.getElementsByClassName("navbar")[0];
    nav_panel.classList.add("navpanel_open");
    nav_panel.classList.remove("navpanel_close");
    navbar.classList.add("navbar_close");
    navbar.classList.remove("navbar_open");
  };

  return (
    <div className="navbar">
      <div className="left_side">
        <LanguageButton className="language_button">
          {i18next.language == "en" ? "en" : "fr"}
        </LanguageButton>
        <a href="" className="nav_link">
          ebaron.dev
        </a>
      </div>

      <a className="icon" href="">
        <img src="/images/eb_icon.svg" alt="website icon" />
      </a>

      <div className="right_side">
        <img
          className="menu"
          src="/images/menu.svg"
          alt="menu"
          onClick={openPanel}
        />
        <a href="#projects" className="pyrrhos">
          <img src="/images/pyrrhos.svg" alt="pyrrhos" />
        </a>
        <NavButton className="hide" to={"landing"}>
          {t("home")}
        </NavButton>
        <NavButton className="hide" to={"about"}>
          {t("about")}
        </NavButton>
        <NavButton className="hide" to={"contact"}>
          {t("contact")}
        </NavButton>
        <a href="https://github.com/EvanBaron" className="nav_link">
          {t("projects")}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
