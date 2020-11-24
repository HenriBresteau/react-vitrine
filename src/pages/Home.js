import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import DynamicText from "../components/DynamicText";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Navigation></Navigation>
        <SocialNetwork></SocialNetwork>
        <div className="home-main">
          <div className="main-content">
            <h1>FS Acency</h1>
            <h2>
              <DynamicText></DynamicText>
            </h2>
          </div>
        </div>
        <ButtonsBottom right={"/project-1"}></ButtonsBottom>
      </div>
    </div>
  );
};

export default Home;
