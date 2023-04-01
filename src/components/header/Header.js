import {useState} from 'react'
import styles from "./Header.module.scss"
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";


const logo= (
  <div className={styles.logo}>
              <Link to="/">
                <h2>
                  LA<span>ctive</span>.
                </h2>
              </Link>
          </div>
);

const cart = (
  <span className={styles.cart}>
                  <Link to="/cart">
                    Carrito
                    <FaShoppingCart size={20} />
                    <h5>0</h5>
                    
                  </Link>
                </span>
);
const activeLink= ({isActive}) => (isActive ? `${styles.active}` : "")

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
     setShowMenu(!showMenu)
  };

    const hideMenu = () => {
      setShowMenu(false)
  };

    return (
        <header>
          <div className={styles.header}>
            {logo}

            <nav className={showMenu ? `${styles["show-nav"]}`
            : `${styles["hide-nav"]}`}>

              <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`}
            onClick={hideMenu}
              
              ></div>

              <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color="fff" onClick={hideMenu}/>
              </li>
              <li>
                <NavLink to="/" className= {activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={activeLink}>
                  Contacto
                </NavLink>
              </li>
              </ul>
              <div className={styles["header-right"]} onClick={hideMenu}>
                <span className={styles.links}> 
                  <NavLink to="/login" className={activeLink}>Inicia Sesión</NavLink>
                  <NavLink to="/register" className={activeLink}>Regístrate</NavLink>
                  <NavLink to="/order-history" className={activeLink}>Mi orden</NavLink>
                </span>
                {cart}
            </div>
          </nav>

           <div className={styles["menu-icon"]}>
            {cart}
            <CgMenu size={28} onClick={toggleMenu} />
          </div>

          
        </div>
      </header>
      );
    };
export default Header;