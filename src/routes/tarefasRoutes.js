import express from "express";
import TarefasController from "../controllers/tarefasController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/tarefas", TarefasController.listarTarefas, paginar)
  //.get("/tarefas/busca",  TarefasController.listarTarefaPorFiltro, paginar)
  .get("/tarefas/:id",  TarefasController.listarTarefaPorId)
  .post("/tarefas",  TarefasController.cadastrarTarefa)
  .put("/tarefas/:id",  TarefasController.atualizarTarefa)
  .delete("/tarefas/:id",  TarefasController.excluirTarefa)

export default router;   