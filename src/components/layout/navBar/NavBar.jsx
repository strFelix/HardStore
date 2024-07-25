import styles from "./NavBar.module.css";
import MenuButton from "./MenuButton";
import MenuIcons from "./MenuIcons";

const NavBar = () => {
  return (
    <nav
    className={`${styles.navBar} bg-slate-900 w-[1220px] h-[60px] ml-auto mr-auto flex justify-between items-center`}
    >
      <MenuButton />
      <h1 className="text-center text-white">HardStore</h1>
      <MenuIcons />
    </nav>
  );
};
export default NavBar;
