/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
  id: 100000,
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );
  describe("GET all pokemons", () => {
    it("should get 200", () => agent.post('/')
    .send({ type: "none" }).then(res=>expect(200))).timeout(3000);
  });
  describe("GET pokemos of any type", () => {
    it("fire: should get 200", () => agent.post('/')
    .send({ type: "fire" }).then(res=>expect(200))).timeout(3000);
    it("electric: should get 200", () => agent.post('/')
    .send({ type: "electric" }).then(res=>expect(200))).timeout(3000);
    it("porsion: should get 200", () => agent.post('/')
    .send({ type: "poison" }).then(res=>expect(200))).timeout(3000);
  });
  describe("GET pokemos of some type", () => {
    it("Pokemon.length must be 40", () => agent.post('/')
    .send({ type: "fire" }).then((res) => expect(res.body).to.have.lengthOf.at.least(40))).timeout(3000);
  });
  describe("GET Pikachu by ID", () => {
    it("should get 200", () => agent.get("/pokemon/100000").expect(200));
  });
  describe("GET Pikachu by Name", () => {
    it("should get 200", () => agent.get("/find?name=pikachu").expect(200));
  });
});
