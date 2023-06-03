import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: 'varchar', length: 120 })
    name: string;

    @Column({ type: 'varchar', length: 120 })
    email: string

    @Column()
    contactNumber: string;

    @CreateDateColumn({ type: 'date'})
    createdAt: string;

    @UpdateDateColumn({ type: 'date'})
    updatedAt: string;

    @DeleteDateColumn({ type: 'date'})
    deletedAt: string;

    @ManyToOne(() => Client, (client) => client.contacts)
    client: Client
}

export { Contact }