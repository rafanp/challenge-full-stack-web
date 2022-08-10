import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { STUDENTS_TABLE_NAME } from '@shared/infra/typeorm/utils';

@Entity(STUDENTS_TABLE_NAME)
class Student {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  ra: string;

  @Column()
  cpf: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Student };
