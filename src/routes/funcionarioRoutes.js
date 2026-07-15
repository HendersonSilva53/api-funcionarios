const express = require("express");

const router = express.Router();

const controller = require("../controllers/funcionarioController");

router.get("/funcionarios", controller.listar);
router.get("/funcionarios/:id", controller.buscarPorId);
router.post("/funcionarios", controller.cadastrar);
router.put("/funcionarios/:id", controller.atualizar);
router.delete("/funcionario/:id", controller.deletar);

module.exports = router;