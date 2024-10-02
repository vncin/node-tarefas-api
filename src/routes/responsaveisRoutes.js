import express from "express";
import ResponsaveisController from "../controllers/responsaveisController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/responsaveis", ResponsaveisController.listarResponsaveis, paginar)
  .get("/responsaveis/:id", ResponsaveisController.listarResponsavelPorId)
  .post("/responsaveis", ResponsaveisController.cadastrarResponsavel)
  .put("/responsaveis/:id", ResponsaveisController.atualizarResponsavel)
  .delete("/responsaveis/:id", ResponsaveisController.excluirResponsavel)

export default router;   