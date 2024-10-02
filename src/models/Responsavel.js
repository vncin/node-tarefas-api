import mongoose from "mongoose";

const responsavelSchema = new mongoose.Schema({
        id: { type: mongoose.Schema.Types.ObjectId },
        nome: {
                type: String,
                required: [true, 'O nome é obrigatório.'],
                minlength: [3, 'O nome deve ter pelo menos 3 caracteres.']
        }
}, { versionKey: false });

const responsavel = mongoose.model("responsaveis", responsavelSchema);

export {responsavel, responsavelSchema };