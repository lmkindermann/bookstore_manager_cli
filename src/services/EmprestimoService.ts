import { rl } from '../utils/readlineConfig';
import { verificarEmprestimo, inserirEmprestimo, listaEmprestimos, buscaEmprestimo, renovarEmprestimo, removerEmprestimo } from '../repositories/EmprestimoRepository';
import { buscaCliente } from '../repositories/ClienteRepository';
import { buscaLivro } from '../repositories/LivroRepository';
import { tabelaEmprestimos } from '../models/tabelas';

export async function novoEmprestimo(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do cliente: ');
        let result: any = await buscaCliente(nome);
        if (result.rowCount === 0) {
            console.log("Cliente não encontrado.");
            return;
        }
        const clienteId: number = result.rows[0].id;
        const titulo: string = await rl.question('Digite o título do livro: ');
        result = await buscaLivro(titulo);
        if (result.rowCount === 0) {
            console.log("Livro não encontrado.");
            return;
        } 
        const livroId: number = result.rows[0].id;
        result = await verificarEmprestimo(clienteId, livroId);
        if (result.rowCount > 0) {
            console.log(`Empréstimo já cadastrado no banco de dados.`);
            return;
        }
        const data_devolucao: string = await rl.question('Digite o número de diárias de empréstimo: ');
        result = await inserirEmprestimo(nome, titulo, data_devolucao);
        console.log(`Empréstimo cadastrado com sucesso!`);                
    } catch (error) {
        console.error('Erro ao cadastrar empréstimo: ', error);            
    }
}

export async function mostrarEmprestimos(): Promise<void> {
    try {
        let result: any = await listaEmprestimos();
        if (result.rowCount === 0) {
            console.log("A lista de empréstimos está vazia.");
        } else {
            tabelaEmprestimos(result);
        }        
    } catch (error) {
        console.error('Erro ao listar empréstimos: ', error);
    } 
}

export async function consultaEmprestimo(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do cliente: ');
        let result: any = await buscaCliente(nome);
        if (result.rowCount === 0) {
            console.log("Cliente não encontrado.");
            return;
        }
        const clienteId: number = result.rows[0].id;
        const titulo: string = await rl.question('Digite o título do livro: ');
        result = await buscaLivro(titulo);
        if (result.rowCount === 0) {
            console.log("Livro não encontrado.");
            return;
        }
        const livroId: number = result.rows[0].id;
        result = await verificarEmprestimo(clienteId, livroId);
        if (result.rowCount === 0) {
            console.log(`Empréstimo não encontrado.`);
            return;
        }
        result = await buscaEmprestimo(nome, titulo);        
        tabelaEmprestimos(result);        
    } catch (error) {
        console.error('Erro ao consultar empréstimo: ', error);
    }    
}

export async function editarEmprestimo(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do cliente: ');
        let result: any = await buscaCliente(nome);
        if (result.rowCount === 0) {
            console.log("Cliente não encontrado.");
            return;
        }
        const clienteId: number = result.rows[0].id;
        const titulo: string = await rl.question('Digite o título do livro: ');
        result = await buscaLivro(titulo);
        if (result.rowCount === 0) {
            console.log("Livro não encontrado.");
            return;
        } 
        const livroId: number = result.rows[0].id;
        result = await verificarEmprestimo(clienteId, livroId);
        if (result.rowCount === 0) {
            console.log(`Empréstimo não encontrado.`);
            return;
        }
        const data_devolucao: string = await rl.question('Digite o número de diárias de empréstimo: ');
        result = await renovarEmprestimo(clienteId, livroId, data_devolucao);
        console.log(`Empréstimo cadastrado com sucesso!`);
    } catch (error) {
        console.error('Erro ao renovar empréstimo: ', error);  
    }
}

export async function apagarEmprestimo(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do cliente: ');
        let result: any = await buscaCliente(nome);
        if (result.rowCount === 0) {
            console.log("Cliente não encontrado.");
            return;
        }
        const clienteId: number = result.rows[0].id;
        const titulo: string = await rl.question('Digite o título do livro: ');
        result = await buscaLivro(titulo);
        if (result.rowCount === 0) {
            console.log("Livro não encontrado.");
            return;
        } 
        const livroId: number = result.rows[0].id;
        result = await verificarEmprestimo(clienteId, livroId);
        if (result.rowCount === 0) {
            console.log(`Empréstimo não encontrado.`);
            return;
        }
        result = await removerEmprestimo(clienteId, livroId);
        console.log("Devolução realizada com sucesso!");                         
    } catch (error) {
        console.error('Erro ao realizar devolução: ', error);            
    }   
}