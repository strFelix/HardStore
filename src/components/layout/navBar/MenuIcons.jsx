import { FaSearch, FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";

const MenuIcons = ({ handleSearchClick }) => {
  return (
    <div className="flex gap-5 justify-end mr-[3%]">
      <FaSearch className="w-6 h-6 text-white cursor-pointer hover:scale-105" onClick={handleSearchClick}/>
      <FaShoppingCart className="w-6 h-6 text-white cursor-pointer hover:scale-105" />
    </div>
  );
};

MenuIcons.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
};

export default MenuIcons;