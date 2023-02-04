import e, { Response, Request, response } from "express";
import {PrismaClient } from '@prisma/client';
import console from "console";



const prisma = new PrismaClient()
  export const buscar = async (req:Request, res:Response)=>{
    let  dadosMorador = await prisma.veiculo.findFirst({

        where:{
            Placa:req.body.txtPlaca//'RPI8I79'
        },
        include:{
            Morador :true,     
       } 

  });

    res.render('pages/buscar',{
        tituloPagina: 'Dados da Pesquisa', 
        dadosMorador
      
      });

  }






