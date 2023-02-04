import e, { Response, Request, response } from "express";
import {PrismaClient } from '@prisma/client';
import console from "console";



const prisma = new PrismaClient()
export const home = async (req:Request, res:Response)=>{
    
    res.render('pages/home',{
        tituloPagina: 'BUSCAR PLACAS',  
        
      });

  }
  





