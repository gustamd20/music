import { Router } from "express";
const endpoints = Router();



endpoints.get('/boasVindas/:nome', (req, resp) => {
    let nome = req.params.nome;

    resp.send({
        mensagem: 'Seja bem-vinda(o) ' + nome
    })

})





export default endpoints;