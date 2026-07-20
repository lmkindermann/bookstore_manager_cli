import { pool } from '../database/databaseConnection';

export async function verificarEmprestimo(clienteId: number, livroId: number): Promise<void> {
    const result: any = await pool.query(sqlVerificarEmprestimo,[clienteId, livroId]);
    return result;
}

export async function inserirEmprestimo(nome: string, titulo: string, diarias: number): Promise<void> {
    const result: any = await pool.query(sqlInserirEmprestimo,[nome, titulo, diarias]);
    return result;
}

export async function listaEmprestimos(): Promise<void> {
    const result: any = await pool.query(sqlListaEmprestimos);
    return result;
}

export async function buscaEmprestimo(nome: string, titulo: string): Promise<void> {
    const result: any = await pool.query(sqlBuscaEmprestimo,[nome, titulo]);
    return result;
}

export async function renovarEmprestimo(clienteId: number, livroId: number, diarias: number): Promise<void> {
    const result: any = await pool.query(sqlRenovarEmprestimo,[clienteId, livroId, diarias]);
    return result;
}

export async function removerEmprestimo(clienteId: number, livroId: number): Promise<void> {
    const result: any = await pool.query(sqlRemoverEmprestimo,[clienteId, livroId]);
    return result;
}

export async function atualizarQuantidade(livroId: number, livroQtd: number): Promise<void> {
    const result: any = await pool.query(sqlAtualizarQuantidade,[livroId, livroQtd]);
    return result;
}

const sqlVerificarEmprestimo = `SELECT data_devolucao FROM emprestimos WHERE cliente_id = $1 AND livro_id = $2`

const sqlInserirEmprestimo = `
    INSERT INTO emprestimos (cliente_id, livro_id, data_emprestimo, data_devolucao)
    SELECT 
        clientes.id AS "cliente_id", 
        livros.id AS "livro_id",
        CURRENT_DATE AS "data_emprestimo",
        CURRENT_DATE + ($3 * INTERVAL '1 day') AS "data_devolucao"
    FROM clientes CROSS JOIN livros
    WHERE clientes.nome = $1 
      AND livros.titulo = $2`

const sqlListaEmprestimos = `
    SELECT 
        cliente_id,
        livro_id,
        clientes.nome AS "cliente_nome", 
        livros.titulo AS "livro_titulo", 
        TO_CHAR(data_devolucao, 'YYYY-MM-DD') AS "data_devolucao",
        TO_CHAR(data_emprestimo, 'YYYY-MM-DD') AS "data_emprestimo"
    FROM emprestimos     
    JOIN clientes ON emprestimos.cliente_id = clientes.id
    JOIN livros ON emprestimos.livro_id = livros.id
    ORDER BY cliente_nome ASC`

const sqlBuscaEmprestimo = `
    SELECT 
        cliente_id,
        livro_id,
        clientes.nome AS "cliente_nome", 
        livros.titulo AS "livro_titulo", 
        TO_CHAR(data_devolucao, 'YYYY-MM-DD') AS "data_devolucao",
        TO_CHAR(data_emprestimo, 'YYYY-MM-DD') AS "data_emprestimo"
    FROM emprestimos 
    JOIN clientes ON emprestimos.cliente_id = clientes.id
    JOIN livros ON emprestimos.livro_id = livros.id
    WHERE clientes.nome = $1
      AND livros.titulo = $2`

const sqlRenovarEmprestimo = `
    UPDATE emprestimos SET 
        data_emprestimo = CURRENT_DATE,
        data_devolucao = CURRENT_DATE + ($3 * INTERVAL '1 day')
    WHERE cliente_id = $1 
      AND livro_id = $2`

const sqlRemoverEmprestimo = `DELETE FROM emprestimos WHERE cliente_id = $1 AND livro_id = $2`

const sqlAtualizarQuantidade = `UPDATE livros SET quantidade = $2 WHERE id = $1`