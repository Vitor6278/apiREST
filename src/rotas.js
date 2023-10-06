const express = require('express');
const instrutores = require('./controladores/instrutores');
//como estaremos criamos rotas nesse arquivo, dar o nome de rotas e n app
const rotas = express();

//sempre depois de uma resposta, interromper a execucao do codigo, pode ser pelo return
rotas.get('/instrutores', instrutores.listarInstrutores);

//manter a constancia de nomes das rotas!
rotas.get('/instrutores/:id', instrutores.obterInstrutor);

//cadastro de instrutor dentro da colecao
rotas.post('/instrutores', instrutores.cadastrarInstrutor);

//alteracao de instrutor dentro da colecao
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);

rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);

//exclusao de instrutor dentro da colecao
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);

module.exports = rotas;