
-- criar tabelas
CREATE TABLE IF NOT EXISTS  autores(
	id				SERIAL PRIMARY KEY,
	nome			VARCHAR(150) NOT NULL UNIQUE,
	nacionalidade	VARCHAR(100),
	criado_em		TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS livros(
	id			SERIAL PRIMARY KEY,
	autor_id	INTEGER NOT NULL,
	titulo		VARCHAR(150) NOT NULL,
	ano			NUMERIC(4),
	categoria 	VARCHAR(100),
	estoque		INTEGER NOT NULL,
	quantidade	INTEGER NOT NULL,
	criado_em	TIMESTAMPTZ DEFAULT NOW(),

	CONSTRAINT fk_livros_autor
		FOREIGN KEY (autor_id)
		REFERENCES autores(id)
		ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS  clientes(
	id			SERIAL PRIMARY KEY,
	nome		VARCHAR(150) NOT NULL UNIQUE,
	cpf			CHAR(11) UNIQUE CHECK (LENGTH(cpf) = 11),
	data_nasc	DATE,
	telefone	VARCHAR(20),
	criado_em	TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS  emprestimos(	
	cliente_id		INTEGER,
	livro_id		INTEGER,
	data_devolucao	DATE,
	data_emprestimo DATE DEFAULT NOW(),

	CONSTRAINT pk_emprestimos
		PRIMARY KEY (cliente_id, livro_id),

	CONSTRAINT fk_emprestimos_cliente
		FOREIGN KEY (cliente_id)
		REFERENCES clientes(id)
		ON DELETE RESTRICT,

	CONSTRAINT fk_emprestimos_livro
		FOREIGN KEY (livro_id)
		REFERENCES livros(id)
		ON DELETE RESTRICT
);
-- ----------------------------------------------------------

-- Listar tabelas criadas 
SELECT * FROM autores
SELECT * FROM livros
SELECT * FROM clientes
SELECT * FROM emprestimos
-- ----------------------------------------------------------

SELECT 1 FROM pg_tables WHERE tablename = 'autores'
SELECT 1 FROM pg_tables WHERE tablename = 'livros'
SELECT 1 FROM pg_tables WHERE tablename = 'clientes'
SELECT 1 FROM pg_tables WHERE tablename = 'emprestimos'

-- Insere o autor (nome, nacionalidade)
INSERT INTO autores (nome, nacionalidade)
VALUES ('JRR Tolkien','Inglaterra'),('William Gibson','Canadá'),('Frank Herbert','EUA')
-- ----------------------------------------------------------


-- Insere o livro, resgatando o ID do autor através de uma subconsulta escalar
-- (autor [previamente cadastrado, senão bloqueia], livro, ano, categoria)
SET custom.livro_autor = 'JRR Tolkien';
SET custom.livro_titulo = 'O Senhor dos Anéis';
SET custom.livro_ano = '2009';
SET custom.livro_categoria = 'Ficção';

SET custom.livro_autor = 'William Gibson';
SET custom.livro_titulo = 'Neuromancer';
SET custom.livro_ano = '2013';
SET custom.livro_categoria = 'Ficção';

SET custom.livro_autor = 'Frank Herbert';
SET custom.livro_titulo = 'Duna';
SET custom.livro_ano = '2010';
SET custom.livro_categoria = 'Ficção';

INSERT INTO livros (autor_id, titulo, ano, categoria)
VALUES (
	(SELECT id FROM autores WHERE nome = current_setting('custom.livro_autor') LIMIT 1),
	current_setting('custom.livro_titulo'),
	current_setting('custom.livro_ano')::NUMERIC,
	current_setting('custom.livro_categoria')
);
-- ----------------------------------------------------------


-- Insere o cliente (nome + cpf + data nascimento + telefone)
INSERT INTO clientes (nome, cpf, data_nasc, telefone)
VALUES ('Lucas',12345678901,'01/01/26',48912345678);

INSERT INTO clientes (nome, cpf, data_nasc, telefone)
VALUES ('Clau',12345678902,'02/02/26',48912345678);
-- ----------------------------------------------------------

-- Insere um empréstimo (nome cliente + nome livro)
SET custom.cliente_nome = 'Lucas';
SET custom.cliente_nome = 'Clau';
SET custom.livro_titulo = 'O Senhor dos Anéis';
SET custom.livro_titulo = 'Neuromancer';
SET custom.livro_titulo = 'Duna';

INSERT INTO emprestimos (cliente_id, livro_id, data_emprestimo, data_devolucao)
SELECT 
    cl.id AS cliente_id, 
    li.id AS livro_id,
    CURRENT_DATE AS data_emprestimo,
    CURRENT_DATE + INTERVAL '7 days' AS data_devolucao
FROM clientes AS cl
CROSS JOIN livros AS li
WHERE cl.nome = current_setting('custom.cliente_nome') 
  AND li.titulo = current_setting('custom.livro_titulo');
-- ----------------------------------------------------------

-- consulta 

