import Image from "next/image"
import styles from '@/styles/Card.module.scss'
import Link from "next/link"

export default function Card({pokemon}){
    return(
        <div className={styles.Card }>
            <Image src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="pokemon" width={170} height={170}/>
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}>
            <p>Detalhes</p>
            </Link>
        </div>

        
    )
}