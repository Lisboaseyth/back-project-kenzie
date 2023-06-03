import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataBody.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contact.schema";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controllers";
import { ensureOwner } from "../middlewares/ensureIsOwner.middleware";
import { ensureToken } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureEmail } from "../middlewares/ensureEmail.middleware";


export const contactRoutes: Router = Router()

contactRoutes.post("", ensureToken, ensureEmail, ensureDataIsValid(contactSchemaRequest), createContactController)
contactRoutes.get("", ensureToken, listContactController)
contactRoutes.delete("/:id", ensureToken, ensureOwner, deleteContactController)
contactRoutes.patch("/:id", ensureToken, ensureOwner, ensureDataIsValid(contactSchemaUpdate), updateContactController)