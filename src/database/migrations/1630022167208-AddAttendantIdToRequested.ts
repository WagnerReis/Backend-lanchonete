import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from "typeorm";

export class AddAttendantIdToRequested1630022167208 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'requesteds',
      new TableColumn({
        name: 'attendant_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'requesteds',
      new TableForeignKey({
        columnNames: ['attendant_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'attendants',
        name: 'RequestedAttendant',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('requesteds', 'RequestedAttendant');
    await queryRunner.dropColumn('requesteds', 'attendant_id');
  }
}
