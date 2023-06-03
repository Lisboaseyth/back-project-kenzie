import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../error";
import { TClientResponse } from "../../interfaces/client.interface";
import { clientSchemaResponse } from "../../schemas/client.schema";


export const retrieveUserService = async (clientId: string): Promise<TClientResponse> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepository.findOneBy({
        id: clientId
    })

    if(!client){
        throw new AppError("User not exists", 404)
    }

    return clientSchemaResponse.parse(client)

}