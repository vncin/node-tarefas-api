import { responsavel } from "../models/index.js";

class ResponsaveisController{
    static listarResponsaveis = async (req, res, next) => {
        try {
          const buscaResponsaveis = responsavel.find();
    
          req.resultado = buscaResponsaveis;
    
          next();
    
        } catch (erro) {
          next(erro);
        }
      }
      static listarResponsavelPorId = async (req, res, next) => {
        try {
            const id = req.params.id;
    
            const responsaveisResultados = await responsavel.findById(id)
            .exec();
    
            res.status(200).send(responsaveisResultados);
            }catch (erro) {
                next(erro);
            }
        }

      static cadastrarResponsavel = async (req, res, next) => {
        const responsaveis = new responsavel(req.body);
        try {
            
          const responsavelResultado = await responsaveis.save();
    
          res.status(201).send(responsavelResultado.toJSON());
        } catch (erro) {
          next(erro);
        }
      }
      static atualizarResponsavel = async (req, res, next) => {
        try {
          const id = req.params.id;
    
          await responsavel.findByIdAndUpdate(id, {$set: req.body});
    
          res.status(200).send({message: "Responsável atualizado com sucesso!"});
        } catch (erro) {
          next(erro);
        }
      }
      static excluirResponsavel = async (req, res, next) => {
        try {
          const id = req.params.id;
    
          await responsavel.findByIdAndDelete(id);
    
          res.status(200).send({message: "Responsável removido com sucesso!"});
        } catch (erro) {
          next(erro);
        }
      }
}

export default ResponsaveisController;