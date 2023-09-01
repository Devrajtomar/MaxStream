import { AiOutlineMenu } from "react-icons/ai";
import { Menu, SearchBar } from "./";
import { navbar } from "../../constants/states";
import Link from "next/link";
import { CustomButton } from "../Custom";
import { Logo } from "../home";
const isLoged = true;
const NavBar = () => {
  const { setSideBar } = navbar();

  return (
    <div className="NavBar">
      <AiOutlineMenu
        className="icon md:hidden"
        size={30}
        style={{ minWidth: 35, minHeight: 35, marginRight: 30 }}
        onClick={() => setSideBar(true)}
      />
      <Logo style="hidden sm:block" />
      <SearchBar />
      {isLoged ? (
        <Menu />
      ) : (
        <div className=" gap-2 items-center hidden md:flex">
          <Link href="/Log_In">
            <CustomButton
              title="Log In"
              containerStyle="py-1 px-3 rounded-sm"
            />
          </Link>
          <Link href="/Sign_In">
            <CustomButton
              title="Sign In"
              containerStyle="py-1 px-3 rounded-sm"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
