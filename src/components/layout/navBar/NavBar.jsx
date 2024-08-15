import { useState } from "react";
import styles from "./NavBar.module.css";
import MenuButton from "./MenuButton";
import MenuIcons from "./MenuIcons";
import MenuCategories from "./MenuCategories";
import MenuSearch from "./MenuSearch";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };
  return (
    <>
      <nav
        className={`${styles.navBar} bg-slate-900 ml-auto mr-auto flex justify-between relative items-center w-[90%]`}
      >
        <div onClick={handleMenuClick} className="ml-[3%]">
          <MenuButton />
        </div>
        <h1 className="absolute left-[50%] translate-x-[-50%] text-white text-3xl">HardStore</h1>
        <MenuIcons handleSearchClick={handleSearchClick}/>
      </nav>
      {showMenu && (
        <MenuCategories />
      )}
      {showSearch && (
        <MenuSearch />
      )}
    </>
  );
};
export default NavBar;
