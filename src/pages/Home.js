import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";
import CopyToClipboard from "react-copy-to-clipboard";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <main>
      <Mouse></Mouse>
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation></Navigation>
        <SocialNetwork></SocialNetwork>
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              Henri Bresteau
            </motion.h1>
            <motion.h2
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              <DynamicText></DynamicText>
            </motion.h2>
            <motion.img
              drag
              onDragEnd
              dragConstraints={{
                left: -1200,
                right: 50,
                top: -50,
                bottom: 500,
              }}
              src="./assets/img/ReadyPlayerMe-Avatar 1.png"
            ></motion.img>
            <div className="contact-infos">
              <div className="address">
                <div className="content">
                  <h4>Adresse</h4>
                  <p>30 rue Antoine Charial</p>
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
                      06 84 53 74 47
                    </p>
                  </CopyToClipboard>
                </div>
              </div>
              <div className="email">
                <div className="content">
                  <h4>Email</h4>
                  <CopyToClipboard
                    text="henri.bresteau@gmail.com"
                    className="hover"
                  >
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
              <div className="credits">
                <p> &copy; Henri Bresteau - {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
        <ButtonsBottom right={"/project-1"}></ButtonsBottom>
      </motion.div>
    </main>
  );
};

export default Home;
