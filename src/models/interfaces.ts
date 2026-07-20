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
    name: string;
    cpf: string;
    birthDate: string;
    phone: string;
    createdIn: string;
    //funções/métodos obrigatórios?
}

export interface BorrowResume{
    customerId: number;
    bookId: number;
    borrowDate: string;
    returnDate: string;
    //funções/métodos obrigatórios?
}