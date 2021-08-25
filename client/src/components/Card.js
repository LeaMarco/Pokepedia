import React from "react";
import p from "./Card.module.css";
import { Link } from "react-router-dom";

var pokeballImg =
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png";
function capitalOne(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export default function Card({ name, type, img, id}) {
  var topClass = p.topFire;
  if (type[0] === "bug") {
    topClass = p.topBug;
  }
  if (type[0] === "dark") {
    topClass = p.topDark;
  }
  if (type[0] === "dragon") {
    topClass = p.topDragon;
  }
  if (type[0] === "electric") {
    topClass = p.topElectric;
  }
  if (type[0] === "fairy") {
    topClass = p.topFairy;
  }
  if (type[0] === "fighting") {
    topClass = p.topFighting;
  }
  if (type[0] === "fire") {
    topClass = p.topFire;
  }
  if (type[0] === "flying") {
    topClass = p.topFlying;
  }
  if (type[0] === "ghost") {
    topClass = p.topGhost;
  }
  if (type[0] === "grass") {
    topClass = p.topGrass;
  }
  if (type[0] === "ground") {
    topClass = p.topGround;
  }
  if (type[0] === "ice") {
    topClass = p.topIce;
  }
  if (type[0] === "normal") {
    topClass = p.topNormal;
  }
  if (type[0] === "poison") {
    topClass = p.topPoison;
  }
  if (type[0] === "Psychic") {
    topClass = p.topPsychic;
  }
  if (type[0] === "rock") {
    topClass = p.topRock;
  }
  if (type[0] === "steel") {
    topClass = p.topSteel;
  }
  if (type[0] === "water") {
    topClass = p.topWater;
  }

  var typeTitle = "Type:";
  if (type.length > 1) {
    typeTitle = "Types:";
  }
  var imgAnimation = p.imgStill;
  if (img === pokeballImg) imgAnimation = p.imgMovement;

  return (
    <Link to={`/pokemons/${id}`} className={p.link}>
      <div className={p.carta}>
        <div className={topClass}></div>
        <div className={p.img}>
          <img
            key={name}
            src={img}
            style={{
              maxWidth: "150px",
              maxHeight: "150px",
              minHeight: "100px",
            }}
            className={imgAnimation}
          ></img>
        </div>

        <div className={p.datos}>
          <h1>{capitalOne(name)}</h1>
          <div>
            <h5 className={p.typeTitle}>{typeTitle}</h5>
            <h3 className={p.type}>{type.join(", ")}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
