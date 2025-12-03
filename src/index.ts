// Importa o suporte a metadados (obrigatório para o TypeORM), o framework Express (para criar o servidor) e a minha conexão com o banco.
import "reflect-metadata";
import express from "express";
import {AppDataSource} from "./data-source";
import livroRouter from "./routes/livro.routes";

// Cria a estrutura vazia da minha aplicação
const app = express();

// Esse caminho vai permirtit que o meu servirdor entenda quando eu enviar dados em formato JSON
app.use(express.json());

// Linha que vai ativar as rotas no endereço
app.use("/api/livros", livroRouter);

// 1. Tenta conectar com o Banco de Dados primeiro
AppDataSource.initialize().then(() => {
    console.log("Banco conectado com sucesso!");

    // 2. Se o Banco conectar, o servirdor vai iniciar
    app.listen(3000, () => {
        console.log("Servirdor rodando em http://localhost:3000");
    });
}).catch(error => {
    // Se ser erro na conexão, será avisado aqui
    console.log("Erro ao conectar no Banco:", error);
});

