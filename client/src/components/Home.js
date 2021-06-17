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
  const [search, setSearch] = useState("")
  
  useEffect(() => {
      dispatch(findPokemons());
    }, []);


  // console.log(pokemons[1], "POKEMONS////////////////////////////////////////////////")
  if(pokemons)var lastPage= pokemons[1]

  const [type, setType] = useState("none") 
  const [pageNumber, setPageNumber] = useState(1) 
  const [order, setOrder] = useState(true) 

  var previousPage=()=>{
    if(pageNumber>1){
      setPageNumber(pageNumber-1)
      dispatch(findPokemons(type, pageNumber-1, order))
    }
  }
  var nextPage=()=>{
    if(pageNumber<=lastPage){
      setPageNumber(pageNumber+1)
      dispatch(findPokemons(type, pageNumber+1, order))
    }
  }
  var previousPageUltra=()=>{
    if(pageNumber>10){
      setPageNumber(pageNumber-10)
      dispatch(findPokemons(type, pageNumber-10, order))
    }
  }
  var nextPageUltra=()=>{
    if(pageNumber<=lastPage-10){
      setPageNumber(pageNumber+10)
      dispatch(findPokemons(type, pageNumber+10, order))
    }
  }

  
  var orderChange=()=>{
    setOrder(!order)
    dispatch(findPokemons(type, pageNumber, !order))
  }
  console.log(order, "ORDERRR")

  var filterChange=({target})=>{
    setType(target.value)
    dispatch(findPokemons(target.value, pageNumber, order))
  }

  
  return (
    <div>
      {Array.isArray(pokemons) ? (
        <div>
          <button onClick={orderChange}>{order===true?"oldest ➡ newest": "newest ➡ oldest"}</button>
          <select  onClick={filterChange} name="select">
            <option value="none" selected>none</option>
            <option value="7">Bug</option>
            <option value="17">Dark</option>
            <option value="16">Dragon</option>
            <option value="13">Electric</option>
            <option value="18">Fairy</option>
            <option value="2">Fighting</option>
            <option value="10">Fire</option>
            <option value="3">Flying</option>
            <option value="8">Ghost</option>
            <option value="12">Grass</option>
            <option value="5">Ground</option>
            <option value="15">Ice</option>
            <option value="1">Normal</option>
            <option value="4">Poison</option>
            <option value="14">Psychic</option>
            <option value="6">Rock</option>
            <option value="9">Steel</option>
            <option value="11" >Water</option>
          </select>
          <div className={styles.contenedor}>
            {pokemons[0].map(({ name, types, img }) => (
              <Card name={name} type={types} img={img} key={name} />
            ))}
          </div>
          <hr/>
          <hr/>
          <button onClick={previousPageUltra}>Previous x10</button>
          <button onClick={previousPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
          <button onClick={nextPageUltra}>Next x10</button>
        </div>
      )  : typeof pokemons === 'object'? (
        <div className={styles.contenedor}>
              <Card name={pokemons.name} type={pokemons.types} img={pokemons.img} />
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
