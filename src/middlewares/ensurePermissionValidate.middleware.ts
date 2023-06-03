import { Request, Response, NextFunction } from "express"
import { AppError } from "../error"

export const ensureUserPermission = async ( request: Request, response: Response, next: NextFunction ): Promise<void> => {
    const authenticatedUser = request.client               
    const clientId = request.params.id

    if (clientId !== authenticatedUser.id) {
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}