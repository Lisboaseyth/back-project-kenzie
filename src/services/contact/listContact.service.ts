import { Repository } from "typeorm";
import { TContactArray } from "../../interfaces/contact.interface";
import { Client } from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../error";
import { contactSchemaArray } from "../../schemas/contact.schema";


export const listContactService = async (clientId: string): Promise<TContactArray> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const client: Client | null =  await clientRepository.findOneBy({
        id: clientId
    })

    if(!client){
        throw new AppError("Client not exists", 404)
    }

    const contact: Contact[] = await contactRepository.find({
        where: {
            client: client
        }
    })

    return contactSchemaArray.parse(contact)

}