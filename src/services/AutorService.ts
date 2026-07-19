import { rl } from '../utils/readlineConfig';
import { verificarAutor, inserirAutor, listaAutores } from '../repositories/AutorRepository';
import { tabelaAutores } from '../models/tabelas';

export async function novoAutor(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do autor: ');
        let result: any = await verificarAutor(nome);
        if (result.rowCount > 0) {
            //verificar se o autor já existe no banco de dados
            console.log(`Autor "${nome}" já existe no banco de dados.`);
        } else { 
            //se não existir, cadastra o autor no banco de dados
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
        //console.log(result);
        if (result.rowCount === 0) {
            console.log("A lista de autores está vazia.");
        } else {
            tabelaAutores(result);
        }        
    } catch (error) {
        console.error('Erro ao listar autores: ', error);            
    }
}