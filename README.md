# 📚 Biblioteca API

> **Projeto Final - 3º Período | Faculdade Senac PE**

API RESTful desenvolvida como projeto de conclusão do 3º período para a disciplina de **Arquitetura e Desenvolvimento Back-end**, ministrada pelo Prof. [Danilo Soares](https://www.linkedin.com/in/dansoaresfarias/).

O sistema implementa o gerenciamento de livros de uma biblioteca aplicando operações CRUD (Create, Read, Update, Delete) e arquitetura em camadas.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [TypeORM](https://typeorm.io/)
* [MySQL](https://www.mysql.com/)

## ⚙️ Funcionalidades

- **Criar Livro**: Adiciona um novo livro ao banco de dados.
- **Listar Livros**: Retorna todos os livros cadastrados.
- **Atualizar Livro**: Permite alterar dados de um livro existente.
- **Excluir Livro**: Remove um livro do sistema.

## 📝 Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| **POST** | `/api/livros` | Cadastra um novo livro |
| **GET** | `/api/livros` | Lista todos os livros |
| **PUT** | `/api/livros/:id` | Atualiza os dados de um livro |
| **DELETE** | `/api/livros/:id` | Remove um livro |

## 📦 Como rodar o projeto

### Pré-requisitos
- Node.js instalado
- MySQL rodando
- Um cliente de API (Postman, Insomnia ou Thunder Client)

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone [https://github.com/Vanessa-Matias/biblioteca-api.git](https://github.com/Vanessa-Matias/biblioteca-api.git)
    ```
2. **Instale as dependências**
    ```bash
    npm install
    ```
3. **Configure o Banco de Dados**
    ```bash
    Certifique-se de ter o MySQL rodando.
    Configure as credenciais no arquivo: src/data-source.ts.
    ```
4. **Inicie o servidor**
    ```bash
    npm start
     ```
<div align="center">
  👩‍💻 Um projeto desenvolvido por <em><a href="https://www.linkedin.com/in/vanessamatiasdev/">Vanessa Matias</a> em 03/12/2025</em>
</div>