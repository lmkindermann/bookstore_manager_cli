import { AuthorResume, BookResume, CustomerResume, BorrowResume } from "./interfaces";

export class Author implements AuthorResume{
    id: number;
    nome: string;
    nacionalidade: string;
    criado_em: string;

    constructor(id: number, nome: string, nacionalidade: string, criado_em: string){
        this.id = id;
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.criado_em = criado_em;
    }
    //funções/métodos da classe
}

export class Book implements BookResume{
    id: number;
    autor_id: number;
    titulo: string;
    ano: number;
    categoria: string;
    estoque: number;
    quantidade: number;
    criado_em: string;

    constructor(id: number, autor_id: number, titulo: string, ano: number, categoria: string, estoque: number, quantidade: number, criado_em: string){
        this.id = id;
        this.autor_id = autor_id;
        this.titulo = titulo;
        this.ano = ano;
        this.categoria = categoria;
        this.estoque = estoque;
        this.quantidade = quantidade;
        this.criado_em = criado_em;
    }
    //funções/métodos da classe
}

export class Customer implements CustomerResume{
    id: number;
    name: string;
    cpf: string;
    birthDate: string;
    phone: string;
    createdIn: string;

    constructor(id: number, name: string, cpf: string, birthDate: string, phone: string, createdIn: string){
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.phone = phone;
        this.createdIn = createdIn;
    }
    //funções/métodos da classe
}

export class Borrow implements BorrowResume{
    customerId: number;
    bookId: number;
    borrowDate: string;
    returnDate: string;

    constructor(customerId: number, bookId: number, borrowDate: string, returnDate: string){
        this.customerId = customerId;
        this.bookId = bookId;
        this.borrowDate = borrowDate;
        this.returnDate = returnDate;
    }
    //funções/métodos da classe
}