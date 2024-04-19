import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import timeout from "../../lib/timeout";
import "./contact.css";

export function Contact() {
  const { t } = useTranslation();

  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string | void>();
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    message: "",
  });

  const move = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.currentTarget.classList.add("scale-up");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let name_expression = new RegExp(/[^A-Za-z\s]/);
    if (name_expression.test(formData.name) || formData.name.length < 1) {
      setErrorText(t("error_name"));
      await timeout(2000);
      setErrorText();
      return;
    }

    // From https://stackoverflow.com/questions/46370725/how-to-do-email-validation-using-regular-expression-in-typescript
    let email_expression = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!email_expression.test(formData.email)) {
      setErrorText(t("error_email"));
      await timeout(2000);
      setErrorText();
      return;
    }

    if (formData.message === "") {
      setErrorText(t("error_message"));
      await timeout(2000);
      setErrorText();
      return;
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        event.currentTarget,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        async (result) => {
          setFormData({ name: "", email: "", message: "" });
          setErrorText(t("sent"));
          setEmailSent(true);
        },
        async (error) => {
          setErrorText(t("error"));
          await timeout(2000);
          setErrorText();
          return console.log(error);
        }
      );
  };

  return (
    <div className="section contact">
      <img
        src="/images/contact_image.png"
        className="contact_image"
        alt="background"
      ></img>

      <span className="contact_glow"></span>

      <div className="center">
        <div className="text">
          <h1 className="title">{t("contact_title")}</h1>
          <h3 className="inside_text">
            {t("questions_1")}
            <br />
            {t("questions_2")}
          </h3>
        </div>

        <p className={`thanks ${emailSent ? "focus_in" : ""}`}>
          {t("thanks_1")} <br />
          {t("thanks_2")}
        </p>

        <form
          className={`form ${emailSent ? "send_out_right" : ""}`}
          onSubmit={handleSubmit}
        >
          <div className="form_name">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder={t("name_placeholder")}
              onChange={handleChange}
            />
            <span className="form_separator"></span>
          </div>
          <div className="form_email">
            <input
              type="text"
              name="email"
              value={formData.email}
              placeholder={t("email_placeholder")}
              onChange={handleChange}
            />
            <span className="form_separator"></span>
          </div>
          <div className="form_message">
            <textarea
              name="message"
              value={formData.message}
              placeholder={t("message_placeholder")}
              onChange={handleChange}
            />
            <span className="form_separator"></span>
          </div>
          <div className={`form_send ${errorText ? "shake" : ""}`}>
            <input type="submit" value="" onClick={(e) => move(e)} />
            <p>{errorText ? errorText : t("send")}</p>
            <img src="/images/arrow.svg" alt="arrow" />
          </div>
        </form>
      </div>

      <div className="links">
        <div>
          <a href="https://www.linkedin.com/in/evan-baron-89ba57302/">
            <img src="/images/linkedIn_icon.png" alt="LinkedIn icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/evan-baron-89ba57302/"
            className="link"
          >
            LinkedIn
          </a>
        </div>

        <div>
          <a href="https://github.com/EvanBaron">
            <img src="/images/github_icon.png" alt="Github icon" />
          </a>
          <a href="https://github.com/EvanBaron" className="link">
            Github
          </a>
        </div>
        <div>
          <a href="https://twitter.com/evan_baron_">
            <img src="/images/twitter_icon.png" alt="Twitter icon" />
          </a>
          <a href="https://twitter.com/evan_baron_" className="link">
            Twitter
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/evan_baron_">
            <img src="/images/instagram_icon.png" alt="Instagram icon" />
          </a>
          <a href="https://www.instagram.com/evan_baron_" className="link">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
