import Image from "next/image";
import styles from "../page.module.css";
import "../css/home.css";
import Navbar from "../components/navbar";
import "./css/contato.css"


export default function Contato() {
    return (
      <div className={styles.container}>
        <Navbar />
        <div className="body">
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Entre em Contato</h2>
          <form className={styles.form}>
            <label htmlFor="name">Nome Completo:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Telefone:</label>
            <input type="number" id="phone" name="phone" required />
            <label htmlFor="feedback">Coloque sua dúvida ou Feedback:</label>
            <textarea id="feedback" name="feedback" rows="4" required></textarea>
            <button type="submit" className ="btn">
              Enviar
            </button>
          </form>
        </div>
      </div>
      </div>
    );
  }
