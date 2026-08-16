// Define a classe Aluno
class Aluno {
  constructor(nomeAluno, notaAluno) {
    this.nome = nomeAluno;
    this.nota = notaAluno;
  }
}

const alunos = [
  new Aluno("João", 10),
  new Aluno("Jéssica", 8),
  new Aluno("Bruno", 8),
  new Aluno("Carla", 5),
  new Aluno("Joana", 4),
];

function checarAlunos(alunos) {
  return alunos.filter((aluno) => aluno.nota >= 6);
}

const alunosAprovados = checarAlunos(alunos);
console.log(alunosAprovados);
