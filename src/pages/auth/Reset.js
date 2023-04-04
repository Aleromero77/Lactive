import styles from "./auth.module.scss"
import resetImg from "../../assets/contraseñareset.jpg"
import { Link } from 'react-router-dom';
import  Card  from "../../components/card/Card";


const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="Reset Password" width="400" /> 
          </div>
          <Card> 
      <div className={styles.form}>
          <h2>Restablecer Contraseña</h2>
          <form>
            <input type="text" placeholder='Email' required/>
            <button className="--btn --btn-primary --btn-block">Restablecer Contraseña</button>
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
  )
}

export default Reset