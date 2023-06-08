import { Request, Response } from "express"
import { createContactService } from "../services/contact/createContact.service"
import { TContactArray } from "../interfaces/contact.interface"
import { listContactService } from "../services/contact/listContact.service"
import { updateContactService } from "../services/contact/updateContact.service"
import { deleteContactService } from "../services/contact/deleteContact.service"


export const createContactController = async (request: Request, response: Response) => {

    const clientId = request.client.id

    const { name, email, contactNumber } = request.body

    const newContact = await createContactService({ name, email, contactNumber }, clientId)

    return response.status(201).json(newContact)

}

export const listContactController = async (request: Request, response: Response) => {
    
    const clientId = request.client.id

    const contact: TContactArray = await listContactService(clientId)

    return response.status(200).json(contact)

}

export const deleteContactController = async (request: Request, response: Response) => {
    const contactId = request.params.id;
  
    await deleteContactService(contactId);
  
    return response.status(204).send();
  };

  export const updateContactController = async (request: Request, response: Response) => {
    
    const contactId = request.params.id;
    const contactData = request.body;
  
    const updatedContact = await updateContactService(contactData, contactId);
  
    return response.status(200).json(updatedContact);
  };

