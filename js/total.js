document.getElementById('calculate-total').addEventListener('click', function () {
    // manager field
    const managerField = document.getElementById('manager-field');
    const managerFieldString = managerField.value;
    const previousManagerField = parseFloat(managerFieldString);

    // coach field
    const coachField = document.getElementById('coach-field');
    const coachFieldString = coachField.value;
    const previousCoachField = parseFloat(coachFieldString);

    // get total expenses
    const playerExpenses = document.getElementById('player-expense');
    const playerExpensesString = playerExpenses.innerText;
    const newplayerExpense = parseFloat(playerExpensesString);

    // total value
    const getTotal = document.getElementById('total-value');
    const getTotalString = getTotal.innerText;
    const previousGetTotal = parseFloat(getTotalString);
    getTotal.innerText = previousGetTotal;
    
    // calculate total 
    const calculateTotal = previousManagerField + previousCoachField + newplayerExpense;
    getTotal.innerText = calculateTotal;  
})