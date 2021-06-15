import { React, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createPokemon} from "../actions/index";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Spinner from "./Loader";

export default function Create() {
  const dispatch = useDispatch();
  const [pokemonData, setpokemonData] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types:["fire"]
  })

  var handleInputChange = ({target}) =>{
    setpokemonData({...pokemonData, [target.name]: target.value})
  }
 console.log(pokemonData, "POKEMON DATAA")

 const handleSubmit= (e)=>{
     e.preventDefault();
     dispatch(createPokemon(pokemonData))
   }
 
  return ( 
    <form onSubmit={(e)=>handleSubmit(e)}>
          <input type="text" placeholder="Name" name="name" onChange={handleInputChange}></input>
          <input type="text" placeholder="Hp" name="hp" onChange={handleInputChange}></input>
          <input type="text" placeholder="Attack" name="attack" onChange={handleInputChange}></input>
          <input type="text" placeholder="Defense" name="defense" onChange={handleInputChange}></input>
          <input type="text" placeholder="Speed" name="speed" onChange={handleInputChange}></input>
          <input type="text" placeholder="Height" name="height" onChange={handleInputChange}></input>
          <input type="text" placeholder="Weight" name="weight" onChange={handleInputChange}></input>
          <hr/>
          <button type="submit">CREATE</button>
          </form>
   
  );
}



    