const mongoose = require('mongoose');

const { Schema } = mongoose;

const roupasSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    tamanho: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Roupas = mongoose.model('Roupas', roupasSchema);

module.exports = {
    Roupas,
    roupasSchema,
};