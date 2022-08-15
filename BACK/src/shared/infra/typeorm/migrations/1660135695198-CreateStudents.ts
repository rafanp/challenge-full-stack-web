import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { created_at_column, id_column, STUDENTS_TABLE_NAME } from '../utils';

export class CreateStudents1660135695198 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: STUDENTS_TABLE_NAME,
        columns: [
          id_column,
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'varchar',
          },
          {
            name: 'ra',
            type: 'varchar',
          },
          created_at_column,
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(STUDENTS_TABLE_NAME);
  }
}
