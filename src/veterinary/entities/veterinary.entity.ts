import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Veterinary {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nameProduct: string;

  @Column()
  categoryProduct: string;

  @Column()
  description: string;

  @Column()
  priceProduct: string;

  @Column()
  amountProduct: number;
}
