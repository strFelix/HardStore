import styles from './NavBar.module.css'
const MenuCategories = () => {
  return (
    <div className="bg-white mt-4 rounded">
        <ul className={`${styles.menuCategories} absolute left-[5%] min-w-96 z-10 min-h-32 flex flex-col justify-evenly`}> 
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default MenuCategories



