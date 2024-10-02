import express from "express";
import tarefas from "./tarefasRoutes.js"
import responsaveis from "./responsaveisRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Challenge Alura"})
  })

  app.use(
    express.json(),
    tarefas,
    responsaveis
  )
}

export default routes