import { pool } from '../database/databaseConnection';

export async function verificarAutor(nome: string): Promise<void> {
    const result: any = await pool.query(sqlVerificarAutor,[nome]);
    return result;
}

export async function inserirAutor(nome: string, nacionalidade: string): Promise<void> {
    const result: any = await pool.query(sqlInserirAutor,[nome, nacionalidade]);
    return result;
}

export async function listaAutores(): Promise<void> {
    const result: any = await pool.query(sqlListaAutores);
    return result;
}

export async function buscaAutor(nome: string): Promise<void> {
    const result: any = await pool.query(sqlBuscaAutor,[nome]);
    return result;
}

export async function atualizarAutor(id: number, nome: string, nacionalidade: string): Promise<void> {
    const result: any = await pool.query(sqlEditarAutor,[id, nome, nacionalidade]);
    return result;
}

export async function removerAutor(id: number): Promise<void> {
    const result: any = await pool.query(sqlApagarAutor,[id]);
    return result;
}

const sqlVerificarAutor = `SELECT nome FROM autores WHERE nome = $1`

const sqlInserirAutor = `INSERT INTO autores (nome, nacionalidade) VALUES ($1, $2)`

const sqlListaAutores = `SELECT id, nome, nacionalidade, TO_CHAR(criado_em, 'YYYY-MM-DD HH24:MI:SS') AS "criado_em" FROM autores`

const sqlBuscaAutor = `SELECT id, nome, nacionalidade, TO_CHAR(criado_em, 'YYYY-MM-DD HH24:MI:SS') AS "criado_em" FROM autores WHERE nome = $1`

const sqlEditarAutor = `UPDATE autores SET nome = $2, nacionalidade = $3 WHERE id = $1`

const sqlApagarAutor = `DELETE FROM autores WHERE id = $1`