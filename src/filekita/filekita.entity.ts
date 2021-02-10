import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FilekitaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    nama: string;

    @Column('text')
    deskripsi: string;

    @Column()
    isPublik: boolean;
}
