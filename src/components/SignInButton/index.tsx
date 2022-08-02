import {signIn, signOut, useSession} from 'next-auth/client'

import styles from './styles.module.scss';
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Image from 'next/image';


export function SignInButton() {

    const [session]= useSession();

    

    return session ? (
        <button
        type='button'
        className={styles.signInButton}
        onClick={ () => { signOut() }}
        >
            <div>
                <Image objectFit='fill' width={35} height={35} src={session.user.image} alt="Foto de perfil" />
            </div>
            Olá, {session.user.name}
            <FiX color="#737380" className={styles.closeIcons} />

        </button>

    ) : (

        <button
        type='button'
        className={styles.signInButton}
        onClick={ () => { signIn('github') }}
        >
            <FaGithub
            color="#FFB800"/>
            
            Entrar com o github

        </button>
    )
    
}