import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from "typeorm";

export default class AddAtendenteIdEmPedidos1630004797705 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'requests',
        new TableColumn({
          name: 'attendants_id',
          type: 'uuid',
          isNullable: true,
        }),
      );

      await queryRunner.createForeignKey(
        'requests',
        new TableForeignKey({
          columnNames: ['attendants_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'attendants',
          name: 'RequestAttendant',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('requests', 'RequestAttendant');
      await queryRunner.dropColumn('requests', 'attendant_id');
    }
}
