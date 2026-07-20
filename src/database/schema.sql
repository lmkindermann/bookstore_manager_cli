-- criar banco de dados
CREATE DATABASE bookstore_manager

-- ----------------------------------------------------------

-- criar tabelas
CREATE TABLE IF NOT EXISTS  autores(
	id				SERIAL PRIMARY KEY,
	nome			VARCHAR(150) NOT NULL UNIQUE,
	nacionalidade	VARCHAR(100),
	criado_em		TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS livros(
	id			SERIAL PRIMARY KEY,
	autor_id	INTEGER NOT NULL,
	titulo		VARCHAR(150) NOT NULL,
	ano			NUMERIC(4),
	categoria 	VARCHAR(100),
	estoque		INTEGER NOT NULL,	
	quantidade	INTEGER NOT NULL,
	criado_em	TIMESTAMP DEFAULT NOW(),

	CONSTRAINT fk_livros_autor
		FOREIGN KEY (autor_id)
		REFERENCES autores(id)
		ON DELETE CASCADE,

	CONSTRAINT chk_quantidade_maxima CHECK (quantidade <= estoque),
	CONSTRAINT chk_quantidade_minima CHECK (quantidade > 0),
	CONSTRAINT chk_estoque_minimo CHECK (estoque > 0)
);

CREATE TABLE IF NOT EXISTS  clientes(
	id			SERIAL PRIMARY KEY,
	nome		VARCHAR(150) NOT NULL UNIQUE,
	cpf			CHAR(11) UNIQUE CHECK (LENGTH(cpf) = 11),
	data_nasc	DATE,
	telefone	VARCHAR(20),
	email		VARCHAR(150) NOT NULL UNIQUE,
	criado_em	TIMESTAMP DEFAULT NOW()
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
		ON DELETE RESTRICT,

	CONSTRAINT chk_devolucao CHECK (data_devolucao > data_emprestimo)
);
-- ----------------------------------------------------------