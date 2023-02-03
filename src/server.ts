import  express,{Request, Response}  from "express";
import swaggerUi from 'swagger-ui-express'
import bodyParser from "body-parser";
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';
import swaggerDocs from './swagger.json'

dotenv.config();


const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs));
server.use(express.json());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended:true}));
server.use(mainRoutes);
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());
server.get('/terms',(req:Request, res:Response)=>{
    return res.json({
        message:"Termos de Serviços"
    });
})
server.use((req:Request, res:Response)=>{
    res.status(404).send('Pagina não encontrada!')
});

server.listen(process.env.PORT);
