import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes.js';

dotenv.config({ path: './config/config.env' });

const server = express();
const port = process.env.PORT || 5000;
server.listen(port, console.log("Servidor rodando em " + process.env.NODE_ENV + " na porta " + port + "..."));

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(router);