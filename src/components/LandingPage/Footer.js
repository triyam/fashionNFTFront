import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <h3>Get the latest Rarible updates</h3>
        <input type="text" placeholder="Your email" />
        <button>I'm in</button>
      </div>

      <div>
        <h3>Marketplace</h3>
        <ul>
          <li>Explore</li>
          <li>Community marketplace</li>
          <li>Blog</li>
          <li>How it works</li>
          <li>
            Jobs <span>We're hiring!</span>
          </li>
          <li>Help center</li>
        </ul>
      </div>

      <div>
        <h3>Links</h3>
        <ul>
          <li>RARI Token</li>
          <li>Rarible API</li>
          <li>Bug bounty</li>
          <li>Become a partner</li>
          <li>Branding</li>
        </ul>
      </div>

      <div>
        <h3>Join Rarible community</h3>
        <ul>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Discord</li>
          <li>Telegram</li>
          <li>Youtube</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>© Rarible, Inc. All rights reserved.</li>
          <li>Community guidelines</li>
          <li>Terms</li>
          <li>Privacy policy</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
