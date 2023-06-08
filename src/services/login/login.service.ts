import { Request, Response } from "express";
import { TLogin } from "../../interfaces/login.interface";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../error";
import { compare } from "bcrypt";
import jwt from 'jsonwebtoken'


export const loginService = async (request: TLogin): Promise<object> => {
    const clientRepo = AppDataSource.getRepository(Client)
    const findCLient = await clientRepo.findOneBy({ email: request.email })

    if(!findCLient) {
        throw new AppError("Invalid credencials", 401)
    }
    
    const validatePass = await compare(request.password, findCLient.password)

    if(!validatePass) {
        throw new AppError("Invalid credencials", 401)
    }

    const token = jwt.sign(
        {
            email: findCLient.email
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "48h",
            subject: findCLient.id
        }
    )

    const returnBody = {
        token: token,
        name: findCLient.name,
        email: findCLient.email,
        contactNumber: findCLient.contactNumber
    }

    return returnBody
    
}