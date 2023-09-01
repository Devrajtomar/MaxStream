import { links } from "../../constants/NavLinks";
import { navbar } from "../../constants/states";
import { AiOutlineClose } from "react-icons/ai";
import { Logo } from "../home";

const SideBar = () => {
  const { SideBar, setSideBar, Page, setPage } = navbar();
  return (
    SideBar && (
      <div className="SideBar">
        <div className="flex justify-between  items-center w-full px-1">
          <AiOutlineClose
            className="icon bg-slate-50"
            onClick={() => setSideBar(false)}
          />
          <Logo />
        </div>
        <div className="flex flex-col gap-2 w-full items-center justify-start p-2 ">
          {links.map((link) => (
            <div
              className={"menu_item w-full "}
              style={{
                ...(Page === link.click && {
                  backgroundColor: "black",
                  color: "white",
                }),
              }}
              onClick={() => {
                setSideBar(false);
                setPage(link.click);
              }}
              key={`link_${link.click}`}
            >
              {link.title}
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default SideBar;
