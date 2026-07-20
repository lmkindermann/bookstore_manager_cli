import { pool } from '../database/databaseConnection';

export async function verificarLivro(titulo: string): Promise<void> {
    const result: any = await pool.query(sqlVerificarLivro,[titulo]);
    return result;
}
// Adicionar campo Autor e buscar o ID na tabela autores, gerar erro se não existir 
export async function inserirLivro(titulo: string, ano: string, categoria: string, estoque: string, quantidade: string): Promise<void> {
    const result: any = await pool.query(sqlInserirLivro,[titulo, ano, categoria, estoque, quantidade]);
    return result;
}
// Adicionar campo Autor e mostrar o nome dele buscando pelo ID na tabela autores
export async function listaLivros(): Promise<void> {
    const result: any = await pool.query(sqlListaLivros);
    return result;
}
// Adicionar campo Autor e mostrar o nome dele buscando pelo ID na tabela autores
export async function buscaLivro(titulo: string): Promise<void> {
    const result: any = await pool.query(sqlBuscaLivro,[titulo]);
    return result;
}
// Adicionar campo Autor e buscar o ID na tabela autores, gerar erro se não existir 
export async function atualizarLivro(id: number, titulo: string, ano: string, categoria: string, estoque: string, quantidade: string): Promise<void> {
    const result: any = await pool.query(sqlEditarLivro,[id, titulo, ano, categoria, estoque, quantidade]);
    return result;
}

export async function removerLivro(id: number): Promise<void> {
    const result: any = await pool.query(sqlApagarLivro,[id]);
    return result;
}

const sqlVerificarLivro = `SELECT titulo FROM livros WHERE titulo = $1`

const sqlInserirLivro = `INSERT INTO livros (titulo, ano, categoria, estoque, quantidade) VALUES ($1, $2, $3, $4, $5)`

const sqlListaLivros = `SELECT id, autor_id, titulo, ano, categoria, estoque, quantidade, TO_CHAR(criado_em, 'YYYY-MM-DD HH24:MI:SS') AS "criado_em" FROM livros`

const sqlBuscaLivro = `SELECT id, autor_id, titulo, ano, categoria, estoque, quantidade, TO_CHAR(criado_em, 'YYYY-MM-DD HH24:MI:SS') AS "criado_em" FROM livros WHERE titulo = $1`

const sqlEditarLivro = `UPDATE livros SET autor_id = $2, titulo = $3, ano = $4, categoria = $5, estoque = $6, quantidade = $7 WHERE id = $1`

const sqlApagarLivro = `DELETE FROM livros WHERE id = $1`