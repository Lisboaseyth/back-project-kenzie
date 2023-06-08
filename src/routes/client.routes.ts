import { Router } from 'express'
import { createClientController, deleteClienteController, listClientController, retrieveUserController, updateClienteController } from '../controllers/clients.controllers'
import { ensureEmail } from '../middlewares/ensureEmail.middleware'
import { ensureDataIsValid } from '../middlewares/ensureDataBody.middleware'
import { clientSchemaRequest } from '../schemas/client.schema'
import { ensureToken } from '../middlewares/ensureTokenIsValid.middleware'
import { ensureUserPermission } from '../middlewares/ensurePermissionValidate.middleware'
import { ensureClientExists } from '../middlewares/ensureClientExists.middleware'

export const clientRoutes = Router()

clientRoutes.post("", ensureEmail, ensureDataIsValid(clientSchemaRequest), createClientController)
clientRoutes.get("", listClientController)
clientRoutes.delete("/:id", ensureToken, ensureUserPermission, ensureClientExists, deleteClienteController)
clientRoutes.patch("/:id", ensureToken, ensureClientExists, updateClienteController)
clientRoutes.get("/profile", ensureToken, retrieveUserController)