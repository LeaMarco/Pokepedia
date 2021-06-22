import { React, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createPokemon } from "../actions/index";
import styles from "./Create.module.css";
const axios = require("axios").default;

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
    types: [],
  });

  var initialTypesState = {
    bug: false,
    dark: false,
    dragon: false,
    electric: false,
    fairy: false,
    fighting: false,
    flying: false,
    ghost: false,
    grass: false,
    ground: false,
    ice: false,
    normal: false,
    posion: false,
    psychic: false,
    rock: false,
    steel: false,
    water: false,
  };

  let [types, setTypes] = useState(initialTypesState);
  let selectedTypes = Object.keys(types).filter((x) => types[x]);

  let checkboxClick = (e) => {
    let { name, checked } = e.target;
    setTypes({
      ...types,
      [name]: checked,
    });
  };

  function handleSubmit(e) {
    if (selectedTypes.length < 1) {
      alert("Chose at least one type");
    }
    if (selectedTypes.length >= 1) {
      e.preventDefault();
      setpokemonData((pokemonData.types = selectedTypes));
      axios
        .post("http://localhost:3001/create", pokemonData)
        .then((response) => {
          alert(response.data);
        });
      // clearState();
      setTypes(initialTypesState);
      setpokemonData({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
      })
    }
  }

  var handleInputChange = ({ target }) => {
    setpokemonData({ ...pokemonData, [target.name]: target.value });
   
  };

  //  var addTypes= ({target}) =>{
  //   setpokemonData
  //  }

  return (
    <div className={styles.Container}>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <div className={styles.inputsContainer}>
          <h2>Create your own pokémon!</h2>
          <input
            className={styles.inputs}
            type="text"
            autoComplete="off"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
            required
          ></input>
          <input
            className={styles.inputs}
            type="number"
            autoComplete="off"
            min="1"
            max="100"
            placeholder="Hp"
            name="hp"
            onChange={handleInputChange}
            required
          ></input>
          <input
            className={styles.inputs}
            type="number"
            autoComplete="off"
            min="1"
            max="100"
            placeholder="Attack"
            name="attack"
            onChange={handleInputChange}
            required
          ></input>
          <input
            className={styles.inputs}
            type="number"
            autoComplete="off"
            min="1"
            max="100"
            placeholder="Defense"
            name="defense"
            onChange={handleInputChange}
            required
          ></input>
          <input
            className={styles.inputs}
            type="number"
            autoComplete="off"
            min="1"
            max="100"
            placeholder="Speed"
            name="speed"
            onChange={handleInputChange}
            required
          ></input>
          <input
            className={styles.inputs}
            type="number"
            autoComplete="off"
            min="1"
            max="10000"
            placeholder="Height"
            name="height"
            onChange={handleInputChange}
            required
          ></input>
          <input
            className={styles.inputs}
            type="number"
            autoComplete="off"
            min="1"
            max="10000"
            placeholder="Weight"
            name="weight"
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <hr />
        <h3>Select one or more types</h3>
        <div className={styles.checkBox}>
          {Object.keys(types).map((key, index) => (
            <label key={index} htmlFor={key}>
              <input
                type="checkbox"
                key={key}
                name={key}
                id={key}
                checked={types[key]}
                onChange={checkboxClick}
              />
              <span>{key}</span>
            </label>
          ))}
        </div>

        <button type="submit" className={styles.button}>
          Create!
        </button>
      </form>
    </div>
  );
}


