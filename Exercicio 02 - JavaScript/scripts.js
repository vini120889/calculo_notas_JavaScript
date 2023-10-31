const students = [
  {
    name: "João",
    firstNote: 7,
    secondNote: 5,
  },

  {
    name: 'Leticia',
    firstNote: 8,
    secondNote: 10,
  },

  {
    name: 'Diego',
    firstNote: 5,
    secondNote: 6,
  },

  {
    name: 'Julia',
    firstNote: 2,
    secondNote: 3,
  }
]

function average(firstNote, secondNote){
  return ((firstNote + secondNote) / 2).toFixed(2)
}

function approval(student){
  if(student.average > 7){
    return `Parabéns, ${student.name}! Você foi aprovado(a) no concurso.`;
  } else {
    return `Não foi desta vez, ${student.name}! Tente novamente!`;
  }
}

function printStudentAverage (student){
  return `
  A média do(a) aluno(a) ${student.name} é: ${average(student.firstNote, student.secondNote)}
  `  
}

for (let student of students){
  student.average = Number(average(student.firstNote, student.secondNote));
  let averageMessage = printStudentAverage(student);
  let approvalMessage = approval(student);
  alert(averageMessage + "\n" + approvalMessage);
}