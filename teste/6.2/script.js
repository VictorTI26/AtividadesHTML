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
  
  function compararNumeros() {
    const userNumbers = [];
    for (let i = 1; i <= 6; i++) {
      const userInput = document.getElementById(`numero${i}`).value;
      const userNumber = parseInt(userInput);
      if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 60) {
        userNumbers.push(userNumber);
      } else {
        alert(`Número ${i} inválido! Insira um número entre 1 e 60.`);
        return;
      }
    }
  
    let correctNumbers = 0;
    for (const userNumber of userNumbers) {
      if (lotteryNumbers.includes(userNumber)) {
        correctNumbers++;
      }
    }
  
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Números sorteados na loteria: ${lotteryNumbers.join(', ')}<br>
                            Seus números: ${userNumbers.join(', ')}<br>
                            Você acertou ${correctNumbers} números.`;
  }
  