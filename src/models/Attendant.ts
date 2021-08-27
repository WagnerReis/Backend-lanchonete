import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import Requested from './Requested';

@Entity('attendants')
class Attendant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string

  @Column()
  password: string;

  @OneToMany(() => Requested, (requested) => requested.attendant)
  requested: Requested;
}

export default Attendant;
