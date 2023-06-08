import z from 'zod'
import { clientArraySchema, clientSchema, clientSchemaRequest, clientSchemaResponse, clientSchemaUpdate } from '../schemas/client.schema'
import { DeepPartial } from 'typeorm'

export type TClientRequest = z.infer<typeof clientSchemaRequest>

export type TClient = z.infer<typeof clientSchema>

export type TClientResponse = z.infer<typeof clientSchemaResponse>

export type TClientUpdateNew = z.infer<typeof clientSchemaUpdate>

export type TClientUpdate = DeepPartial<TClientRequest>

export type TClientArray = z.infer<typeof clientArraySchema>
