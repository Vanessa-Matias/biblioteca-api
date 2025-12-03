// Importa a classe DataSource (gerenciador de conexão) e a entidade Livro que criei
import { DataSource } from "typeorm";
import { Livro } from "./entity/Livro";

// ==============================================
// CONFIGURAÇÕES DA CONEXÃO COM O BANCO DE DADOS
// ==============================================
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "AQUI VAI A SENHA",
    database: "biblioteca_db", // -> nome do banco que escolhi
    synchronize: true, // -> vai ajudar a criar tabelas automaticamente
    logging: false,
    entities: [Livro], // -> estou avisando que a entidade livro existe
    subscribers: [],
    migrations: [],

});
