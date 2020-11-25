import React from "react";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <main>
      <Mouse></Mouse>
      <div className="contact">
        <Navigation></Navigation>
        <Logo></Logo>
        {/*contact form*/}
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
        </div>
      </div>
    </main>
  );
};

export default Contact;
