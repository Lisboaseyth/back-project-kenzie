import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { TClient, TClientRequest, TClientResponse } from "../../interfaces/client.interface";
import { clientSchemaResponse } from "../../schemas/client.schema";

const createClientService = async ({ name, email, password, contactNumber }: TClientRequest): Promise<TClientResponse> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const hashedPassword = await hash(password, 10)

    const newClient = clientRepository.create({
        name,
        email,
        password: hashedPassword,
        contactNumber
    })

    await clientRepository.save(newClient)

    return clientSchemaResponse.parse(newClient)

}

export { createClientService }