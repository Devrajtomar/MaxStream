import React from "react";
import { SearchBar } from "../Navbar";
import { footerLinks } from "../../constants/footerLinks";
import { Logo } from ".";

const Footer = () => {
  return (
    <div className="footer">
      <SearchBar />
      <div className="footer_links">
        {footerLinks.map((link) => (
          <div key={`title_${link.title}`} className="footer_links_container">
            <div className="footer_title">{link.title}</div>
            {link.links.map((link) => (
              <div key={`link_${link.title}`} className="footer_link">
                {link.title}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="copyrights">
        <div>All Rights Reserved </div>
        <div className="hidden md:block">||</div>
        <div>Created By Dev</div>
      </div>
      <Logo />
    </div>
  );
};

export default Footer;
