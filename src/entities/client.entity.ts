import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity('client')
class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 120 })
    name: string;

    @Column({ type: 'varchar', length: 120, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 120 })
    password: string;

    @Column()
    contactNumber: string;

    @CreateDateColumn({ type: 'date'})
    createdAt: string;

    @UpdateDateColumn({ type: 'date'})
    updatedAt: string;

    @DeleteDateColumn({ type: 'date'})
    deletedAt: string;

    @OneToMany(() => Contact, (contact) => contact.client)
    contacts: Contact[]

}

export { Client }