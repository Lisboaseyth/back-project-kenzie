import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../error";
import { Repository } from "typeorm";


export const ensureEmail = async (request: Request, response: Response, next: NextFunction) => {
    
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const contactRepository = AppDataSource.getRepository(Contact)

    const bodyEmail = request.body.email

    try {
        if (bodyEmail) {
            const findEmailClient = await clientRepository.findOneBy({
                email: bodyEmail
            })
            if (findEmailClient !== null) {
                throw new AppError("Email already exists", 409)
            }
        }

        if (bodyEmail) {
            const findEmailContact = await contactRepository.findOneBy({
                email: bodyEmail
            })
            if (findEmailContact !== null) {
                throw new AppError("Email already exists", 409)
            }
        }

        return next()
    } catch (error: any) {
        // Aqui você pode lidar com o erro de forma adequada
        response.status(error.statusCode).json({ error: error.message })
    }
}