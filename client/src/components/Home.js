import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findPokemons } from "../actions/index";
import Card from "./Card";
import styles from "./Home.module.css";
import Spinner from "./Loader";

export default function Home() {
  const dispatch = useDispatch();
  let pokemons = useSelector((state) => state.pokemons);
  
  useEffect(() => {
      dispatch(findPokemons());
    }, []);


 const [type, setType] = useState("none") 
 const [sortType, setSortType] = useState("idAscending") 
  const [currentPage, setCurrentPage] = useState(0) 

  const returnHome=()=>{
    dispatch(findPokemons(type))
  }
  
  
  const previousPage=()=>{
    if(currentPage>0){
      setCurrentPage(currentPage-12)
      
    }
  }
  
  const nextPage=()=>{
    if(filteredPokemons().length>11 ){
      setCurrentPage(currentPage+12)
    }
  }
  
  
  var filterChange=({target})=>{
    setType(target.value)
    dispatch(findPokemons(target.value))
  }
  
  
  var orderChange = ({target}) => {
    setSortType(target.value)
  };
  
  console.log(typeof pokemons, pokemons, "POKEEEEMOSSSS")
  let sortedPokemons
  if(pokemons!==undefined && pokemons.length>1){
     sortedPokemons= pokemons.sort((a,b)=>{
      if(sortType==="az"||sortType==="za"){
        const isSorted = sortType === "az" ? 1: -1
        return isSorted*a.name.localeCompare(b.name)
      } else if (sortType=== "attackMaxToMin"||sortType=== "attackMinToMax" ) {
        const isSorted= sortType === "attackMinToMax" ? 1: -1 //////////controlar esto
        return (isSorted * a.attack.toString().localeCompare(b.attack.toString(),'en', {numeric: true}))
      }
      else if (sortType=== "idAscending"||sortType=== "idDescending" ) {
        const isSorted= sortType === "idAscending" ? 1: -1 //////////controlar esto
        return (isSorted * a.id.toString().localeCompare(b.id.toString(),'en', {numeric: true}))
      }else if (sortType=== "weightAscending"||sortType=== "weightDescending" ) {
        const isSorted= sortType === "weightAscending" ? 1: -1 //////////controlar esto
        return (isSorted * a.weight.toString().localeCompare(b.weight.toString(),'en', {numeric: true}))
      }
    })}
    
    var filteredPokemons = () => {
      if(pokemons!==undefined)
      return sortedPokemons.slice(currentPage, currentPage+12);
    };

 
  return (
    <div>
      {Array.isArray(pokemons) ? (
        <div>
        <div className={styles.filters}>
          <select  onClick={filterChange} name="select">
            <option defaultValue="none">none</option>
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
          <select  onClick={orderChange} name="select">
            <option value="idAscending">Order by ID ascending</option>
            <option value="idDescending">Order by ID descending</option>
            <option value="attackMinToMax">Order by attack ascending</option>
            <option value="attackMaxToMin">Order by attack descending</option>
            <option value="weightAscending">Order by weight ascending</option>
            <option value="weightDescending">Order by weight descending</option>
            <option value="az">Order by name A→Z</option>
            <option value="za">Order by name Z→A</option>
          </select>
        </div>
          
          <div className={styles.contenedor}>
            {filteredPokemons().map(({ name, types, img, id }) => (
              <Card id={id} name={name} type={types} img={img} key={Math.random()} />
            ))}
          </div>
          <hr/>
         
          <div className= {styles.pagination}>
          <button onClick={previousPage} className= {styles.button}>Previous</button>
          <h5 className= {styles.button}>{1+currentPage/12}</h5>
          <button onClick={nextPage} className= {styles.button}>Next</button>
          </div>
        </div>
      )  : typeof pokemons === 'object'? (
        <div>
          <button onClick={returnHome} className={styles.button} style={{ marginLeft: "12%", marginTop:"2rem" }}>Return!</button>
          <div className={styles.contenedor}>
              <Card id={pokemons.id} name={pokemons.name} type={pokemons.types} img={pokemons.img} />
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
