function rollDice(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    document.getElementById('dice-result').textContent = result;
  }
  