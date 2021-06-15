import React from "react";
import p from "./Card.module.css";

Object.defineProperty(String.prototype, "capitalOne", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
});

export default function Card({
  name = "Charizard",
  type = "fire",
  img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
}) {
  var topClass = p.topFire;
  // switch (type[0]) {
  //   case "fire":
  //     console.log("ENTRE EN FIREEEE")
  //     topClass = p.topFire;
      
  //   case "water":
  //     console.log("ENTRE EN waterrrr")

  //     topClass = p.topWater;
      
  //   case "grass":
  //     topClass = p.topGrass;
      
  //   default:
  //     topClass = p.topFire;
      
  // }
  if (type[0]==="bug") {topClass = p.topBug;}
  if (type[0]==="dark") {topClass = p.topDark;}
  if (type[0]==="dragon") {topClass = p.topDragon;}
  if (type[0]==="electric") {topClass = p.topElectric;}
  if (type[0]==="fairy") {topClass = p.topFairy;}
  if (type[0]==="fighting") {topClass = p.topFighting;}
  if (type[0]==="fire") {topClass = p.topFire;}
  if (type[0]==="flying") {topClass = p.topFlying;}
  if (type[0]==="ghost") {topClass = p.topGhost;}
  if (type[0]==="grass") {topClass = p.topGrass;}
  if (type[0]==="ground") {topClass = p.topGround;}
  if (type[0]==="ice") {topClass = p.topIce;}
  if (type[0]==="normal") {topClass = p.topNormal;}
  if (type[0]==="poison") {topClass = p.topPoison;}
  if (type[0]==="Psychic") {topClass = p.topPsychic;}
  if (type[0]==="rock") {topClass = p.topRock;}
  if (type[0]==="steel") {topClass = p.topSteel;}
  if (type[0]==="water") {topClass = p.topWater;}

  var typeTitle = "Type:";
  if (type.length > 1) {
    typeTitle = "Types:";
  }

  return (
    <div className={p.carta}>
      <div className={topClass}></div>
      <div className={p.img}>
        <img
          key={name}
          src={img}
          style={{ maxWidth: "150px", maxHeight: "150px" }}
        ></img>
      </div>

      <div className={p.datos}>
        <h1>{name.capitalOne()}</h1>
        <div >
          <h5 className={p.typeTitle}>{typeTitle}</h5>
          <h3 className={p.type}>{type.join(", ")}</h3>
        </div>
      </div>


      
    </div>
  );
}
