import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  rated: string;

  @Column()
  released: string;

  @Column()
  runtime: string;

  @Column()
  director: string;

  @Column()
  poster: string;

  @Column()
  imdbID: string;

  @Column()
  boxOffice: string;

  
}