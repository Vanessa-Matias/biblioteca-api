// Importa o módulo de rotas do Express e o Controller que contém a lógica dos Livros
import {Router} from "express";
import { LivroController } from "../controller/LivroController";

// Criando o "mapa". Aqui inicio um novo roteador vazio
const router = Router();

// Rota para CRIAR: quando chegar um POST, chama o creat
router.post("/", LivroController.create);

// Rota para LISTAR: quando chegar um pedido de busca, chama o lis
router.get("/", LivroController.list);

// Rota para ATUALIZAR: indica que vai passar um número na URL
router.put("/:id", LivroController.update);

// Rota para EXCLUIR
router.delete("/:id", LivroController.remove);

export default router;