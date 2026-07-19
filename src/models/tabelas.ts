import { AuthorResume } from '../models/interfaces';

export function tabelaAutores(dados: any) {
    // Largura fixa para cada coluna (em número de caracteres)
    const tamId = 6;
    const tamNome = 30;
    const tamNacionalidade = 20;
    const tamCriadoEm = 30;

    // Cabeçalho alinhado
    const headId = 'ID'.padEnd(tamId);
    const headNome = 'Nome'.padEnd(tamNome);
    const headNacionalidade = 'Nacionalidade'.padEnd(tamNacionalidade);
    const headCriadoEm = 'Criado Em'.padEnd(tamCriadoEm)

    console.log(`${headId} | ${headNome} | ${headNacionalidade} | ${headCriadoEm}`);
    console.log('-'.repeat(tamId + tamNome + tamNacionalidade + tamCriadoEm + 6));

    // Linhas de dados alinhadas
    dados.rows.forEach((row: AuthorResume) => {  
    const strId = String(row.id).padEnd(tamId);
    const strNome = row.nome.padEnd(tamNome);
    const strNacionalidade = row.nacionalidade.padEnd(tamNacionalidade);
    const strCriadoEm = String(row.criado_em).padEnd(tamCriadoEm);
    
    console.log(`${strId} | ${strNome} | ${strNacionalidade} | ${strCriadoEm}`);
    });
}