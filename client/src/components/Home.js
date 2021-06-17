import { React, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { findPokemons } from "../actions/index";
import CardsContainer from "./CardsContainer";
import store from "../store";
import Card from "./Card";
import styles from "./Home.module.css";
import Spinner from "./Loader";

export default function Home() {
  const dispatch = useDispatch();
  let pokemons = useSelector((state) => state.pokemons);
  
  useEffect(() => {
      dispatch(findPokemons());
    }, []);


 console.log(pokemons, "POKEMONS////////////////////////////////////////////////")
 const [type, setType] = useState("none") 
 const [order, setOrder] = useState(true) 
  const [currentPage, setCurrentPage] = useState(0) 

  const returnHome=()=>{
    dispatch(findPokemons(type, order))
  }
  
  
  const previousPage=()=>{
    if(currentPage>0){
      setCurrentPage(currentPage-12)
      
    }
  }
  
  const nextPage=()=>{
    if(filteredPokemons().length>currentPage + 12){
      
      setCurrentPage(currentPage+12)
    }
  }
  
  
  
  var orderChange=()=>{
    setOrder(!order)
    dispatch(findPokemons(type, !order))
  }
  
  var filterChange=({target})=>{
    setType(target.value)
    dispatch(findPokemons(target.value, order))
  }
  
  var filteredPokemons = () => {
    return pokemons.slice(currentPage, currentPage+12);
  };

  console.log(filteredPokemons().length, "LARGOOOO")

  
  return (
    <div>
      {Array.isArray(pokemons) ? (
        <div>
          <button onClick={orderChange}>{order===true?"oldest ➡ newest": "newest ➡ oldest"}</button>
          <select  onClick={filterChange} name="select">
            <option value="none" selected>none</option>
            <option value="bug">Bug</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="electric">Electric</option>
            <option value="fairy">Fairy</option>
            <option value="fighting">Fighting</option>
            <option value="fire">Fire</option>
            <option value="flying">Flying</option>
            <option value="ghost">Ghost</option>
            <option value="grass">Grass</option>
            <option value="ground">Ground</option>
            <option value="ice">Ice</option>
            <option value="normal">Normal</option>
            <option value="poison">Poison</option>
            <option value="psychic">Psychic</option>
            <option value="rock">Rock</option>
            <option value="steel">Steel</option>
            <option value="water" >Water</option>
          </select>
          <div className={styles.contenedor}>
            {filteredPokemons().map(({ name, types, img }) => (
              <Card name={name} type={types} img={img} key={name} />
            ))}
          </div>
          <hr/>
          <hr/>
          <button onClick={previousPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
        </div>
      )  : typeof pokemons === 'object'? (
        <div>
          <button onClick={returnHome}>Return!</button>
          <div className={styles.contenedor}>
              <Card name={pokemons.name} type={pokemons.types} img={pokemons.img} />
          </div>

        </div>

      )
      : (
        <div className={styles.loading}>
          <Spinner />
        </div>
      )}
    </div>
  );
}
