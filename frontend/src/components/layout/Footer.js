import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Paypal from "../../assets/images/paypal.jpg";
import paypalseure from "../../assets/images/paypalsecure.jpg";
import securesafekey from "../../assets/images/securesafekey.jpg";
import visa from "../../assets/images/securevisa.jpg";
import securevisaa from "../../assets/images/visa.jpg";
import visaa from "../../assets/images/visaa.jpg";
import app from "../../assets/images/app.png";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="footer-container-items">
        <div className="footer-items">
          <h1 className="footer-title">About</h1>
          <ul className="footer-list">
            <li className="footer-list-item">About Glamy</li>
            <li className="footer-list-item">Terms & Conditions</li>
            <li className="footer-list-item">Privacy Policy</li>
            <li className="footer-list-item">Shipping Policy</li>
            <li className="footer-list-item">Return Policy</li>
            <li className="footer-list-item">Glamy Blog</li>
          </ul>
        </div>
        <div className="footer-authentication">
          <h1 className="footer-title">Authentication</h1>
          <ul className="footer-list">
            <li className="footer-list-item">Online Authentication</li>
            <li className="footer-list-item">How It Works</li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h1 className="footer-title">Join Our Newsletter</h1>
          <input
            className="footer-input"
            type="text"
            placeholder="Enter your email"
          />
          <button className="footer-button">Subscribe</button>
        </div>
      </div>
      <div className="footer-container-items-2">
        <div className="footer-support">
          <h1 className="footer-title">Customer Support</h1>
          <ul className="footer-list">
            <li className="footer-list-item">Help Center</li>
            <li className="footer-list-item">Contact Us</li>
          </ul>
        </div>
        <div className="footer-download-app">
          <h1 className="footer-title">Download App</h1>
          <img src={app} alt="app" className="footer-app-image" />
        </div>
        <div className="footer-follow">
          <h1 className="footer-title">Follow Us</h1>
          <ul className="footer-social-list">
            <li className="footer-social-item">
              <InstagramIcon className="footer-social-icon" />
            </li>
            <li className="footer-social-item">
              <LinkedInIcon className="footer-social-icon" />
            </li>
            <li className="footer-social-item">
              <FacebookIcon className="footer-social-icon" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-container-items-3">
        <div className="footer-security">
          <h1 className="footer-title">Security Certification</h1>
          <ul className="footer-certification-list">
            <li className="footer-certification-item">
              <img src={paypalseure} alt="PayPal Secure" />
            </li>
            <li className="footer-certification-item">
              <img src={securesafekey} alt="Secure Safe Key" />
            </li>
            <li className="footer-certification-item">
              <img src={securevisaa} alt="Secure Visa" />
            </li>
          </ul>
        </div>
        <div className="footer-accept">
          <h1 className="footer-title">We Accept</h1>
          <ul className="footer-accept-list">
            <li className="footer-accept-item">
              <img src={Paypal} alt="PayPal" />
            </li>
            <li className="footer-accept-item">
              <img src={visa} alt="Visa" />
            </li>
            <li className="footer-accept-item">
              <img src={visaa} alt="Visa Alternative" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-container-items-4">
        <div className="footer-rights">©2025 Glamy All Rights Reserved.</div>
        <div className="footer-email">support@Glamy.com</div>
      </div>
    </div>
  );
};

export default Footer;
