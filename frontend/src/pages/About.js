import React from "react";
import About1 from "../assets/images/about1.webp";
import About2 from "../assets/images/about2.webp";
import About3 from "../assets/images/about 3.webp";
import About4 from "../assets/images/about4.webp";
import About5 from "../assets/images/about5.webp";
import About6 from "../assets/images/about6.webp";
import About7 from "../assets/images/about7.webp";
import About8 from "../assets/images/about8.webp";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-container-header">
          <h1 className="about-header-class">
            ELEVATE YOUR STYLE <br />{" "}
            <span className="about-container-header-span">
              ELEVATE YOUR LIFE
            </span>
          </h1>
          <p className="about-header-class-p">
            The curated marketplace to discover, cop, and share <br />
            authenticated premium goods
          </p>
        </div>
        <div className="authentication-section">
          <h2 className="authentication-header">
            ITEMS AUTHENTICATED BY EXPERTS & AI
          </h2>
        </div>
        <div className="verification-process">
          <div className="verification-process-container">
          <div className="verification-process-item">
          <h2 className="verification-header">
            MULTI-STEP
            <br />
            VERIFICATION
          </h2>
          <p className="verification-step">
            01 <span className="verification-detail"> Quality Inspection</span>
          </p>
          <p className="verification-step">
            02 <span className="verification-detail"> Authentication</span>
          </p>
          <p className="verification-step">
            03{" "}
            <span className="verification-detail">
              {" "}
              Packaging with Glamy Anti-counterfeit Kit
            </span>
          </p>
          </div>
          <div className="verification-process-item-img">
          <img
            className="verification-image"
            alt=""
            src={About2}
            style={{ width: "80%", height: "auto" }}
          ></img>
          <img
            className="verification-image"
            alt=""
            src={About3}
            style={{ width: "80%", height: "auto" }}
          ></img>
          </div>
          </div>
        </div>
        <div className="authentication-experts">
          <h1 className="authentication-experts-header">
            DEDICATED
            <br />
            AUTHENTICATION EXPERTS
          </h1>
          <p className="authentication-experts-paragraph">
            Trust in our vetted authentication experts to
            <br />
            provide industry-leading authentication services.
          </p>
        </div>

        <div className="state-of-the-art-lab">
        <div className="state-of-the-art-lab-container">
          <h1 className="state-of-the-art-lab-header">
            STATE-OF-THE-
            <br />
            ART LAB
          </h1>
          <p className="state-of-the-art-lab-paragraph">
            Our ILAC-MRA-recognized lab utilizes advanced
            <br />
            equipment to protect you from counterfeits.<br/>
          <span className="state-of-the-art-lab-test">UV light box test</span>
          </p>
          
          </div>
          <img
            className="state-of-the-art-lab-image"
            src={About1}
            alt=""
            style={{ width: "40%", height: "auto" }}
          ></img>
        </div>
      </div>
      <div className="global-sourcing-container">
        <h1 className="global-sourcing-header">GLOBAL SOURCING</h1>
        <h2 className="global-sourcing-subheader">
          FEATURING OVER GLOBALLY
          <br />
          ACCLAIMED BRANDS
        </h2>
        <img
          className="global-sourcing-image"
          src={About4}
          alt=""
          style={{ width: "70%", height: "auto" }}
        ></img>
        <img
          className="global-sourcing-image"
          src={About5}
          alt=""
          style={{ width: "70%", height: "auto" }}
        ></img>
        <div className="sourcing-countries-container">
          <h1 className="sourcing-countries-header">
            SOURCING FROM OVER
            <br />
            18 COUNTRIES AND REGIONS
          </h1>
          <img
            className="sourcing-countries-image"
            src={About6}
            alt=""
            style={{ width: "70%", height: "auto" }}
          ></img>
        </div>
      </div>
      <div className="payment-methods-container">
        <h1 className="payment-methods-header">
          ACCEPTED
          <br />
          PAYMENT METHODS
        </h1>
        <p className="payment-methods-description">
          Secure your transactions with our reliable
          <br />
          payment methods.
        </p>
        <img
          className="payment-methods-image"
          src={About7}
          alt=""
          style={{ width: "40%", height: "auto" }}
        ></img>
        <img
          className="payment-methods-image"
          src={About8}
          alt=""
          style={{ width: "40%", height: "auto" }}
        ></img>
      </div>

      <div className="stay-with-poizon-container">
        <h1 className="stay-with-poizon-header">STAY WITH Glamy</h1>
      </div>

      <div className="brand-history-container">
        <h1 className="brand-history-header">Brand History</h1>
        <h2 className="brand-history-year">2025</h2>
      </div>
    </>
  );
};

export default About;
