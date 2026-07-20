import { rl } from '../utils/readlineConfig';
import { verificarLivro, inserirLivro, listaLivros, buscaLivro, atualizarLivro, removerLivro } from '../repositories/LivroRepository';
import { buscaAutor } from '../repositories/AutorRepository';
import { tabelaLivros } from '../models/tabelas';

export async function novoLivro(): Promise<void> {
    try {
        const nome: string = await rl.question('Digite o nome do autor: ');
        if (!nome) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        }
        let result: any = await buscaAutor(nome);
        if (result.rowCount === 0) {
            console.log("Autor não encontrado.");
            console.log("Verifique se o Autor já está cadastrado.");
            return;
        } 
        const autorNome: string = result.rows[0].nome;
        const titulo: string = await rl.question('Digite o título do livro: ');
        if (!titulo) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        }
        result = await verificarLivro(titulo);
        if (result.rowCount > 0) {
            console.log(`Livro "${titulo}" já existe no banco de dados.`);
            return;
        }
        const ano: string = await rl.question('Digite o ano do livro: ');
        const categoria: string = await rl.question('Digite a categoria do livro: ');
        const estoque: number = Number(await rl.question('Digite o estoque total deste livro: '));
        if (!estoque) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        } else if (estoque <= 0){
            console.log(`ERRO: Estoque não pode ser zero ou negativo. Tente novamente.`)
            return;
        }
        const quantidade: number = Number(await rl.question('Digite a quantidade disponível deste livro: '));
        if (!quantidade) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        } else if (quantidade <= 0 || quantidade > estoque) {
            console.log(`ERRO: Quantidade não pode ser zero, negativo ou maior que o estoque total. Tente novamente.`);
            return;
        }
        result = await inserirLivro(autorNome, titulo, ano, categoria, estoque, quantidade);
        console.log(`Livro "${titulo}" cadastrado com sucesso!`);               
    } catch (error) {
        console.error('Erro ao cadastrar livro: ', error);            
    }
}

export async function mostrarLivros(): Promise<void> {
    try {
        let result: any = await listaLivros();
        if (result.rowCount === 0) {
            console.log("A lista de livros está vazia.");
            return;
        }
        tabelaLivros(result);
    } catch (error) {
        console.error('Erro ao listar livros: ', error);            
    }
}

export async function consultaLivro(): Promise<void> {
    try {
        const titulo: string = await rl.question('Digite o título do livro: ');
        if (!titulo) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        }
        let result: any = await buscaLivro(titulo);
        if (result.rowCount === 0) {
            console.log("Livro não encontrado.");
            return;
        }
        tabelaLivros(result);
    } catch (error) {
        console.error('Erro ao consultar livro: ', error);
    }    
}

export async function editarLivro(): Promise<void> {
    try {     
        let titulo: string = await rl.question('Digite o título do livro: ');
        if (!titulo) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        }
        let result: any = await buscaLivro(titulo);
        if (result.rowCount === 0) {
            console.log("Livro não encontrado.");
            return;
        }
        const livroId: number = result.rows[0].id;
        const nome: string = await rl.question('Digite o novo nome do autor: ');
        if (!nome) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        }
        result = await buscaAutor(nome);
        if (result.rowCount === 0) {
            console.log("Autor não encontrado.");
            console.log("Verifique se o Autor já está cadastrado.");
            return;
        }
        const autorId: number = result.rows[0].id;
        titulo = await rl.question('Digite o novo título do livro: ');
        if (!titulo) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        }
        const ano: string = await rl.question('Digite o novo ano do livro: ');
        const categoria: string = await rl.question('Digite a nova categoria do livro: ');
        const estoque: number = Number(await rl.question('Digite o novo estoque total deste livro: '));
        if (!estoque) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        } else if (estoque <= 0){
            console.log(`ERRO: Estoque não pode ser zero ou negativo. Tente novamente.`)
            return;
        }
        const quantidade: number = Number(await rl.question('Digite a nova quantidade disponível deste livro: '));
        if (!quantidade) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        } else if (quantidade <= 0 || quantidade > estoque) {
            console.log(`ERRO: Quantidade não pode ser zero, negativo ou maior que o estoque total. Tente novamente.`);
            return;
        }
        result = await atualizarLivro(livroId, autorId, titulo, ano, categoria, estoque, quantidade);
        console.log(`Livro "${nome}" atualizado com sucesso!`);
    } catch (error) {
        console.error('Erro ao atualizar livro: ', error);
    }     
}

export async function apagarLivro(): Promise<void> {
    try {
        const titulo: string = await rl.question('Digite o título do livro: ');
        if (!titulo) {
            console.log(`ERRO: Este campo não pode ser vazio. Tente novamente.`);
            return;
        }
        let result: any = await buscaLivro(titulo);
        if (result.rowCount === 0) {
            console.log("Livro não encontrado.");
            return;
        }
        const livroId: number = result.rows[0].id;
        result = await removerLivro(livroId);
        console.log("Livro removido com sucesso!");  
    } catch (error) {
        console.error('Erro ao remover livro: ', error);            
    }   
}