import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'pharmacys' })
export class Pharmacy {
  @PrimaryColumn()
  id: string;

  @Column()
  soon: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  address: string;

  @Column()
  opening_hours: Date;

  @Column()
  accountable: string;

  @Column()
  telephone: string;

  @Column()
  other: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
