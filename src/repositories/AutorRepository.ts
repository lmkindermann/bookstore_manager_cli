import { pool } from '../database/databaseConnection';

export async function verificarAutor(nome: string): Promise<void> {
    const result: any = await pool.query(sqlVerificarAutor,[nome]);
    return result;
}

export async function inserirAutor(nome: string, nacionalidade: string): Promise<void> {
    const result: any = await pool.query(sqlInserirAutor,[nome, nacionalidade]);
    return result;
}

const sqlVerificarAutor = `SELECT nome FROM autores WHERE nome = $1`

const sqlInserirAutor = `INSERT INTO autores (nome, nacionalidade) VALUES ($1, $2)`
