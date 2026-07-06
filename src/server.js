const app = require("./app");
require("dotenv").config();

const PORT = 3606;

app.listen(PORT, ()=> {
    console.log(`Servidor iniciado na porta ${PORT}`);
})