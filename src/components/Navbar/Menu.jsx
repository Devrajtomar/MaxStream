import { links } from "../../constants/NavLinks";
import { navbar } from "../../constants/states";
import React from "react";

const Menu = () => {
  const { Page, setPage } = navbar();
  return (
    <div className="hidden md:flex item-center justify-center gap-4 px-2 ml-10">
      {links.map((link) => (
        <pre
          className="menu_item"
          style={{
            ...(Page === link.click && {
              backgroundColor: "black",
              color: "white",
            }),
          }}
          key={link.title}
          onClick={() => setPage(link.click)}
        >
          {link.title}
        </pre>
      ))}
    </div>
  );
};

export default Menu;
