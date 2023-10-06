# *API REST de Gerenciamento de Instrutores*
Esta é uma API REST que permite gerenciar instrutores. Ela oferece várias funcionalidades para listar, obter, cadastrar, atualizar, atualizar o status e excluir instrutores em um sistema.

# *Endpoints*
A API oferece os seguintes endpoints:

# *Listar Instrutores*
Endpoint: GET /instrutores

Descrição: Retorna uma lista de todos os instrutores cadastrados no sistema.

# *Obter Instrutor*
Endpoint: GET /instrutores/{id}

Descrição: Retorna os detalhes de um instrutor com base no seu ID.

# *Cadastrar Instrutor*
Endpoint: POST /instrutores

Descrição: Cadastra um novo instrutor no sistema. O corpo da solicitação deve conter os dados do instrutor a ser cadastrado.

# *Atualizar Instrutor*
Endpoint: PUT /instrutores/{id}

Descrição: Atualiza os detalhes de um instrutor existente com base no seu ID. O corpo da solicitação deve conter os novos dados do instrutor.

# *Atualizar Status do Instrutor*
Endpoint: PATCH /instrutores/{id}/status

Descrição: Atualiza o status (ativo/inativo) de um instrutor com base no seu ID. O corpo da solicitação deve conter o novo status.

# *Excluir Instrutor*
Endpoint: DELETE /instrutores/{id}

Descrição: Exclui um instrutor do sistema com base no seu ID.

# *Requisições e Respostas*
A API segue as práticas comuns de REST e utiliza os códigos de status HTTP padrão. As respostas são retornadas no formato JSON.

Exemplo de Resposta de Sucesso
json:
{
    "id": 1,
    "nome": "João Silva",
    "especialidade": "Yoga",
    "ativo": true
}

Exemplo de Resposta de Erro
json:
{
    "erro": "Instrutor não encontrado."
}

# *Como Usar*
Para usar esta API, siga os seguintes passos:
Utilize os endpoints mencionados acima para listar, obter, cadastrar, atualizar, atualizar o status e excluir instrutores.
<img src="https://imgur.com/a/9k6PaSB"> 

# *Conlusao*
Esta API REST oferece uma maneira simples e eficaz de gerenciar instrutores em um sistema. Use os endpoints e exemplos acima para começar a interagir com a API e realizar operações de gerenciamento de instrutores. 
Certifique-se de ler a documentação completa da API para obter informações detalhadas sobre cada endpoin
