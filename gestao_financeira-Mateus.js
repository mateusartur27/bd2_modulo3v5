// 1-

// empresa
use('gestao_financeira');
db.empresa.insertOne({
    _id: 1,
    nome: 'Tiger Tech',
    cnpj: '11.222.333/0001-44',
    endereco: {
        rua: 'A',
        numero: 100,
        bairro: 'Industrial',
        cidade: 'Nova Serrana'
    },
    telefone: '37 3226-1000'
}
);

// usuarios
use('gestao_financeira');
db.usuarios.insertMany([{
    _id: 1,
    nome: 'Mateus Artur',
    email: 'mateus@gmail.com',
    senha: '1111',
    ativo: true
}, {
    _id: 2,
    nome: 'Rafael Araújo',
    email: 'rafael@gmail.com',
    senha: '2222',
    ativo: false
}, {
    _id: 3,
    nome: 'João Pedro',
    email: 'joao@gmail.com',
    senha: '3333',
    ativo: true
}
]);

// clientes
use('gestao_financeira');
db.clientes.insertMany([{
    _id: 1,
    nome: 'Bruno',
    cpf: '111.111.111-11',
    endereco: {
        rua: 'B',
        numero: 110,
        bairro: 'Residencial',
        cidade: 'Nova Serrana'
    },
    telefone: '37 99111-1111',
    email: 'bruno@gmail.com',
    data_cadastro: '2024-09-20'
}, {
    _id: 2,
    nome: 'Otávio',
    cpf: '222.222.222-22',
    endereco: {
        rua: 'C',
        numero: 120,
        bairro: 'Residencial',
        cidade: 'Nova Serrana'
    },
    telefone: '37 99122-2222',
    email: 'otavio@gmail.com',
    data_cadastro: '2025-01-10'
}, {
    _id: 3,
    nome: 'Marcos',
    cpf: '333.333.333-33',
    endereco: {
        rua: 'D',
        numero: 130,
        bairro: 'Residencial',
        cidade: 'Bom Despacho'
    },
    telefone: '37 99133-3333',
    email: 'marcos@gmail.com',
    data_cadastro: '2025-02-05'
}, {
    _id: 4,
    nome: 'Philipe',
    cpf: '444.444.444-44',
    endereco: {
        rua: 'E',
        numero: 140,
        bairro: 'Centro',
        cidade: 'Bom Despacho'
    },
    telefone: '37 99144-4444',
    email: 'phillipe@gmail.com',
    data_cadastro: '2025-03-15'
}, {
    _id: 5,
    nome: 'Pedro',
    cpf: '555.555.555-55',
    endereco: {
        rua: 'F',
        numero: 150,
        bairro: 'Centro',
        cidade: 'Divinópolis'
    },
    telefone: '37 99155-5555',
    email: 'pedro@gmail.com',
    data_cadastro: '2025-05-23'
},
]);

// fornecedores
use('gestao_financeira');
db.fornecedores.insertMany([{
    _id: 1,
    nome: 'Fornecedor1',
    cnpj: '11.111.111/0001-11',
    telefone: '37 3225-1111',
    data_cadastro: '2025-01-23' 
}, {
    _id: 2,
    nome: 'Fornecedor2',
    cnpj: '22.222.222/0001-22',
    telefone: '37 3225-2222',
    data_cadastro: '2025-02-10' 
}, {
    _id: 3,
    nome: 'Fornecedor3',
    cnpj: '33.333.333/0001-33',
    telefone: '37 3225-3333',
    data_cadastro: '2025-03-12' 
}, {
    _id: 4,
    nome: 'Fornecedor4',
    cnpj: '44.444.444/0001-44',
    telefone: '37 4225-4444',
    data_cadastro: '2025-04-15' 
}, {
    _id: 5,
    nome: 'Fornecedor5',
    cnpj: '55.555.555/0001-55',
    telefone: '37 5225-5555',
    data_cadastro: '2025-05-17' 
}
]);

// contas_receber
use('gestao_financeira');
db.contas_receber.insertMany([{
    _id: 1,
    cliente_id: 1,
    data_lancamento: '2025-01-02',
    data_vencimento: '2025-02-02',
    valor: 100.00,
    status: 'aberto'
}, {
    _id: 2,
    cliente_id: 2,
    data_lancamento: '2025-02-08',
    data_vencimento: '2025-03-08',
    valor: 200.00,
    status: 'aberto'
}, {
    _id: 3,
    cliente_id: 3,
    data_lancamento: '2025-06-02',
    data_vencimento: '2025-07-02',
    valor: 300.00,
    status: 'aberto'
}, {
    _id: 4,
    cliente_id: 4,
    data_lancamento: '2025-06-05',
    data_vencimento: '2025-07-05',
    valor: 400.00,
    status: 'aberto'
}, {
    _id: 5,
    cliente_id: 5,
    data_lancamento: '2025-06-07',
    data_vencimento: '2025-07-07',
    valor: 500.00,
    status: 'aberto'
}
]);

// contas_pagar
use('gestao_financeira');
db.contas_pagar.insertMany([{
    _id: 1,
    fornecedor_id: 1,
    data_lancamento: '2025-01-10',
    data_vencimento: '2025-02-10',
    valor: 100.00,
    status: 'aberto'
  }, {
    _id: 2,
    fornecedor_id: 2,
    data_lancamento: '2025-02-15',
    data_vencimento: '2025-03-15',
    valor: 200.00,
    status: 'aberto'
  }, {
    _id: 3,
    fornecedor_id: 3,
    data_lancamento: '2025-03-20',
    data_vencimento: '2025-04-20',
    valor: 300.00,
    status: 'aberto'
  }, {
    _id: 4,
    fornecedor_id: 4,
    data_lancamento: '2025-04-25',
    data_vencimento: '2025-05-25',
    valor: 400.00,
    status: 'aberto'
  }, {
    _id: 5,
    fornecedor_id: 5,
    data_lancamento: '2025-05-30',
    data_vencimento: '2025-06-30',
    valor: 500.00,
    status: 'aberto'
  }, {
    _id: 6,
    fornecedor_id: 1,
    data_lancamento: '2025-06-20',
    data_vencimento: '2025-07-20',
    valor: 600.00,
    status: 'aberto'
  },
  {
    _id: 7,
    fornecedor_id: 2,
    data_lancamento: '2025-06-25',
    data_vencimento: '2025-07-25',
    valor: 700.00,
    status: 'aberto'
  }
]);

// 2-

use('gestao_financeira');
db.usuarios.find({
    ativo: true }, {
    _id: 0, email: 1
}
);

// 3-

use('gestao_financeira');
db.clientes.find().sort({
    nome: 1
}
);

// 4-

use('gestao_financeira');
db.fornecedores.find().sort({
    data_cadastro: -1
}
);

// 5-

use('gestao_financeira');
db.contas_receber.find();

use('gestao_financeira');
db.contas_receber.updateOne({
    _id: 1
}, {
    $set: {
        status: 'pago',
        pagamento: {
            data_pagamento: '2025-01-20',
            forma: 'cartão',
            valor: 100.00
        }
    }
}
);

use('gestao_financeira');
db.contas_receber.updateOne({
    _id: 2
}, {
    $set: {
        status: 'pago',
        pagamento: {
            data_pagamento: '2025-03-05',
            forma: 'pix',
            valor: 200.00
        }
    }
}
);

// 6-

use('gestao_financeira');
db.contas_receber.aggregate([
{
  $match: {
    status: 'aberto'
  }
}, {
  $lookup: {
    from: 'clientes',
    localField: 'cliente_id',
    foreignField: '_id',
    as: 'cliente'
  }
}, {
  $project: {
    _id: 0,
    nome_cliente: '$cliente.nome',
    data_vencimento: 1,
    valor: 1
  }
}
]);

// 7-

use('gestao_financeira');
db.contas_pagar.find();

use('gestao_financeira');
db.contas_pagar.updateOne({
    _id: 1
}, {
    $set: {
        status: 'pago',
        pagamento: {
            data_pagamento: '2025-01-10',
            forma: 'pix',
            valor: 100.00
        }
    }
});

use('gestao_financeira');
db.contas_pagar.updateOne({
    _id: 2
}, {
    $set: {
        status: 'pago',
        pagamento: {
            data_pagamento: '2025-03-08',
            forma: 'boleto',
            valor: 200.00
        }
    }
}
);

use('gestao_financeira');
db.contas_pagar.updateOne({
    _id: 3
}, {
    $set: {
        status: 'pago',
        pagamento: {
            data_pagamento: '2025-04-18',
            forma: 'dinheiro',
            valor: 300.00
        }
    }
}
);

// 8-

use('gestao_financeira');
db.contas_pagar.aggregate([
{
  $match: {
    status: 'pago'
  }
}, {
  $lookup: {
    from: 'fornecedores',
    localField: 'fornecedor_id',
    foreignField: '_id',
    as: 'fornecedor'
  }
}, {
  $project: {
    _id: 0,
    nome_fornecedor: '$fornecedor.nome',
    data_vencimento: 1,
    valor: 1
  }
}
]);

// 9-

use('gestao_financeira');
db.contas_pagar.aggregate([
{
  $match: {
    status: 'aberto'
  }
}, {
  $group: {
    _id: '$data_vencimento',
    total_a_pagar: { $sum: '$valor' }
  }
}
]);

// 10-

use('gestao_financeira');
db.clientes.aggregate([
{
  $group: {
    _id: '$endereco.cidade',
    quantidade: { $sum: 1 }
  }
}
]);
