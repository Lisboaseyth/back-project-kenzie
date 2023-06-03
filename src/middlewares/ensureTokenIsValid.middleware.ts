import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import jwt from "jsonwebtoken";


export const ensureToken = (request: Request, response: Response, next: NextFunction): Response | void => {

    let token = request.headers.authorization

    if(!token){
        throw new AppError("Missing bearer token", 401)
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(error){
            throw new AppError(error.message, 401)
        }

        request.client = {
            id: String(decoded?.sub)
        }

        return next()
    })

}