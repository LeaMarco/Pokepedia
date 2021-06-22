const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
      it('should throw an error if id is passed as null', (done) => {
        Pokemon.create({ id: null, name: 'Pikachu' })
          .then(() => done(new Error('It requires a valid UUIDV4 id')))
          .catch(() => done());
      });
      it('should throw an error if experience is passed as a string', (done) => {
        Pokemon.create({ name: 'Pikachu', experience: '150' })
          .then(() => done(new Error('It requires a number for experience')))
          .catch(() => done());
      });
      it('should throw an error if Hp is passed as a string', (done) => {
        Pokemon.create({ name: 'Pikachu', hp: '150' })
          .then(() => done(new Error('It requires a number for experience')))
          .catch(() => done());
      });
      it('should throw an error if Defense is passed as a string', (done) => {
        Pokemon.create({ name: 'Pikachu', defense: '150' })
          .then(() => done(new Error('It requires a number for experience')))
          .catch(() => done());
      });
      it('should throw an error if Height is passed as a string', (done) => {
        Pokemon.create({ name: 'Pikachu', height: '150' })
          .then(() => done(new Error('It requires a number for experience')))
          .catch(() => done());
      });
    });
  });
});
