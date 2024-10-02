import mongoose from "mongoose";
import { responsavelSchema } from "./Responsavel.js";

const tarefaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { 
        type: String, 
        required: [true, 'O título é obrigatório.'],
        minlength: [5, 'O título deve ter pelo menos 5 caracteres.'],
        maxlength: [100, 'O título pode ter no máximo 100 caracteres.'] 
    },
    prioridade: { 
        type: String, 
        required: [true, 'A prioridade é obrigatória.'],
        enum: {
            values: ['Baixa', 'Média', 'Alta'],
            message: 'A prioridade {VALUE} não é um valor aceito.'
        }
    },
    data: { 
        type: Date,
        required: [true, 'A data é obrigatória.'],
        validate: {
            validator: function(value) {
                //Gepeto friend
                // Normaliza a data de hoje (sem horas, minutos, segundos)
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                // Normaliza a data inserida (sem horas, minutos, segundos)
                const inputDate = new Date(value);
                inputDate.setHours(0, 0, 0, 0);

                // Comparação apenas das datas
                return inputDate >= today;
            },
            message: 'A data deve ser igual ou posterior à data atual.'
        }
     },
    descricao: { type: String },
    responsaveis: [ responsavelSchema ]
  }, { versionKey: false });
  
const tarefa = mongoose.model("tarefas", tarefaSchema);

export { tarefa, tarefaSchema };