import React from 'react'
import styles from "./Header.module.scss"
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

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
                    <p>0</p>
                  </Link>
                </span>
)

const Header = () => {
    return (
        <header>
          <div className={styles.header}>
            {logo}
            <nav>
              <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contacto
                </Link>
              </li>
              </ul>
              <div className={styles["header-right"]}>
                <span className={styles.links}> 
                  <Link to="/login">Inicia Sesión</Link>
                  <Link to="/register">Regístrate</Link>
                  <Link to="/order-history">Mi orden</Link>
                </span>
                {cart}
            </div>
          </nav>
        </div>
      </header>
      );
    };
export default Header;