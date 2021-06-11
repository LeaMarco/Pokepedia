import {
    CREATE_POKEMON,
    FIND_POKEMON,
    FIND_POKEMONS_BY_ID,
    FIND_POKEMONS_BY_NAME,
  } from "../actions/actionNames";

  const initialState={pokemons: undefined}

  export default function reducer(state=initialState, action){
    switch(action.type){
        case FIND_POKEMON: {
            return{
                ...state, pokemons: action.payload
            }
        }
    }
        
  }

