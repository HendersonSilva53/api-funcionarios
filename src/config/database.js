const {Sequelize} = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false
    }
)

try{
    sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");              
} catch (error) {
    console.error(error);
}

module.exports = sequelize;