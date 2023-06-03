import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"


export const deleteClientService =async (clientId: string): Promise<void> => {
    
    const clientRepository = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepository.findOne({
        where: {
            id: clientId
        }
    })

    await clientRepository.softRemove(client!)

}