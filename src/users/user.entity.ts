import { Entity, Column, PrimaryGeneratedColumn, AfterInsert } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password:string;

    @AfterInsert()
    logInsert() {
        console.log('Inserted User with id ',this.id);
    }
}