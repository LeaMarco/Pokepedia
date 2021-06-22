import styles from "./pokemonDetail.module.css"
export default function topSelector(type){
    if(typeof type === 'object'){
    var topClass = "styles.tostylesPsychic"
    if (type[0] === "bug") {
        topClass =styles.topBug;
      }
      if (type[0] === "dark") {
        topClass = styles.topDark;
      }
      if (type[0] === "dragon") {
        topClass = styles.topDragon;
      }
      if (type[0] === "electric") {
        topClass = styles.topElectric;
      }
      if (type[0] === "fairy") {
        topClass = styles.topFairy;
      }
      if (type[0] === "fighting") {
        topClass = styles.topFighting;
      }
      if (type[0] === "fire") {
        topClass = styles.topFire;
      }
      if (type[0] === "flying") {
        topClass = styles.topFlying;
      }
      if (type[0] === "ghost") {
        topClass = styles.topGhost;
      }
      if (type[0] === "grass") {
        topClass = styles.topGrass;
      }
      if (type[0] === "ground") {
        topClass = styles.topGround;
      }
      if (type[0] === "ice") {
        topClass = styles.topIce;
      }
      if (type[0] === "normal") {
        topClass = styles.topNormal;
      }
      if (type[0] === "poison") {
        topClass = styles.topPoison;
      }
      if (type[0] === "Psychic") {
        topClass = styles.topPsychic;
      }
      if (type[0] === "rock") {
        topClass = styles.topRock;
      }
      if (type[0] === "steel") {
        topClass = styles.topSteel;
      }
      if (type[0] === "water") {
        topClass = styles.topWater;
      }} else {var topClass = styles.topNormal}
    
  return topClass
}