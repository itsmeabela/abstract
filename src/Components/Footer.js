import React from "react";
import image from "../Assets/footer-logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col">
          <h3>Abstract</h3>
          <ul>
            <li>
              <a href="https://app.abstract.com/start-branches-trial">
                Start trial
              </a>
            </li>
            <li>
              <a href="https://www.abstract.com/pricing">Pricing</a>
            </li>
            <li>
              <a href="https://app.abstract.com/download">Download</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="https://www.abstract.com/blog">Blog</a>
            </li>
            <li>
              <a href="https://www.abstract.com/help">Help Center</a>
            </li>
            <li>
              <a href="https://www.abstract.com/release-notes">Release Notes</a>
            </li>
            <li>
              <a href="https://status.abstract.com/">Status</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Community</h3>
          <ul>
            <li>
              <a href="https://twitter.com/goabstract">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/17950473/">LinkedIn</a>
            </li>
            <li>
              <a href="https://facebook.com/Abstract/">Facebook</a>
            </li>
            <li>
              <a href="https://dribbble.com/abstract">Dribble</a>
            </li>
            <li>
              <a href="https://www.abstract.com/podcast">Podcast</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="https://www.abstract.com/about">About Us</a>
            </li>
            <li>
              <a href="https://abstract.breezy.hr/">Careers</a>
            </li>
            <li>
              <a href="https://www.abstract.com/legal">Legal</a>
            </li>
            <li>
              <p>Contact Us</p>
            </li>
            <li>
              <a href="mailto:info@abstract.com">info@abstract.com</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <img src={image} alt="" />
          <p>&copy; Copyright {new Date().getFullYear}</p>
          <p>Abstract Studio Design,Inc.</p>
          <p>All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
