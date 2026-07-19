export interface AuthorResume{
    id: number;
    nome: string;
    nacionalidade: string;
    criado_em: string;
    //funções/métodos obrigatórios?
}

export interface BookResume{
    id: number;
    authorId: number;
    title: string;
    year: number;
    category: string;
    createdIn: string;
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