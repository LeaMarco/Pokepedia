import { React, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { findPokemons } from "../actions/index";
import { Link } from "react-router-dom";
import CardsContainer from "./CardsContainer";
import store from "../store";
import Card from "./Card";
import styles from "./Home.module.css";
import Spinner from "./Loader";

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState("")

  useEffect(() => {
    dispatch(findPokemons());
  }, []);
  console.log(pokemons);

  var filteredPokemons = () => {
    if(search.length===0){
      return pokemons.slice(currentPage, currentPage+12);
    } else {
      const filtered= pokemons.filter(pokemon => pokemon.name.includes(search))
      return filtered.slice(currentPage, currentPage+12);
    }
  };

  var previousPage=()=>{
    if(currentPage>0){
      setCurrentPage(currentPage-12)

    }
  }

  var nextPage=()=>{
    if(filteredPokemons().length>5){
      setCurrentPage(currentPage+12)
    }
  }


  var onSearchChange = ({target}) =>{
    setCurrentPage(0)
    setSearch(target.value)
  }
  return (
    <div>
      {Array.isArray(pokemons) ? (
        <div>
          <img className={styles.logo} src="https://res.cloudinary.com/nsnc/image/upload/v1623695450/logo_copy_vkphgb.png"></img>
          <hr/>
          <input type="text" placeholder="buscar pokemon" value= {search} onChange={onSearchChange}></input>
          <div className={styles.contenedor}>
            {filteredPokemons().map(({ name, types, img }) => (
              <Card name={name} type={types} img={img} />
            ))}
          </div>
          <button onClick={previousPage}>Previous</button>
          
          <button onClick={nextPage}>Next</button>
        </div>
      ) : (
        <div className={styles.loading}>
          <Spinner />
        </div>
      )}
    </div>
  );
}
