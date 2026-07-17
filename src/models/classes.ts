import { AuthorResume, BookResume, CustomerResume, BorrowResume } from "./interfaces";

export class Author implements AuthorResume{
    id: number;
    name: string;
    nationality: string;
    createdIn: string;

    constructor(id: number, name: string, nationality: string, createdIn: string){
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.createdIn = createdIn;
    }
    //funções/métodos da classe
}

export class Book implements BookResume{
    id: number;
    authorId: number;
    title: string;
    year: number;
    category: string;
    createdIn: string;

    constructor(id: number, authorId: number, title: string, year: number, category: string, createdIn: string){
        this.id = id;
        this.authorId = authorId;
        this.title = title;
        this.year = year;
        this.category = category;
        this.createdIn = createdIn;
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