import styles from './styles.module.scss';
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {

    const session = false;

    return session ? (
        <button
        type='button'
        className={styles.signInButton}
        onClick={ () => {}}
        >
            <img src="https://bit.ly/3Px1qPY" alt="Foto de perfil" />
            Olá, Juliano!
            <FiX color="#737380" className={styles.closeIcons} />

        </button>

    ) : (

        <button
        type='button'
        className={styles.signInButton}
        onClick={ () => {}}
        >
            <FaGithub
            color="#FFB800"/>
            
            Entrar com o github

        </button>
    )
    
}