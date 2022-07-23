
import Link from 'next/link';
import styles from './../styles/styles.module.scss';
import Head from "../../node_modules/next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizandor de Tarefas </title>
      </Head>

      <main className={styles.contentContainer}>

        <img src="/images/board-user.svg" alt="Ferramenta Board" />

        <section className={styles.callToAction}>

          <h1>Uma ferramenta para o seu dia: Escreva, planeje e organize-se</h1>
          <p>
            <span>100% Gratuita</span> e online!
          </p>

          <div className={styles.donaters}>
            <img src="https://bit.ly/3Px1qPY" alt="Usuario 1" />
           
          </div>

        </section>

      </main>

    </>
  )
}
