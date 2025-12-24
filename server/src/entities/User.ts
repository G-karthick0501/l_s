import{
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from "typeorm";

@Entity() export class User{
    @PrimaryGeneratedColumn()
    id!:Number;

    @Column({length:30})
    name!:String;

    @Column({unique:true})
    email!:String;

    @CreateDateColumn()
    createdAt!:Date;    
}