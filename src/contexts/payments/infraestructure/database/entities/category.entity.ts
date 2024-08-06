import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class CategoryEntity {
  @PrimaryGeneratedColumn({ name: 'category_id' })
  categoryId: number;
  @Column({ name: 'category_name' })
  categoryName: string;
  @Column()
  description: string;
  @Column()
  picture: string;
}
