import { Response, Request } from "express";
import {PrismaClient} from '@prisma/client';

const dados = new PrismaClient()

export const home = async (req:Request, res:Response)=>{
    
    let pessoa = await dados.veiculo.findMany({
        where:{
            Placa:'RPI8I79'
        },
        include:{
            Morador :true
        }
    });
  let result = pessoa.map(function(item,valor){
    let torre = ''
   switch (item.Morador.TorreId) {
       case 1:
        torre = 'Positano'
           break;
        case 2:
            torre = 'Vernazza'
            break;
        case 3:
            torre = 'Sorrento'
            break;
        case 4:
            torre = 'Ravello'
            break;
        case 5:
            torre = 'Maggiore'
            break;
        case 5:
            torre = 'Savona'
            break;    
        }    
        return [
            {
                Nome:item.Morador.Nome,
                Torre:torre,
                Apt:item.Morador.Unidade
        }];
    });
    console.log(result)
    res.render('pages/home',{
        tituloPagina: 'BUSCAR PLACAS',
        result
      });
  }
    

