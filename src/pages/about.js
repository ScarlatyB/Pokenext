import Link from "next/link"
import styles from "../styles/About.module.scss"
import Image from "next/image"

export default function About(){
    return(
    <div className={styles.about}>
    <h1>Sobre o projeto</h1>
    <p>Este projeto foi feito junto do curso de Next.js do professor Mather Batisti,</p>
        <p> sendo implementado por mim o Sass no lugar de css puro</p>
    <Image src="/image/pikachu.png" alt="pokemon" width={250} height={300}/>
    </div>
    )
}