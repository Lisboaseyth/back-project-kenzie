import { z } from 'zod'

export const contactSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    contactNumber: z.string()
})

export const contactSchemaRequest = contactSchema.omit({
    id: true
})

export const contactSchemaUpdate = contactSchema.omit({
    id: true
}).partial()

export const contactSchemaResponse = contactSchema.extend({
    createdAt: z.string(),
    updatedAt: z.string(),
})

export const contactSchemaArray = contactSchemaResponse.array()