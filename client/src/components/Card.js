import React from 'react';
import p from './Card.module.css'

export default function Card({name="Charizard", type="fire", img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"}) {
    return (
      <div className={p.carta}>
        
        <div className={p.top}>
          
        </div>

        <div className={p.img}>
        <img key={name} src={img} style={{maxWidth:'150px',maxHeigth:'150px'}}></img>
        </div>
        
        <div className={p.datos}>
          <div>
            <h1>{name}</h1>
            <h3>{type}</h3>
          </div>
          
        </div>
        
        
      </div>
      )
  };