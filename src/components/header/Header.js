import { useState } from 'react';
import styles from "./Header.module.scss";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/hiddenLink';


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
  const [displayName, setdisplayName] = useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch()
  
  // Monitor de Inicio de sesión
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       // console.log(user);
       if (user.displayName == null ) {
        const u1 = user.email.substring(0, user.email.indexOf("@"));
        const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
        setdisplayName(uName);
       } else {
       setdisplayName(user.displayName);
       }
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
         })
        );
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const toggleMenu = () => {
     setShowMenu(!showMenu);
  };

    const hideMenu = () => {
      setShowMenu(false)
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Has cerrado sesión.")
        navigate ("/")
    })
      .catch((error) => {
      toast.error(error.message)
    });
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
                <ShowOnLogout>
                  <NavLink to="/login" className={activeLink}>Inicia Sesión</NavLink>
                  </ShowOnLogout>
                  <ShowOnLogin>
                  <a href='#home' style={{color: "rgb(0, 174, 255)"}}>
                    < FaUserCircle size= {16}/>
                    ¡Hola!, {displayName}
                  </a>
                  </ShowOnLogin>
                  <ShowOnLogout>
                  <NavLink to="/register" className={activeLink}>Regístrate</NavLink>
                  </ShowOnLogout>
                  <ShowOnLogin>
                  <NavLink to="/order-history" className={activeLink}>Mi orden</NavLink>
                  </ShowOnLogin>
                  <ShowOnLogin>
                    <NavLink to="/" onClick={logoutUser}>Cerrar Sesión</NavLink>
                  </ShowOnLogin>
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