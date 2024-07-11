const multer = require('multer');

// Configuração do destino e do nome do arquivo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Diretório onde os arquivos serão salvos
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Nome do arquivo
    }
});

// Filtro para aceitar apenas arquivos de imagem
const fileFilter = (req, file, cb) => {
    // Verifica se o mimetype começa com 'image/'
    if (file.mimetype.startsWith('image/')) {
        cb(null, true); // Aceita o arquivo
    } else {
        cb(new Error('Só são permitidas imagens!'), false); // Rejeita o arquivo
    }
};

// Configuração do middleware Multer
const upload = multer({ 
    storage: storage, 
    fileFilter: fileFilter 
});

module.exports = upload;
