const Funcionario = require("../models/funcionario");

exports.cadastrar = async (req, res) => {

    try{
        const funcionario = await Funcionario.create(req.body);
        res.status(201).json(funcionario);
    }catch(error){
        console.error("ERRO:", error);
        res.status(500).json({
            message: error.message,
            name: error.name
        });
    }
}

exports.listar = async (req,res) => {
    const funcionarios = await Funcionario.findAll();
    res.status(200).json(funcionarios);
}

exports.buscarPorId = async (req, res) => {
    const funcionario = await Funcionario.findByPk(req.params.id);

    if (!funcionario) {
        return res.status(404).json({ erro: "Funcionário não encontrado" });
    }

    res.status(200).json(funcionario);
}

exports.atualizar = async (req, res) => {
    const funcionario = await Funcionario.findByPk(req.params.id);

    if (!funcionario) {
        return res.status(404).json({ erro: "Funcionário não encontrado" });
    }

    await funcionario.update(req.body);
    res.status(200).json(funcionario);
}

exports.deletar = async (req, res) => {
    const funcionario = await Funcionario.findByPk(req.params.id);

    if (!funcionario) {
        return res.status(404).json({ erro: "Funcionário não encontrado" });
    }
    res.status(204).json({ message: "Funcionário deletado com sucesso" });   
}
