import React from "react";
import styles from "../styles/QuemSomos.module.css";
import Link from "next/link";

export default function Quemsomos() {
  return (
    <div className={styles.title}>
      {" "}
      Quem somos
      <section>
        <p className={styles.description}>
          {" "}
          Somos uma organização com pessoal altamente capacitado que presta
          serviços para produção de todo tipo de trabalho audiovisual.
        </p>
        <Link href="/">
          <a>Voltar para Home</a>
        </Link>
      </section>
    </div>
  );
}
