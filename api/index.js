const axios = require("axios").default;
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Type } = require("./src/db");


const getTypes=()=>{
  axios.get("https://pokeapi.co/api/v2/type").then((response) => {
  response.data.results.map((type) => Type.create({ name: `${type.name}` }))})
}

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => { getTypes(),
    console.log('listening at 3001'); // eslint-disable-line no-console
  });
});
