import { React, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { findPokemons } from "../actions/index";
import { Link } from "react-router-dom";
import CardsContainer from "./CardsContainer";
import store from "../store";
import Card from "./Card"
import styles from "./Home.module.css"
function Home({pokemons}) {
const dispatch = useDispatch();
  // const pokemons = useSelector(state => state.pokemons);
  
  useEffect(() => {
    dispatch(findPokemons());
  }, []);
  console.log(pokemons);

  return (
    <div>
      {Array.isArray(pokemons) ? (
        <div className={styles.contenedor}>
          {pokemons.map((pokemon) => (
            <Card name={pokemon.name} type={pokemon.type} img={pokemon.img}></Card>
            // <div>
            // <h1 key={pokemon.name}>{pokemon.name}</h1> 
            // <img key={pokemon.name} src={pokemon.img} style={{maxWidth:'100px',maxHeigth:'100px'}}></img>
            // </div>
          ))}
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}

function mapStateToProps(state){
  return {pokemons: state.pokemons}
}


export default connect(mapStateToProps)(Home);
