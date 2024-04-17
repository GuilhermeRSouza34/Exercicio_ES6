import { alunosAprovados } from './src/alunos.js';
import fs from 'fs';

// Lendo os dados do arquivo JSON
fs.readFile('alunos.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo de alunos:', err);
        return;
    }

    const alunos = JSON.parse(data);

    // Filtrando os alunos aprovados
    const alunosAprovadosArray = alunosAprovados(alunos);

    console.log('Alunos aprovados:');
    console.log(alunosAprovadosArray);
});