import { ReactNode } from "react";
import i18next from "i18next";
interface NavButtonProps {
  className?: string;
  children: ReactNode;
}

const LanguageButton: React.FC<NavButtonProps> = ({ className, children }) => {
  const switchLanguage = () => {
    if (i18next.language == "en") {
      i18next.changeLanguage("fr");
    } else {
      i18next.changeLanguage("en");
    }
  };

  return (
    <p className={className} onClick={switchLanguage}>
      {children}
    </p>
  );
};

export default LanguageButton;
