import { TClientResponse, TClientUpdate, TClientUpdateNew } from "../../interfaces/client.interface";
import { Repository } from "typeorm";
import { Client } from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt"
import { clientSchemaResponse } from "../../schemas/client.schema";


export const updateClientService = async (data: TClientUpdate, clientId: string): Promise<TClientUpdateNew> => {
    
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client = await clientRepository.findBy({
        id: clientId
    })

    let hashedPassword = ""

    if(data.password){
        hashedPassword = bcrypt.hashSync(data.password, 10)
        data.password = hashedPassword
    }

    const updatedData = clientRepository.create({
        ...client, ...data
    })

    await clientRepository.save(updatedData)

    const updatedClient = clientSchemaResponse.parse(updatedData)

    return updatedClient

}