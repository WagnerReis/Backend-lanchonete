import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import Request from './Request';

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

  @OneToMany(() => Request, (request) => request.attendant)
  request: Request;
}

export default Attendant;
