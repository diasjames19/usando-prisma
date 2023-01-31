import  express,{Request, Response}  from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';


dotenv.config();


const server = express();
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended:true}));
server.use(mainRoutes);
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());
server.use((req:Request, res:Response)=>{
    res.status(404).send('Pagina não encontrada!')
});

server.listen(process.env.PORT);
