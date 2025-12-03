// Importa os tipos de Request e Response do Express parao TypeScript, a conexão com o banco de dados e a entidade (molde) do Livro
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import {Livro} from "../entity/Livro";

export class LivroController {
    // Método estático para criar um livro
    static async create(req: Request, res: Response) {

        // 1. O repositório da entidade Livro
        const livroRepository = AppDataSource.getRepository(Livro);

        // 2. Os dados que o úsuario enviou ( Vem dentro de req.body)
        const dadosDoLivro = req.body;

        // 3. Crio o objeto livro e salvo no banco
        const livroSalvo = await livroRepository.save(dadosDoLivro);

        // 4. Retorna o livro salvo como resposta
        return res.status(201).json(livroSalvo);
    }

    // Define a função list. Ela aceita o pedido (req)
    static async list(req: Request, res: Response) {
        const livroRepository = AppDataSource.getRepository(Livro)

        // 1. Buscando todos os livros usando o método .find()
        const listaDeLivros = await livroRepository.find();

        // 2. Retorna a lista com os livros. Use status 200, que é "OK"
        return res.status(200).json(listaDeLivros);
    }

    // Método para ATUALIZAR um livro existente
    static async update(req: Request, res: Response) {
        const {id} = req.params; // -> Pega o ID que virá na URL
        const novosDados = req.body; // -> Pega os dados que quero mudar
        const livroRepository = AppDataSource.getRepository(Livro);

        // Vai atualizar o livro baseado na ID
        await livroRepository.update(id, novosDados);

        return res.status(200).json({message: "Livro atualizado com sucesso!"});
    }

    // Método para EXCLUIR um livro
    static async remove(req: Request, res: Response) {
        const {id} = req.params;
        const livroRepository = AppDataSource.getRepository(Livro)

        // Manda o banco apagar o registro com esse ID
        await livroRepository.delete(id);

        return res.status(200).json({message: "Livro excluído com sucesso!"})
    }
}

