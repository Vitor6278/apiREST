let { instrutores, identificadorInstrutor } = require('../bancodedados');

const listarInstrutores = (req, res) => {
    return res.status(200).json(instrutores);
}

const obterInstrutor = (req, res) => {
    const { id } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id); //formatar em numero pois o id na lista eh numero
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor nao encontrado.'}) //formato json, passar em formato de objeto
    }

    return res.status(200).json(instrutor)

}

const excluirInstrutor = (req, res) => {
    //bom utilizar desestruturizacao
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'Nome obrigatorio.'});
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'Email obrigatorio.'});
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome: nome,
        email: email,
        status: status ?? true // a chave status do objeto assumirá o valor true caso status seja null ou undefined, garantindo um valor padrão para a propriedade.
    }

    instrutores.push(instrutor);

    return res.status(201).json(instrutor);
}

const atualizarInstrutor = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    }

    if (!nome) {
        return res.status(400).json({ mensagem: 'Nome obrigatório.' });
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'Email obrigatório.' });
    }

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(204).send();
}


const atualizarStatusInstrutor = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    }

    instrutor.status = status;

    return res.status(204).send();

}


const excluirInstrutor = (req, res) => {
    const { id } = req.params;
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    }

    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id);
    });

    return res.status(204).send();

}



module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    atualizarInstrutor,
    atualizarStatusInstrutor,
    excluirInstrutor
}
