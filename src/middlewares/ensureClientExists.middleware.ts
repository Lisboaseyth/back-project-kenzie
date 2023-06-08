import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { AppError } from "../error";

export const ensureClientExists = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const clientRepository = AppDataSource.getRepository(Client);
  
    try {
      const findClient: Client | null = await clientRepository.findOne({
        where: {
          id: request.params.id,
        },
      });
  
      if (!findClient) {
        throw new AppError("Client not found", 404);
      }
    } catch (error: any) {
      next(error); // Lança o erro para o manipulador de erros global
      return; // Retorna imediatamente para evitar que o fluxo continue
    }
  
    next(); // Chama o próximo middleware ou controlador
  };