import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  quantity: number;

  @Column({
    type: 'text',
    nullable: true,
    transformer: new EncryptionTransformer({
      key: process.env.DB_ENCRYPTION_KEY!,
      algorithm: 'aes-256-cbc',
      ivLength: 16,
    }),
  })
  sensitiveData: string;
}