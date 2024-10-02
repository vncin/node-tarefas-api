import { tarefa } from "../models/index.js";


class TarefasController{
    static listarTarefas = async (req, res, next) => {
        try {
          const buscaTarefas = tarefa.find();
    
          req.resultado = buscaTarefas;
    
          next();
    
        } catch (erro) {
          next(erro);
        }
      }

    static listarTarefaPorId = async (req, res, next) => {
    try {
        const id = req.params.id;

        const tarefasResultados = await tarefa.findById(id).exec();

        res.status(200).send(tarefasResultados);
        }catch (erro) {
            next(erro);
        }
    }

    static cadastrarTarefa = async (req, res, next) => {
        const tarefas = new tarefa(req.body);
        
        try {
    
          const tarefaResultado = await tarefas.save();
    
          res.status(201).send(tarefaResultado.toJSON());
        } catch (erro) {
          next(erro);
        }
      }
    
      static atualizarTarefa = async (req, res, next) => {
        try {
          const id = req.params.id;
    
          await tarefa.findByIdAndUpdate(id, {$set: req.body});
    
          res.status(200).send({message: "Tarefa atualizado com sucesso!"});
        } catch (erro) {
          next(erro);
        }
      }
      static excluirTarefa = async (req, res, next) => {
        try {
          const id = req.params.id;
    
          await tarefa.findByIdAndDelete(id);
    
          res.status(200).send({message: "Tarefa removida com sucesso!"});
        } catch (erro) {
          next(erro);
        }
      }

}

export default TarefasController;