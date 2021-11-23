import { query } from 'express';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductsTable1637606541172 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'thumbnail',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'float',
          },
          {
            name: 'makings',
            type: 'varchar',
          },
          {
            name: 'availability',
            type: 'varchar',
          },
          {
            name: 'volume',
            type: 'varchar',
          },
          {
            name: 'other',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('products')
  }
}
