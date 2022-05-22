import React from "react";
import "./homepage.styles.css";
import arceusBackground from "../../assets/arceus_wallpaperM.jpg";
import hoOhBackground from "../../assets/ho-oh_wallpaperM.png";
import greninjaBackground from "../../assets/greninja_wallpaperM.png";
import PresentationBox from "../../components/presentation-box/presentation-box.component";

const HomePage = () => (
  <div className="homepage">
    <PresentationBox
      backgroundColor="#FFFFFF"
      buttonClass="presentation-box_button__white"
      backgroundImage={arceusBackground}
      presentationText="WANT TO KNOW THE STRENGTHS AND WEAKNESSES OF YOUR POKEMON? FIND IT AND DISCOVER HOW TO MAXIMIZE THE POTENTIAL OF THE POKEMON"
      buttonText="FIND YOUR POKEMON"
      url="search"
    />
    <PresentationBox
      backgroundImage={hoOhBackground}
      backgroundColor="#FF6B35"
      buttonClass="presentation-box_button__orange"
      textColor="#FFFFFF"
      presentationText="EVER FACED A HARD CHALLENGE WHERE YOU CAN'T DEFEAT AN SPECIFIC POKEMON? BUILD THE SCENARIO AND FIND THE BEST PATH TO DEFEAT IT"
      buttonText="BUILD YOUR FIGHT SCENARIO"
      backgroundX="left"
      url="/1v1"
    />
    <PresentationBox
      backgroundColor="#758BFD"
      buttonClass="presentation-box_button__blue"
      textColor="#FFFFFF"
      backgroundImage={greninjaBackground}
      presentationText="IS YOUR POKEMON TEAM HAVING TROUBLE IN BATTLES? DISCOVER THE STRENGTHS AND WEAKNESSES OF YOUR TEAM, HOW TO SOLVE THEM, AND THE BEST MATCHUPS"
      buttonText="BUILD YOUR TEAM"
      url="/teamFight"
    />
  </div>
);

export default HomePage;
