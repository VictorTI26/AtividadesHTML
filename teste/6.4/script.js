function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const lotteryNumbers = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber;
    do {
      randomNumber = getRandomNumber(1, 60);
    } while (lotteryNumbers.includes(randomNumber));
    lotteryNumbers.push(randomNumber);
  }
  
  const userNumbers = [];
  for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt(`Digite o número ${i + 1} (entre 1 e 60):`));
    if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 60) {
      userNumbers.push(userNumber);
    } else {
      alert("Número inválido! Insira um número entre 1 e 60.");
      i--;
    }
  }
  
  let correctNumbers = 0;
  for (const userNumber of userNumbers) {
    if (lotteryNumbers.includes(userNumber)) {
      correctNumbers++;
    }
  }
  
  console.log(`Números sorteados na loteria: ${lotteryNumbers.join(', ')}`);
  console.log(`Seus números: ${userNumbers.join(', ')}`);
  console.log(`Você acertou ${correctNumbers} números.`);
  
  const totalPossibleCombinations = Math.pow(60, 6);
  const chancesToWin = 1 / totalPossibleCombinations;
  console.log(`Chances de ganhar acertando todos os 6 números: 1 em ${totalPossibleCombinations} (${chancesToWin.toFixed(10)}%)`);
  