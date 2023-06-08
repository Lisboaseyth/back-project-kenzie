import { Request, Response } from "express";
import { TLogin } from "../interfaces/login.interface";
import { loginService } from "../services/login/login.service";


export const loginController =async (request: Request, response: Response): Promise<Response> => {
    const requestData: TLogin = request.body

    const token = await loginService(requestData)

    return response.status(200).json({
        "info": token
    })
}