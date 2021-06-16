import { React, useEffect} from "react";
import {useDispatch, useSelector } from "react-redux";
import {findPokemonsById} from "../actions/index";
import {useParams } from "react-router-dom";
import { clearPokemon } from "../actions/index";
import styles from "./pokemonDetail.module.css"
import Spinner from "./Loader";




export default function PokemonDetail() {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemons)
    const {id} = useParams()
console.log(pokemon, "POKEMON")

    useEffect(()=>{
        dispatch(findPokemonsById(id))
        return ()=>{
            dispatch(clearPokemon())
        }
    }, [] )
   
return(
    typeof pokemon === 'object' ? (
        <div className={styles.container}>
                <img
                    key={pokemon.name}
                    src={pokemon.img}
                    style={{ maxWidth: "150px", maxHeight: "150px", minHeight: "100px" }}
                    ></img>
                <h1>{pokemon.name}</h1>
                <h3>Types: {pokemon.types}</h3>
                <h5>{pokemon.id}</h5>
                <h5>Attack: {pokemon.attack}</h5>
                <h5>Defense: {pokemon.defense}</h5>
                <h5>Hp: {pokemon.hp}</h5>
                <h5>Height: {pokemon.height}</h5>
                <h5>Weight: {pokemon.weight}</h5>
        </div>
    )
          : (
            <div className={styles.loading}>
              <Spinner />
            </div>
          )
          
)
  
}

