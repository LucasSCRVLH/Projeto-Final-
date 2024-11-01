import styles from "./home.module.css";
import { Card } from "../Card/card";

export function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.ofertas}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero in
          autem voluptatum quam. Odio nostrum dignissimos et ea vel doloribus,
          enim obcaecati saepe minus. Magnam suscipit vel cumque placeat.
        </p>
      </section>

      <section className={styles.alta}>
        <div className={styles.emAlta}>
          <img className={styles.banner} src="" alt="" />
        </div>
      </section>

      <div className={styles.concursos}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <section className={styles.descubra}>
        <div className={styles.found}>
          <img className={styles.bussola} src="" alt="" />

          <h1>Descubra o concurso certo para você</h1>
        </div>
      </section>
    </div>
  );
}
