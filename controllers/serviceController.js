const { Roupas: RoupasModel } = require('../models/Roupas');
const upload = require('../config/multer'); // Caminho correto para o middleware multer
const path = require('path');

const serviceController = {
    create: async (req, res) => {
        try {
            const { title, description, tamanho, category, novo, launch, kit, sexo, valor } = req.body;
            const image_path = req.file ? req.file.path : ''; // Caminho da imagem, se enviada

            // Verifica a presença dos campos obrigatórios
            if (!title || !description || !tamanho || !category || !novo || !launch || !kit || !sexo || !valor) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
            }

            const service = {
                title,
                description,
                image_path,
                tamanho,
                category,
                novo,
                launch,
                kit,
                sexo,
                valor
            };

            const response = await RoupasModel.create(service);

            res.status(201).json({ response, msg: 'Serviço criado com sucesso!' });
        } catch (error) {
            res.status(500).json({ msg: 'Erro ao criar serviço', error: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const services = await RoupasModel.find();

            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ msg: 'Erro ao obter serviços', error: error.message });
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await RoupasModel.findById(id);

            if (!service) {
                res.status(404).json({ msg: 'Serviço não encontrado' });
                return;
            }

            res.json(service);
        } catch (error) {
            res.status(500).json({ msg: 'Erro ao obter serviço', error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const service = await RoupasModel.findById(id);

            if (!service) {
                res.status(404).json({ msg: 'Serviço não encontrado' });
                return;
            }

            const deletedService = await RoupasModel.findByIdAndDelete(id);

            res.status(200).json({ deletedService, msg: 'Serviço excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ msg: 'Erro ao excluir serviço', error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;

            const { title, description, tamanho, category, novo, launch, kit, sexo, valor } = req.body;
            const image_path = req.file ? req.file.path : ''; // Caminho da imagem, se enviada

            // Verifica a presença dos campos obrigatórios
            if (!title || !description || !tamanho || !category || !novo || !launch || !kit || !sexo || !valor) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
            }

            const service = {
                title,
                description,
                image_path,
                tamanho,
                category,
                novo,
                launch,
                kit,
                sexo,
                valor
            };

            const updatedService = await RoupasModel.findByIdAndUpdate(id, service, { new: true });

            if (!updatedService) {
                res.status(404).json({ msg: 'Serviço não encontrado' });
                return;
            }

            res.status(200).json({ updatedService, msg: 'Serviço atualizado com sucesso.' });
        } catch (error) {
            res.status(500).json({ msg: 'Erro ao atualizar serviço', error: error.message });
        }
    },
};

module.exports = serviceController;