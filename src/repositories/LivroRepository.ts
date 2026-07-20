import { pool } from '../database/databaseConnection';

export async function verificarLivro(titulo: string): Promise<void> {
    const result: any = await pool.query(sqlVerificarLivro,[titulo]);
    return result;
}

export async function inserirLivro(autorNome: string, titulo: string, ano: string, categoria: string, estoque: number, quantidade: number): Promise<void> {
    const result: any = await pool.query(sqlInserirLivro,[autorNome, titulo, ano, categoria, estoque, quantidade]);
    return result;
}

export async function listaLivros(): Promise<void> {
    const result: any = await pool.query(sqlListaLivros);
    return result;
}

export async function buscaLivro(titulo: string): Promise<void> {
    const result: any = await pool.query(sqlBuscaLivro,[titulo]);
    return result;
}

export async function atualizarLivro(livroId: number, autorId: number, titulo: string, ano: string, categoria: string, estoque: number, quantidade: number): Promise<void> {
    const result: any = await pool.query(sqlEditarLivro,[livroId, autorId, titulo, ano, categoria, estoque, quantidade]);
    return result;
}

export async function removerLivro(id: number): Promise<void> {
    const result: any = await pool.query(sqlApagarLivro,[id]);
    return result;
}

const sqlVerificarLivro = `SELECT titulo FROM livros WHERE titulo = $1`

const sqlInserirLivro = `
    INSERT INTO livros (autor_id, titulo, ano, categoria, estoque, quantidade) 
    VALUES ((SELECT id FROM autores WHERE nome = $1 LIMIT 1), $2, $3, $4, $5, $6)`

const sqlListaLivros = `
    SELECT livros.id, autores.nome AS "autor", titulo, ano, categoria, estoque, quantidade, TO_CHAR(livros.criado_em, 'YYYY-MM-DD HH24:MI:SS') AS "criado_em" 
    FROM livros JOIN autores ON livros.autor_id = autores.id ORDER BY autor ASC`

const sqlBuscaLivro = `
    SELECT livros.id, autores.nome AS "autor", titulo, ano, categoria, estoque, quantidade, TO_CHAR(livros.criado_em, 'YYYY-MM-DD HH24:MI:SS') AS "criado_em" 
    FROM livros JOIN autores ON livros.autor_id = autores.id WHERE titulo = $1`

const sqlEditarLivro = `UPDATE livros 
    SET autor_id = $2, titulo = $3, ano = $4, categoria = $5, estoque = $6, quantidade = $7 
    WHERE id = $1`

const sqlApagarLivro = `DELETE FROM livros WHERE id = $1`