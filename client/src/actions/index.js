import {
  CREATE_POKEMON,
  FIND_POKEMON,
  FIND_POKEMONS_BY_ID,
  FIND_POKEMONS_BY_NAME,
  CLEAR_POKEMON,
} from "./actionNames";
import axios from 'axios'

export function findPokemons(type,pageNumber, order) {
  return (dispatch) => {
    axios.post(`${process.env.REACT_APP_HOST_BACKEND}`, 
    {
      type: type?type: "none", 
      pageNumber: pageNumber? pageNumber:1,
      order: order
    }).then((response) => {
      dispatch({ type: FIND_POKEMON, payload: response.data });
    });
  };
}

export function findPokemonsById(payload) {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_HOST_BACKEND}/pokemon/${payload}`)
      .then((response) => {
        dispatch({ type: FIND_POKEMONS_BY_ID, payload: response.data }); ////////////////OJO CON ESTO
      })
      .catch((error) => console.log(error));
  };
}

export function findPokemonsByName(payload) {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_HOST_BACKEND}/?name=${payload}`)
      .then((response) => {
        dispatch({ type: FIND_POKEMONS_BY_NAME, payload: response.data }); ////////////////OJO CON ESTO
      })
      .catch((error) => console.log(error));
  };
}

export function createPokemon(payload) {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_HOST_BACKEND}/create`, payload)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
}

export function clearPokemon() {
  return (
    {type: CLEAR_POKEMON}
  );
}


