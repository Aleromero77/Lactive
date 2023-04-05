import styles from "./auth.module.scss"
import resetImg from "../../assets/contraseñareset.jpg"
import { Link } from 'react-router-dom';
import  Card  from "../../components/card/Card";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config"
import { sendPasswordResetEmail } from "firebase/auth";
import Loader from "../../components/loader/Loader";


const Reset = () => {
  const [email, setEmail ] =useState("");
  const [isLoading, setIsLoading ] =useState(false);

const resetPassword = (e) => {
e.preventDefault()
setIsLoading(true)

sendPasswordResetEmail(auth, email)
  .then(() => {
    setIsLoading(false)
    toast.success("Revisa tu Email para restablecet tu contraseña.")
  })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message)
  });
};

  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="Reset Password" width="400" /> 
          </div>
          <Card> 
      <div className={styles.form}>
          <h2>Restablecer Contraseña</h2>

          <form onSubmit={resetPassword}> 
            <input type="text" placeholder='Email' 
              required              
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="--btn --btn-primary --btn-block">Restablecer Contraseña</button>
            <div className={styles.links}>
              <p>
              <Link to="/login">Inicia Sesión</Link>
              </p>
              <p>
              <Link to="/register">Registro</Link>
              </p>
            </div>
          </form>
          </div>
          </Card>
    </section>
    </>
  )
}

export default Reset