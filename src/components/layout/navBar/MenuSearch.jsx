import styles from './NavBar.module.css';
const MenuSearch = () => {
  return (
    <div className="bg-white mt-4 rounded">
        <div className={`${styles.menuCategories} absolute right-[5%] z-10`}> 
          <input type="search" placeholder='Search...' className='p-2 outline-none' />
        </div>
    </div>
  );
};

export default MenuSearch;
