console.log("1) Quadrado de 10x10:");
for (let i = 0; i < 10; i++) {
  let row = '';
  for (let j = 0; j < 10; j++) {
    row += '*';
  }
  console.log(row);
}

const tamanho = parseInt(prompt("2) Digite o tamanho do quadrado:"));
console.log(`2) Quadrado de ${tamanho}x${tamanho}:`);
for (let i = 0; i < tamanho; i++) {
  let row = '';
  for (let j = 0; j < tamanho; j++) {
    row += '*';
  }
  console.log(row);
}

console.log("3) Padrão específico:");
for (let i = 1; i <= 5; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += i;
  }
  console.log(pattern);
}

const size = 11; 
console.log("4) V de Vingança:");
for (let i = 1; i <= size; i++) {
  let pattern = '';
  for (let j = 1; j <= size; j++) {
    if (j === i || j === size - i + 1) {
      pattern += '*';
    } else {
      pattern += '_';
    }
  }
  console.log(pattern);
}
