import styles from "./home.module.css";
import { Card } from "../Card/card";

export function Home() {
  return (
    <>
      <div className={styles.divider} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Concursos Em todo o Brasil</h1>
          <p className={styles.description}>
            A gama de concursos que disponibilizamos para você é a mais completa
            do mercado.
          </p>
          <button className={styles.buttonCreate}>
            Garanta seu lugar no mercado
          </button>
        </div>
      </div>
    </>
  );
}
