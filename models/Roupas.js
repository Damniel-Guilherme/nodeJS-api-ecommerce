const mongoose = require('mongoose');

const RoupasSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image_path: { type: String, required: true }, // Novo campo para o caminho da imagem
    tamanho: { type: String, required: true },
    category: { type: String, required: true },
    novo: { type: String, required: true }, // Alterado para "novo"
    launch: { type: String, required: true },
    kit: { type: String, required: true },
    sexo: { type: String, required: true },
    valor: { type: String, required: true }, // Corrigido para tipo Number
    createdAt: { type: Date, default: Date.now }, // Campo para registrar a data de criação
    updatedAt: { type: Date, default: Date.now } // Campo para registrar a data de última edição
});

// Middleware para atualizar a data de updatedAt sempre que houver uma atualização no documento
RoupasSchema.pre('findOneAndUpdate', function(next) {
    this.set({ updatedAt: new Date() });
    next();
});

const Roupas = mongoose.model('Roupas', RoupasSchema);

module.exports = { Roupas };
