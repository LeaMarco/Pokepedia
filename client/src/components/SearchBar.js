import { React, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { findPokemonsById } from "../actions/index";
import { Link } from "react-router-dom";
import CardsContainer from "./CardsContainer";
import store from "../store";
import Card from "./Card";
import styles from "./Home.module.css";
import Spinner from "./Loader";

export default function SearchBar() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const [search, setSearch] = useState("")
  console.log(search, "POKEMONS////////////////////////////////////////////////")
  
  const handleSubmit= (e)=>{
    e.preventDefault();
    dispatch(findPokemonsById(search))
  }
 

  var onSearchChange = ({target}) =>{
    setSearch(target.value)
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
          <input type="text" placeholder="buscar pokemon" value= {search} onChange={onSearchChange}></input> 
          <button  type="submit">BUSCAR</button>
    </form>
  );
}
