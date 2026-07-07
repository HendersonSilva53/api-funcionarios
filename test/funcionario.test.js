const request = require("supertest");

const app = require("../src/app");

//Escrita de um teste unitário

describe("API de Funcionarios", ()=>{
    it("Deve cadastrar um novo funcionario", async ()=>{
        const resposta = await request(app)
        .post("/funcionario")
        .send({
            nome: "Maria",
            cargo: "Analista"
        })

        expect(resposta.statusCode).toBe(201);

        expect(resposta.body.nome).toBe("Maria");

        expect(resposta.body.cargo).toBe("Analista");
    })
})

describe("API de Funcionarios", ()=>{
    it("Deve cadastrar um novo funcionario", async ()=>{
        const resposta = await request(app)
        .post("/funcionario")
        .send({
            nome: "Henderson",
            cargo: "Desenvolvedor"
        })

        expect(resposta.statusCode).toBe(201);

        expect(resposta.body.nome).toBe("Henderson");

        expect(resposta.body.cargo).toBe("Desenvolvedor");
    })
})

describe("API de Funcionarios", ()=>{
    it("Deve cadastrar um novo funcionario", async ()=>{
        const resposta = await request(app)
        .post("/funcionario")
        .send({
            nome: "Henderson Silva",
            cargo: "Desenvolvedor"
        })

        expect(resposta.statusCode).toBe(201);

        expect(resposta.body.nome).toBe("Henderson Silva");

        expect(resposta.body.cargo).toBe("Desenvolvedor");
    })
})