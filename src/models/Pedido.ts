import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import Atendente from './Atendente';

@Entity('pedido') 
class Pedido {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cliente: string;

  @Column()
  prato: string;

  @Column()
  bebida: string;

  @Column()
  status: 'fila' | 'producao' | 'entregue';

  @Column
  mesa: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Atendente, atendente => atendente.pedido, { eager: true })
  @JoinColumn({ name: 'atendente_id' })
  atendente: Atendente;
}

export default Pedido;