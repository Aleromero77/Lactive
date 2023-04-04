import React from 'react';
import styles from "./auth.module.scss";
import loginImg from "../../assets/login2.jpg"
import { Link } from 'react-router-dom';
import  Card  from "../../components/card/Card";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  return <section className={`container ${styles.auth}`}>

      <div className={styles.img}>
        <img src={loginImg} alt="Login" width="400" /> 
          </div>
          <Card> 
      <div className={styles.form}>
          <h2>Login</h2>
          <form>
            <input type="text" placeholder='Email' required/>
            <input type="password" placeholder='Password' required/>
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className={styles.links}>
              <Link to="/reset">Restablecer contraseña</Link>
            </div>
            <p>-- Ó --</p>
          </form>
          <button className="--btn --btn-danger --btn-block"><FaGoogle color="#fff"/> Login with Google</button>
          <span className={styles.register}>
            <p>¿No tienes una cuenta? </p>
            <Link to="/register"> Regístrate</Link>
            </span>
          </div>
          </Card>
    </section>
};

export default Login