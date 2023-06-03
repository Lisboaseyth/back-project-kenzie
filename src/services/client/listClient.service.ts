import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { TClientArray } from "../../interfaces/client.interface";
import { clientArraySchema } from "../../schemas/client.schema";


export const listClientsService = async (): Promise<TClientArray> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    
    const findClient: Array<Client> = await clientRepository.find()

    const clients = clientArraySchema.parse(findClient)

    return clients
}