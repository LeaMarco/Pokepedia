import {
    CREATE_POKEMON,
    FIND_POKEMON,
    FIND_POKEMONS_BY_ID,
    FIND_POKEMONS_BY_NAME,
    CLEAR_POKEMON
  } from "../actions/actionNames";

  const initialState={pokemons: undefined}/////////////probar cambiar esto

  export default (state=initialState, action)=>{
    switch(action.type){
        case FIND_POKEMON: {
            return{
                ...state, pokemons: action.payload
            }
        }
        case CREATE_POKEMON: {
            return{
                ...state, pokemons: action.payload
            }
        }
        case FIND_POKEMONS_BY_ID: {
            return{
                ...state, pokemons: action.payload
            }
        }
        case CLEAR_POKEMON: {
            return{
                state: {pokemons: null}
            }
        }
        default: return state;
    } 
        
  }

