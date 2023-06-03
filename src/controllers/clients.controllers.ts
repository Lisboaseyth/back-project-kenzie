import { Request, Response } from "express";
import { createClientService } from "../services/client/createClient.service";
import { TClientArray, TClientRequest, TClientResponse } from "../interfaces/client.interface";
import { listClientsService } from "../services/client/listClient.service";
import { retrieveUserService } from "../services/client/retrieveClient.service";
import { deleteClientService } from "../services/client/deleteClient.service";
import { updateClientService } from "../services/client/updateClient.service";

export const createClientController = async (request: Request, response: Response) => {

    const { name, email, password, contactNumber }: TClientRequest = request.body

    const newClient = await createClientService({ name, email, password, contactNumber })

    return response.status(201).json(newClient)

}

export const listClientController = async (request: Request, response: Response) => {

    const clients: TClientArray = await listClientsService()

    return response.status(200).json(clients)

}

export const retrieveUserController = async (request: Request, response: Response) => {

    const clientId = request.client.id

    const client: TClientResponse = await retrieveUserService(clientId)

    return response.status(200).json(client)

}

export const deleteClienteController =async (request: Request, response: Response) => {
    
    const clientId = request.params.id

    await deleteClientService(clientId)

    return response.status(204).send()

}

export const updateClienteController =async (request: Request, response: Response) => {

    const data = request.body

    const clientId = request.params.id

    const updatedClient = await updateClientService(data, clientId)

    return response.status(201).json(updatedClient)

}