const app = require("./app");
const sequelize = require("./config/database");

require("dotenv").config();

const PORT = 3606;

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexão com o banco de dados estabelecida com sucesso!");

        await sequelize.sync();
        console.log("Tabelas sincronizadas!");

        app.listen(PORT, () => {
            console.log(`Servidor iniciado na porta ${PORT}`);
        });

    } catch (error) {
        console.error("Erro ao iniciar servidor:", error);
    }
})();