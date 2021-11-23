import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidv4} from 'uuid'

@Entity({name: 'products'})
export class Product {
    @PrimaryColumn()
    id: string;

    @Column()
    thumbnail: string;

    @Column()
    name: string;

    @Column()
    price: Number;

    @Column()
    makings: string;

    @Column()
    availability: string;

    @Column()
    volume: string;

    @Column()
    other: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}
