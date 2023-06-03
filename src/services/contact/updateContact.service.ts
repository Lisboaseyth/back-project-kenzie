import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { TContactResponse, TContactUpdate } from "../../interfaces/contact.interface";
import { AppError } from "../../error";
import { contactSchemaResponse } from "../../schemas/contact.schema";


export const updateContactService = async (data: TContactUpdate, contactId: string): Promise<TContactResponse> => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact | null = await contactRepository.findOneBy({
        id: contactId
    })

    if(!contact){
        throw new AppError("Contact not found", 404)
    }

    const contactUpdate = contactRepository.create({
        ...contact, ...data
    })

    contactRepository.save(contactUpdate)

    return contactSchemaResponse.parse(contactUpdate)

}