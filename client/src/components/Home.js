import {React, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {findPokemons} from '../actions/index'
import {Link} from 'react-router-dom'

function Home() {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)
    useEffect(()=>{
        dispatch(findPokemons())
    }, [])
    console.log(pokemons)
    
    return (
             <div>
             <ul>
                 {
                     Array.isArray(pokemons) ? pokemons.map(pokemon => (
                         <li >
                             <Link to="">{pokemon.name}</Link>
                         </li>
                     )): <h1>Cargando...</h1>
                 }
             </ul>
         </div>
    )
}

export default Home
