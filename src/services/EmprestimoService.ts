import { rl } from '../utils/readlineConfig';
import { verificarEmprestimo, inserirEmprestimo, listaEmprestimos, buscaEmprestimo, renovarEmprestimo, removerEmprestimo, atualizarQuantidade } from '../repositories/EmprestimoRepository';
import { buscaCliente } from '../repositories/ClienteRepository';
import { buscaLivro } from '../repositories/LivroRepository';
import { tabelaEmprestimos } from '../models/tabelas';

export async function novoEmprestimo(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do cliente: ');
        if (!nome){
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        }
        let result: any = await buscaCliente(nome);
        if (result.rowCount === 0) {
            console.log("Cliente não encontrado.");
            return;
        }
        const clienteId: number = result.rows[0].id;
        const titulo: string = await rl.question('Digite o título do livro: ');
        if (!titulo) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        }
        result = await buscaLivro(titulo);
        if (result.rowCount === 0) {
            console.log("Livro não encontrado.");
            return;
        } else if (result.rows[0].quantidade < 1){
            console.log("Livro indisponível, fora de estoque.")
            return;
        }
        const livroQtd: number = result.rows[0].quantidade - 1;
        const livroId: number = result.rows[0].id;        
        result = await verificarEmprestimo(clienteId, livroId);
        if (result.rowCount > 0) {
            console.log(`Empréstimo já cadastrado no banco de dados.`);
            return;
        }                
        const diarias: number = Number(await rl.question('Digite o número de diárias de empréstimo: '));
        if (diarias < 1){
            console.log(`Valor de diárias para a devolução do livro deve ser maior ou igual a 1.`);
            return;
        }
        result = await atualizarQuantidade(livroId, livroQtd);
        result = await inserirEmprestimo(nome, titulo, diarias);
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
        const diarias: number = Number(await rl.question('Digite o número de diárias de empréstimo: '));
        result = await renovarEmprestimo(clienteId, livroId, diarias);
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
        const livroQtd: number = result.rows[0].quantidade + 1;
        const livroId: number = result.rows[0].id;
        result = await verificarEmprestimo(clienteId, livroId);
        if (result.rowCount === 0) {
            console.log(`Empréstimo não encontrado.`);
            return;
        }
        result = await atualizarQuantidade(livroId, livroQtd);
        result = await removerEmprestimo(clienteId, livroId);
        console.log("Devolução realizada com sucesso!");                         
    } catch (error) {
        console.error('Erro ao realizar devolução: ', error);            
    }   
}