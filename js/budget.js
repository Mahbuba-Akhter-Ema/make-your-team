document.getElementById('calculate-btn').addEventListener('click', function () {
    // player id
    const previousPlayers = playerArray.length;
    
    // player-field
    const playerField = document.getElementById('player-field');
    const playerFieldString = playerField.value;
    const previousPlayerField = parseFloat(playerFieldString);
    playerField.value = '';
   
 
    const calculateTotal = previousPlayers * previousPlayerField;
   
    // total expenses
    const playerExpense = document.getElementById('player-expense');
    const playerExpenseString = playerExpense.innerText;
    const previousPlayerExpense = parseFloat(playerExpenseString);
  
    // Calculate total budget
    const newTotal = calculateTotal + previousPlayerExpense;
    playerExpense.innerText = newTotal;
    
})
