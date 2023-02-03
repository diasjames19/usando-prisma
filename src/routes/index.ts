import { Morador, PrismaClient, Veiculo } from '@prisma/client';
import { response, Router } from 'express';
import { request, } from 'http';
import * as HomeController from '../controllers/homeController';
import * as BuscarController from '../controllers/buscarController';

const router = Router();



router.get('/',HomeController.home);
router.get('/buscar',BuscarController.buscar);
router.post('/buscar',BuscarController.buscar);


export default router;
