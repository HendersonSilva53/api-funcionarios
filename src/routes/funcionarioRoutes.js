const express = require("express");

const router = express.Router();

const controller = require("../controllers/funcionarioController");

router.get("/funcionarios", controller.listar);
router.get("/funcionarios/:id", controller.buscarPorId);
router.post("/funcionario", controller.cadastrar);
router.put("/funcionario/:id", controller.atualizar);
router.delete("/funcionario/:id", controller.deletar);

module.exports = router;