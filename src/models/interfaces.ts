export interface AuthorResume{
    id: number;
    nome: string;
    nacionalidade: string;
    criado_em: string;
    //funções/métodos obrigatórios?
}

export interface BookResume{
    id: number;
    autor_id: number;
    autor: string;
    titulo: string;
    ano: number;
    categoria: string;
    estoque: number;
    quantidade: number;
    criado_em: string;
    //funções/métodos obrigatórios?
}

export interface CustomerResume{
    id: number;
    nome: string;
    cpf: string;
    data_nasc: string;
    telefone: string;
    email: string;
    criado_em: string;
    //funções/métodos obrigatórios?
}

export interface BorrowResume{
    cliente_id: number;
    livro_id: number;
    cliente_nome: string;
    livro_titulo: string;
    data_devolucao: string;
    data_emprestimo: string;
    //funções/métodos obrigatórios?
}