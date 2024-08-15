import styles from './NavBar.module.css';
const MenuSearch = () => {
  return (
    <div className="bg-white mt-2 rounded absolute right-[5%] z-10">
        <div className={`${styles.menuCategories}`}> 
          <input type="search" placeholder='Search...' className='p-2 outline-none' />
        </div>
    </div>
  );
};

export default MenuSearch;
