import styles from './NavBar.module.css'
import { SlArrowRight } from "react-icons/sl";

const MenuCategories = () => {
  return (
    <div className="bg-white mt-4 rounded">
        <ul className={`${styles.menuCategories} absolute left-[5%] min-w-56 z-10 min-h-32 flex flex-col justify-evenly p-2`}> 
            <li><p>Processors</p><SlArrowRight/></li>
            <li><p>Mother Boards</p><SlArrowRight/></li>
            <li><p>Graphic Cards</p><SlArrowRight/></li>
        </ul>
    </div>
  )
}

export default MenuCategories



