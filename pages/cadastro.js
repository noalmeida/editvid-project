import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Cadastro.module.css";
import img from "../public/imagens/laptop-2.svg";
import FormComponent from "../components/Form/Form";
import Link from "next/link";

export default function Cadastro() {
  return (
    <div className={styles.title}>
      <h1 className={styles.title}>
        Cadastre-se conosco! e tenha acesso aos melhores profissionais de edição
        AudioVisual
      </h1>
      <div>
        <Image src={img} alt="computador" width={200} height={200} />
      </div>

      <section className={styles.containerSection}>
        <FormComponent />
      </section>

      <section className={styles.containerSection}>
        <Link href="/">
          <a className={styles.linkvoltar}>Voltar para Home</a>
        </Link>
      </section>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/horizontal_on_white_by_logaster.png"
              alt="VidEdit Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
