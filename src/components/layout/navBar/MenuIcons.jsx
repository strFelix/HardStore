import { FaSearch, FaShoppingCart } from "react-icons/fa";
const MenuIcons = () => {
  return (
    <div className="flex gap-5 justify-end mr-[3%]">
      <FaSearch className="w-6 h-6 text-white cursor-pointer hover:scale-105"/>
      <FaShoppingCart className="w-6 h-6 text-white cursor-pointer hover:scale-105"/>
    </div>
  );
};

export default MenuIcons;