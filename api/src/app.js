const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors')

require('./db.js');

const server = express();
server.use(cors())

server.name = 'API';


server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));




// server.use('/', express.static(path.join(__dirname, '/')));

// server.use(
// 	cors({
// 		origin: process.env.HOST_FRONT,
// 		credentials: false,
// 		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
// 		allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
// 	})
// );

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
