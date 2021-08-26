 import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';

import Pedido from './Pedido';

@Entity('atendente')
class Atendente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Pedido, pedido => pedido.atendente)
  pedido: Pedido;
}

export default Atendente;