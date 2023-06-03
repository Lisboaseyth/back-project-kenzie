import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataBody.middleware";
import { loginSchema } from "../schemas/login.schema";
import { loginController } from "../controllers/login.controllers";


export const loginRoutes: Router = Router()

loginRoutes.post("", ensureDataIsValid(loginSchema), loginController)