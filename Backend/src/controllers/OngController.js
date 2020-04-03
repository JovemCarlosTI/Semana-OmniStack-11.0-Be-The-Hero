const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');
// Importa connecrtion de connection.js

module.exports = {
    async index (request, response) {
        // Rota de get com função assíncrona
        const ongs = await connection('ongs').select('*');
        // Ongs recebe todos os elementos de ongs

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, cidade, uf } = request.body;
        // Recebe valores para as variáveis

        const id = generateUniqueId();
        /*Gera uma id criptografada de 4 bytes aleatórios e
        transforma em string de formato hexadecimal*/

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            cidade,
            uf,
        // Insere os dados em 'ongs', pode demorar
        })

        return response.json({
            id
            // Retorna o id da ong
        });
    }
};
