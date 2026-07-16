export interface AuthorResume{
    id: number;
    name: string;
    nationality: string;
    created_in: string;
}

export interface BookResume{
    id: number;
    author_id: number;
    title: string;
    year: number;
    category: string;
    created_in: string;
}

export interface CustomerResume{
    id: number;
    name: string;
    cpf: string;
    birth_date: string;
    phone: string;
    created_in: string;
}

export interface BorrowResume{
    customer_id: number;
    book_id: number;
    borrow_date: string;
    return_date: string;
}