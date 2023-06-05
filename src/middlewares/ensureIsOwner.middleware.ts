import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Contact } from "../entities/contact.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";


export const ensureOwner = async (request: Request, response: Response, next: NextFunction) => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const clientId: string = request.client.id
    const contactId: string = request.params.id

    try {
        
        const contact: Contact | null = await contactRepository.findOne({
            where: {
                id: contactId
            },
            relations: {
                client: true
            }
        })
    
        if(!contact){
            throw new AppError("Contact not found", 404)
        }
        
        if(contact.client.id !== clientId){
            throw new AppError("Insufficient permission", 403)
        }

    } catch (error: any) {
        response.status(error.statusCode).json({ error: error.message })
    }


    return next()

}