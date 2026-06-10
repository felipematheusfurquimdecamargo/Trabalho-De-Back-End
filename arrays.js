const alunos = [
    { matricula: 101, nome: "João", nota: 8.5 },
    { matricula: 102, nome: "Maria", nota: 9.2 },
    { matricula: 103, nome: "Pedro", nota: 6.8 },
    { matricula: 104, nome: "Ana", nota: 7.4 },
    { matricula: 105, nome: "Lucas", nota: 5.5 }
];

// LISTAR

function listarAlunos() {
    console.log("=== LISTA DE ALUNOS ===");

    alunos.forEach(aluno => {
        console.log(
            `Matrícula: ${aluno.matricula} | Nome: ${aluno.nome} | Nota: ${aluno.nota}`
        );
    });
}

// INSERTION SORT (MAIOR NOTA → MENOR)

function ordenarPorNota(lista) {
    for (let i = 1; i < lista.length; i++) {

        let atual = lista[i];
        let j = i - 1;

        while (j >= 0 && lista[j].nota < atual.nota) {
            lista[j + 1] = lista[j];
            j--;
        }

        lista[j + 1] = atual;
    }

    return lista;
}

// BUSCA BINÁRIA POR MATRÍCULA

function buscaBinaria(lista, matricula) {

    let inicio = 0;
    let fim = lista.length - 1;

    while (inicio <= fim) {

        let meio = Math.floor((inicio + fim) / 2);

        if (lista[meio].matricula === matricula) {
            return lista[meio];
        }

        if (lista[meio].matricula < matricula) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return null;
}

// EXECUÇÃO

listarAlunos();

console.log("\n=== ALUNOS ORDENADOS POR NOTA ===");

const ordenados = ordenarPorNota([...alunos]);

ordenados.forEach(aluno => {
    console.log(
        `Matrícula: ${aluno.matricula} | Nome: ${aluno.nome} | Nota: ${aluno.nota}`
    );
});

console.log("\n=== BUSCA BINÁRIA ===");

const encontrado = buscaBinaria(alunos, 103);

if (encontrado) {
    console.log("Aluno encontrado:");
    console.log(encontrado);
} else {
    console.log("Aluno não encontrado.");