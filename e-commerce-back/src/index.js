const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port = 3000;

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://danielguilhermetb:VRR4WL32Z34vDnPu@ecommerce.vd1dy59.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecommerce')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Could not connect to MongoDB', err);
    process.exit(1); // Saia do processo se não puder conectar ao MongoDB
  });

// Definição do modelo 'Roupa'
const Roupa = mongoose.model('Roupa', {
    title: String,
    description: String,
    image_url: String,
    tamanho: String,
    category: String,
    valor: Number,
});

// Endpoint GET para ler todas as roupas
app.get('/', async (req, res) => {
    try {
        const roupas = await Roupa.find(); // Consulta todas as roupas no banco de dados
        return res.send(roupas);
    } catch (err) {
        console.error('Error fetching roupas:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint GET para deletar roupa por id
app.delete('/:id', async (req, res) => {
    const roupas = await Roupa.findByIdAndDelete(req.params.id)
    return res.send(roupas)
})

// Endpoint GET para atualizar roupa por id
app.put('/:id', async (req, res) => {
    const roupas = await Roupa.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        tamanho: req.body.category,
        category: req.body.category,
        valor: req.body.valor
    }, {
        new: true
    })

    return res.send(roupas)
})

// Endpoint POST para adicionar uma nova roupa
app.post('/', async (req, res) => {
    try {
        const roupas = new Roupa({
            title: req.body.title,
            description: req.body.description,
            image_url: req.body.image_url,
            tamanho: req.body.category,
            category: req.body.category,
            valor: req.body.valor,
        });
        
        await roupas.save();
        return res.send(roupas);
    } catch (err) {
        console.error('Error saving roupa:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log('App running!');
});