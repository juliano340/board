
import Link from 'next/link';
import styles from './../styles/styles.module.scss';
import Head from "../../node_modules/next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizandor de Tarefas </title>
      </Head>

      <div>
        <h1 className={styles.title}>Primeiro projeto com <span>NextJS</span></h1>
      </div>

    </>
  )
}
