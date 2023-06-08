import z from 'zod'

export const clientSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    contactNumber: z.string()
})

export const clientSchemaRequest = clientSchema.omit({
    id: true
})

export const clientSchemaResponse = clientSchema.extend({
    createdAt: z.string(),
    deletedAt: z.string().nullable(),
    updatedAt: z.string(),
}).omit({
    password: true
})

export const clientSchemaUpdate = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    contactNumber: z.string().optional(),
    password: z.string().optional()
})

export const clientArraySchema = clientSchemaResponse.array()
