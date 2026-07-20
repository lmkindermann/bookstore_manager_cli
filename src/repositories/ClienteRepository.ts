import { pool } from '../database/databaseConnection';

export async function verificarCliente(nome: string): Promise<void> {
    const result: any = await pool.query(sqlVerificarCliente,[nome]);
    return result;
}

export async function verificarCpf(cpf: string): Promise<void> {
    const result: any = await pool.query(sqlVerificarCpf,[cpf]);
    return result;
}

export async function verificarEmail(email: string): Promise<void> {
    const result: any = await pool.query(sqlVerificarEmail,[email]);
    return result;
}

export async function inserirCliente(nome: string, cpf: string, data_nasc: string, telefone: string, email: string): Promise<void> {    
    const result: any = await pool.query(sqlInserirCliente,[nome, cpf, data_nasc, telefone, email]);
    return result;
}

export async function listaClientes(): Promise<void> {
    const result: any = await pool.query(sqlListaClientes);
    return result;
}

export async function buscaCliente(nome: string): Promise<void> {
    const result: any = await pool.query(sqlBuscaCliente,[nome]);
    return result;
}

export async function atualizarCliente(id: number, nome: string, cpf: string, data_nasc: string, telefone: string, email: string): Promise<void> {
    const result: any = await pool.query(sqlEditarCliente,[id, nome, cpf, data_nasc, telefone, email]);
    return result;
}

export async function removerCliente(id: number): Promise<void> {
    const result: any = await pool.query(sqlApagarCliente,[id]);
    return result;
}

const sqlVerificarCliente = `SELECT nome FROM clientes WHERE nome = $1`

const sqlVerificarCpf = `SELECT nome FROM clientes WHERE cpf = $1`

const sqlVerificarEmail = `SELECT nome FROM clientes WHERE email = $1`

const sqlInserirCliente = `INSERT INTO clientes (nome, cpf, data_nasc, telefone, email) VALUES ($1, $2, $3, $4, $5)`

const sqlListaClientes = `SELECT id, nome, cpf, TO_CHAR(data_nasc, 'YYYY-MM-DD') AS "data_nasc", telefone, email, TO_CHAR(criado_em, 'YYYY-MM-DD HH24:MI:SS') AS "criado_em" FROM clientes ORDER BY nome ASC`

const sqlBuscaCliente = `SELECT id, nome, cpf, TO_CHAR(data_nasc, 'YYYY-MM-DD') AS "data_nasc", telefone, email, TO_CHAR(criado_em, 'YYYY-MM-DD HH24:MI:SS') AS "criado_em" FROM clientes WHERE nome = $1`

const sqlEditarCliente = `UPDATE clientes SET nome = $2, cpf = $3, data_nasc = $4, telefone = $5, email = $6 WHERE id = $1`

const sqlApagarCliente = `DELETE FROM clientes WHERE id = $1`