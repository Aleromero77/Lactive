import {useState} from 'react';
import styles from "./auth.module.scss";
import loginImg from "../../assets/login2.jpg"
import { Link, useNavigate } from 'react-router-dom';
import  Card  from "../../components/card/Card";
import { FaGoogle } from 'react-icons/fa';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config"
import Loader from '../../components/loader/Loader';
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [email, setEmail ] =useState("");
  const [password, setPassword ] =useState("");
  const [isLoading, setIsLoading ] =useState(false);

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true)
   
   
       signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
     // const user = userCredential.user;
      setIsLoading(false);
      toast.success("¡Login exitoso!");
      navigate("/");
    })
    .catch((error) => {
      setIsLoading(false);
      toast.error(error.message);
    });  
  };
  
  // Login with Google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
    .then((result) => {
     // const user = result.user;
      toast.success("¡Login exitoso!")
      navigate("/");
    }).catch((error) => {
      toast.error(error.message)
    });
  };

  return (
    <>
    {isLoading && <Loader/>}
  <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" width="400" /> 
          </div>


          <Card> 
      <div className={styles.form}>
          <h2>Login</h2>
          <form onSubmit={loginUser}>
            <input type="text" 
              placeholder='Email' 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' 
            required value={password} 
            onChange={(e) => setPassword(e.target.value)} />
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className={styles.links}>
              <Link to="/reset">Restablecer contraseña</Link>
            </div>
            <p>-- Ó --</p>
          </form>
          <button type="submit" className="--btn --btn-danger --btn-block" onClick={signInWithGoogle}><FaGoogle color="#fff"/> Login with Google</button>
          <span className={styles.register}>
            <p>¿No tienes una cuenta? </p>
            <Link to="/register"> Regístrate</Link>
            </span>
          </div>
          </Card>
    </section>
    </>
  );
};

export default Login