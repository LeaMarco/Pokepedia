import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findPokemonsById } from "../actions/index";
import { useParams } from "react-router-dom";
import { clearPokemon } from "../actions/index";
import styles from "./pokemonDetail.module.css";
import Spinner from "./Loader";
import topSelector from "./topClassSelector";

function capitalOne(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
var pokeballImg =
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png";

export default function PokemonDetail() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);
  const { id } = useParams();

  useEffect(() => {
    dispatch(findPokemonsById(id));
    return () => {
      dispatch(clearPokemon());
    };
  }, []);


  console.log(pokemon, "INFO DEL POKEMON!")
  var imgAnimation = styles.imgStill;
  if (pokemon.img === pokeballImg) imgAnimation = styles.imgMovement;

  return pokemon.types ? (
    <div className={styles.container}>
      <div className={topSelector(pokemon.types)}></div>
      <img
        key={pokemon.name}
        src={pokemon.img}
        className={imgAnimation}
        style={{ maxWidth: "250px", maxHeight: "250px", minHeight: "200px" }}
      ></img>
      <div className={styles.datos}>
        <h1 className={styles.title}>{capitalOne(pokemon.name)}</h1>
        <h3 className={styles.types}>Type: {pokemon.types.join(", ")}</h3>
        <div className={styles.stats}>
          <h5>Attack: {pokemon.attack}</h5>
          <h5>Defense: {pokemon.defense}</h5>
          <h5>Hp: {pokemon.hp}</h5>
        </div>
        <div className={styles.stats}>
          <h5>Height: {pokemon.height}</h5>
          <h5>Weight: {pokemon.weight}</h5>
          <h5>Id: {pokemon.id}</h5>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.loading}>
      <Spinner />
    </div>
  );
}
