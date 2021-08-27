import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Attendant from './Attendant';

@Entity('requesteds')
class Request {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  client: string;

  @Column()
  hamburger: string;

  @Column()
  drink: string;

  @Column()
  status: 'row' | 'production' | 'delivered';

  @Column()
  table: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Attendant, attendant => attendant.requested, { eager: true })
  @JoinColumn({ name: 'attendant_id' })
  attendant: Attendant;

  @Column()
  attendant_id: string;
}

export default Request;
