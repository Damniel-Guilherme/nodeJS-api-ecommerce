const mongoose = require('mongoose');

async function main() {
    try {
mongoose.set('strictQuery', true);

        await mongoose.connect(
            'mongodb+srv://danielguilhermetb:VRR4WL32Z34vDnPu@ecommerce.vd1dy59.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecommerce'
        );
    console.log('Conectado ao banco!')
    } catch (error) {
        console.log(`erro: ${error}`)
    }
}


module.exports = main;