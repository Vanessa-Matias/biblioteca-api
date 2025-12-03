// Importa os decoradores do TypeORM para definir a tabela e suas colunas
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

// Isso vai dizer ao banco para criar uma tabela
@Entity()
export class Livro {

    @PrimaryGeneratedColumn() // -> ID que aumenta sozinho (1 ,2, 3 ...)
    id: number;

    @Column()
    titulo: string;

    @Column()
    autor: string;

    @Column ()
    isbn: string;

    @Column ()
    anoPublicacao: number;

    @Column ()
    disponivel: boolean;
}