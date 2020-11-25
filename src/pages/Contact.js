import React from "react";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <Mouse></Mouse>
      <div className="contact">
        <Navigation></Navigation>
        <Logo></Logo>
        <ContactForm></ContactForm>
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>12 rue du Code</p>
              <p>69003 Lyon</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0612345678" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié");
                  }}
                >
                  06 12 34 56 78
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
              <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="henri.bresteau@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié");
                  }}
                >
                  henri.bresteau@gmail.com
                </p>
              </CopyToClipboard>
              </div>
          </div>
          <SocialNetwork></SocialNetwork>
          <div className="credits">
              <p> &copy; Henri Bresteau - 2020</p>
          </div>
        </div>
        <ButtonsBottom left={'/project-4'}></ButtonsBottom>
      </div>
    </main>
  );
};

export default Contact;
