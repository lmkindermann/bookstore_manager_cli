import { rl } from '../utils/readlineConfig';
import { verificarLivro, inserirLivro, listaLivros, buscaLivro, atualizarLivro, removerLivro } from '../repositories/LivroRepository';
import { tabelaLivros } from '../models/tabelas';

export async function novoLivro(): Promise<void> {
    // Adicionar campo Autor e buscar o ID na tabela autores, gerar erro se não existir 
    try {
        const titulo: string = await rl.question('Digite o título do livro: ');
        let result: any = await verificarLivro(titulo);
        if (result.rowCount > 0) {
            console.log(`Livro "${titulo}" já existe no banco de dados.`);
        } else { 
            const ano: string = await rl.question('Digite o ano do livro: ');
            const categoria: string = await rl.question('Digite a categoria do livro: ');
            const estoque: string = await rl.question('Digite o estoque total deste livro: ');
            const quantidade: string = await rl.question('Digite a quantidade disponível deste livro: ');
            result = await inserirLivro(titulo, ano, categoria, estoque, quantidade);
            console.log(`Livro "${titulo}" cadastrado com sucesso!`);
        }                 
    } catch (error) {
        console.error('Erro ao cadastrar livro: ', error);            
    }
}

export async function mostrarLivros(): Promise<void> {
    // Adicionar campo Autor e mostrar o nome dele buscando pelo ID na tabela autores
    try {
        let result: any = await listaLivros();
        if (result.rowCount === 0) {
            console.log("A lista de livros está vazia.");
        } else {
            tabelaLivros(result);
        }        
    } catch (error) {
        console.error('Erro ao listar livros: ', error);            
    }
}

export async function consultaLivro(): Promise<void> {
    // Adicionar campo Autor e mostrar o nome dele buscando pelo ID na tabela autores
    try {
        const nome: string = await rl.question('Digite o nome do livro: ');
        let result: any = await buscaLivro(nome);
        if (result.rowCount === 0) {
            console.log("Livro não encontrado.");
        } else {
            tabelaLivros(result);
        }
    } catch (error) {
        console.error('Erro ao consultar livro: ', error);
    }    
}

export async function editarLivro(): Promise<void> {
    // Adicionar campo Autor e buscar o ID na tabela autores, gerar erro se não existir 
    try {     
        const nome: string = await rl.question('Digite o nome do livro: ');
        let result: any = await buscaLivro(nome);
        if (result.rowCount === 0) {
            console.log("Livro não encontrado.");
        } else {
            const livroId: number = result.rows[0].id;
            const titulo: string = await rl.question('Digite o novo título do livro: ');
            const ano: string = await rl.question('Digite o novo ano do livro: ');
            const categoria: string = await rl.question('Digite a nova categoria do livro: ');
            const estoque: string = await rl.question('Digite o novo estoque total deste livro: ');
            const quantidade: string = await rl.question('Digite a nova quantidade disponível deste livro: ');
            result = await atualizarLivro(livroId, titulo, ano, categoria, estoque, quantidade);
            console.log(`Livro "${nome}" atualizado com sucesso!`);
        }
    } catch (error) {
        console.error('Erro ao atualizar livro: ', error);
    }     
}

export async function apagarLivro(): Promise<void> {
    try {
        const titulo: string = await rl.question('Digite o título do livro: ');
        let result: any = await buscaLivro(titulo);
        if (result.rowCount === 0) {
            console.log("Livro não encontrado.");
        } else {
            const livroId: number = result.rows[0].id;
            result = await removerLivro(livroId);
            console.log("Livro removido com sucesso!");  
        }                  
    } catch (error) {
        console.error('Erro ao remover livro: ', error);            
    }   
}