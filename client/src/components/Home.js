import { React, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { findPokemons } from "../actions/index";
import { Link } from "react-router-dom";
import CardsContainer from "./CardsContainer";
import store from "../store";
import Card from "./Card"
import styles from "./Home.module.css"
import Spinner from "./Loader"


export default function Home() {
const dispatch = useDispatch();
const pokemons = useSelector(state => state.pokemons);
  
  useEffect(() => {
    dispatch(findPokemons());
  }, []);
  console.log(pokemons);

  return (
    <div>
      {Array.isArray(pokemons) ? (
        <div className={styles.contenedor}>
          {pokemons.map(({name, types, img}) => (
            <Card name={name} type={types} img={img}/>
          ))}
        </div>
      ) : (
        <div className={styles.loading}>

          <Spinner/>
        </div>
      )}
    </div>
  );
}

