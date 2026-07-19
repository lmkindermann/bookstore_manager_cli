import { rl } from '../utils/readlineConfig';
import { verificarAutor, inserirAutor, listaAutores, buscaAutor, atualizarAutor, removerAutor } from '../repositories/AutorRepository';
import { tabelaAutores } from '../models/tabelas';

export async function novoAutor(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do autor: ');
        let result: any = await verificarAutor(nome);
        if (result.rowCount > 0) {
            console.log(`Autor "${nome}" já existe no banco de dados.`);
        } else { 
            const nacionalidade: string = await rl.question('Digite a nacionalidade do autor: ');
            result = await inserirAutor(nome, nacionalidade);
            console.log(`Autor "${nome}" cadastrado com sucesso!`);
        }                 
    } catch (error) {
        console.error('Erro ao cadastrar autor: ', error);            
    }
}

export async function mostrarAutores(): Promise<void> {
    try {
        let result: any = await listaAutores();
        if (result.rowCount === 0) {
            console.log("A lista de autores está vazia.");
        } else {
            tabelaAutores(result);
        }        
    } catch (error) {
        console.error('Erro ao listar autores: ', error);            
    }
}

export async function consultaAutor(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do autor: ');
        let result: any = await buscaAutor(nome);
        if (result.rowCount === 0) {
            console.log("Autor não encontrado.");
        } else {
            tabelaAutores(result);
        }
    } catch (error) {
        console.error('Erro ao consultar autor: ', error);
    }    
}

export async function editarAutor(): Promise<void> {
    try {     
        const nome: string = await rl.question('Digite o nome do autor: ');
        let result: any = await buscaAutor(nome);
        if (result.rowCount === 0) {
            console.log("Autor não encontrado.");
        } else {
            const autorId: number = result.rows[0].id;
            const nome: string = await rl.question('Digite o novo nome do autor: ');
            const nacionalidade: string = await rl.question('Digite a nova nacionalidade do autor: ');
            result = await atualizarAutor(autorId, nome, nacionalidade);
            console.log(`Autor "${nome}" cadastrado com sucesso!`);
        }
    } catch (error) {
        console.error('Erro ao consultar autor: ', error);
    }     
}

export async function apagarAutor(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do autor: ');
        let result: any = await buscaAutor(nome);
        if (result.rowCount === 0) {
            console.log("Autor não encontrado.");
        } else {
            const autorId: number = result.rows[0].id;
            result = await removerAutor(autorId);
            console.log("Autor removido com sucesso!");  
        }                  
    } catch (error) {
        console.error('Erro ao remover autor: ', error);            
    }   
}