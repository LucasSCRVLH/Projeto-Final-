import { useState } from "react";
import logo from "../../img/logo.png";
import { MagnifyingGlass } from "@phosphor-icons/react";
import styles from "./header.module.css";
import { Modal } from "../Modal/Modal";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.imagem}>
        <img src={logo} alt="logo" />
      </div>

      <ul className={styles.listHeader}>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">Favoritos</a>
        </li>

        <li>
          <button
            className={styles.loginButton}
            onClick={() => setIsModalOpen(true)}
          >
            Login
          </button>
        </li>

        <li>
          <div className={styles.searchBar}>
            <MagnifyingGlass size={20} className={styles.icon} />
            <input
              type="text"
              placeholder="Procure seus concursos"
              className={styles.input}
            />
          </div>
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
