import Card from "./Card"
import { useState } from "react"
import styles from '@/styles/SearchPoke.module.scss'


export default function SearchPoke({pokemon}){
    
    console.log('returnpoki',pokemon)

    const [SearchPokemon, SetSearchPokemon] = useState("")
  


    return(
    
        <div  className={styles.input}>
        <input
         type="text" 
         placeholder = "search your pokemon here"
         onChange = {(event) => {
        SetSearchPokemon(event.target.value);
        }}
        />
        {pokemon.filter((val) =>{
            if(SearchPokemon === ""){
                return null
            }else if(val.name.toLowerCase().includes(SearchPokemon.toLowerCase())){
                return val
            }
        }).map((pokemon)=>{
          return (
          
          <div key={pokemon} className={styles.div} >
           <Card key={pokemon.id}pokemon={pokemon} className={styles.card} />
          </div>
          )
        })}
        </div>
    )
}
