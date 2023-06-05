import { Request, Response, NextFunction } from "express"
import { ZodTypeAny } from "zod"

export const ensureDataIsValid = (schema: ZodTypeAny) => (request: Request, response: Response, next: NextFunction) => {


    try {
        
        const validatedData = schema.parse(request.body)
    
        request.body = validatedData

    } catch (error: any) {
        response.status(error.statusCode).json({ error: error.message })
    }

    return next()

}