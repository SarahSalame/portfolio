import React, { useContext } from "react";
import { ThemeContext } from "../Context/Context";
import emailIcon from "../../assets/images/mail.svg";
import phoneIcon from "../../assets/images/phone.svg";
import addressIcon from "../../assets/images/address.svg";
import "./Contact.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="contact" className="mt">
      <div className="container">
        <div className="contact">
          <header>
            <span>Contact</span>
            <p>
              Let’s Discuss Your <span>Project</span>
            </p>
          </header>

          <div className="contact-content">
            <div className="myInfo">
              <div
                style={
                  theme === "light"
                    ? { boxShadow: "0 30px 116px -16px rgba(105, 20, 20, 0.2)" }
                    : {}
                }
              >
                <div>
                  <img src={phoneIcon} alt="phone" />
                </div>
                <div>
                  <p>Call me</p>
                  <span>+963 988397410</span>
                </div>
              </div>

              <div>
                <div>
                  <img src={emailIcon} alt="email" />
                </div>
                <div>
                  <p>Email me</p>
                  <span>sarahsalame39@gmail.com</span>
                </div>
              </div>

              <div>
                <div>
                  <img src={addressIcon} alt="address" />
                </div>
                <div>
                  <p>Address</p>
                  <span>Homs, Syria</span>
                </div>
              </div>
            </div>

            <form>
              <input type="text" name="name" id="name" placeholder="Full name" />
              <input type="text" name="email" id="email" placeholder="Your email" />
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
              />
              <textarea name="message" id="message" placeholder="Message"></textarea>
              <button type="submit" className="SendBtn" aria-label="send message">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
