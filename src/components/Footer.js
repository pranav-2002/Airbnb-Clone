import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__rows">
        <div className="footer__text">
          <h5>ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Airbnb 2021</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
          <p>HotelTonight</p>
          <p>Airbnb for Work</p>
          <p>Made possible by Hosts</p>
          <p>Careers</p>
          <p>Founders' Letter</p>
        </div>
        <div className="footer__text">
          <h5>COMMUNITY</h5>
          <p>Diversity &amp Belonging</p>
          <p>Accessibility</p>
          <p>Airbnb Associates</p>
          <p>Frontline Stays</p>
          <p>Guest Referrals</p>
          <p>Airbnb.org</p>
        </div>
        <div className="footer__text">
          <h5>HOST</h5>
          <p>Host your home</p>
          <p>Host an Online Experience</p>
          <p>Host an Experience</p>
          <p>Responsible hosting</p>
          <p>Resource Centre</p>
          <p>Community Centre</p>
        </div>
        <div className="footer__text">
          <h5>SUPPORT</h5>
          <p>Our COVID-19 Response</p>
          <p>Help Centre</p>
          <p>Cancellation options</p>
          <p>Neighbourhood Support</p>
          <p>Resource Centre</p>
          <p>Trust &amp Safety</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
