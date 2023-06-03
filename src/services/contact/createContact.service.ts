import { Repository } from "typeorm";
import { TContactRequest, TContactResponse } from "../../interfaces/contact.interface";
import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../error";
import { contactSchemaResponse } from "../../schemas/contact.schema";


export const createContactService =async ({ name, email, contactNumber }: TContactRequest, clientId: string): Promise<TContactResponse> => {
    
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const client: Client | null = await clientRepository.findOneBy({
        id: clientId
    })

    if(!client){
        throw new AppError("Client not exists", 404)
    }

    const contact: Contact = contactRepository.create({
        name,
        email,
        contactNumber,
        client
    })

    await contactRepository.save(contact)

    return contactSchemaResponse.parse(contact)

}