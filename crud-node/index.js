const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const server = express();

server.use(express.json());

const tratores = ['Trator Azul', 'Trator Preto', 'Trator Vermelho'];

//retorna um trator
server.get('/tratores/:index', (req,res) => {
    const { index } = req.params;

    return res.json(tratores[index]);
})

//retornar todos os tratores
server.get('/tratores', (req,res) => {
    return res.json(tratores);
})

//criar um novo trator
server.post('/tratores', (req,res) => {
    const {name} = req.body;
    tratores.push(name);

    return res.json(tratores);
})

//atualizar um trator
server.put('/tratores/:index', (req,res) => {
    const {index} = req.params;
    const {name} = req.body;

    tratores[index] = name;

    return res.json(tratores);
})

//deletar um trator
server.delete('/tratores/:index', (req,res) =>{
    const {index} = req.params;
    tratores.splice(index,1);

    return res.json({message: 'O curso foi deletado'});
})


server.listen(3000);