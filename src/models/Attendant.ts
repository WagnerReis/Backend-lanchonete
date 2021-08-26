import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import Request from './Request';

@Entity('attendant')
class Attendant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Request, (request) => request.attendant)
  request: Request;
}

export default Attendant;
