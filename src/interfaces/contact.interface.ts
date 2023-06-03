import { z } from 'zod'
import { contactSchema, contactSchemaArray, contactSchemaRequest, contactSchemaResponse } from '../schemas/contact.schema'
import { DeepPartial } from 'typeorm'

export type TContact = z.infer<typeof contactSchema>

export type TContactRequest = z.infer<typeof contactSchemaRequest>

export type TContactResponse = z.infer<typeof contactSchemaResponse>

export type TContactUpdate = DeepPartial<TContactRequest>

export type TContactArray = z.infer<typeof contactSchemaArray>