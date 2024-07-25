import { useState } from "react";
import styles from "./NavBar.module.css";
import MenuButton from "./MenuButton";
import MenuIcons from "./MenuIcons";
import MenuCategories from "./MenuCategories";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav
        className={`${styles.navBar} bg-slate-900 ml-auto mr-auto flex justify-between items-center`}
      >
        <div onClick={handleMenuClick}>
          <MenuButton />
        </div>
        <h1 className="text-center text-white">HardStore</h1>
        <MenuIcons />
      </nav>
      {showMenu && (
        <MenuCategories />
      )}
    </>
  );
};
export default NavBar;
