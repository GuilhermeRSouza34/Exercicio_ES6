/**
 * Filtra os alunos com nota maior ou igual a 6.
 * @param {Array} alunos - O array de objetos representando os alunos.
 * @returns {Array} - O array contendo apenas os alunos aprovados.
 */
export function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}