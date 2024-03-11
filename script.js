document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expenses');

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const category = document.getElementById('category').value;
        const amount = document.getElementById('amount').value;
        const date = document.getElementById('date').value;

        addExpense(category, amount, date);
        expenseForm.reset();
    });

    function addExpense(category, amount, date) {
        const expenseItem = document.createElement('li');
        expenseItem.innerHTML = `<strong>${category}</strong> - $${amount} - ${date}`;
        expenseList.appendChild(expenseItem);
    }
});
