import firebase from '../services/firebaseConnection';
import Link from 'next/link';
import styles from './../styles/styles.module.scss';
import Head from "../../node_modules/next/head";
import { GetStaticProps } from 'next';
import { useState } from "react";
import Image from "next/image";
import boardUser from '../../public/images/board-user.svg';


interface HomeProps {
  data: string;

}

type Data = {
  id: string;
  donate: boolean;
  lastDonate: Date;
  image: string;
}

export default function Home( {data} : HomeProps ) {

  const [donaters, setDonaters] = useState<Data[]>(JSON.parse(data));

  return (
    <>
      <Head>
        <title>Board - Organizandor de Tarefas </title>
      </Head>

      <main className={styles.contentContainer}>

        <Image src={boardUser} alt="Ferramenta Board" />

        <section className={styles.callToAction}>

          <h1>Uma ferramenta para o seu dia: Escreva, planeje e organize-se</h1>
          <p>
            <span>100% Gratuita</span> e online!
          </p>

          {donaters.length !== 0 && <h3>Apoiadores:</h3>}
          <div className={styles.donaters}>
            {donaters.map(item => (
              <Image width={65} height={65} key={item.image} src={item.image} alt="Usuário perfil" />
            ))}
           
          </div>

        </section>

      </main>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

const donaters = await firebase.firestore().collection('users').get();
const data = JSON.stringify(donaters.docs.map(u => {
  return {
    id: u.id,
    ...u.data(),
  }
}))

  return {
    props: {
      data
    },
    revalidate: 60 * 60
  }
  
}