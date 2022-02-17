

/* ---------------------
Calculation Part 
--------------------- */
document.getElementById('calcu-submit').addEventListener('click', function () {
    // Get All Input Field 
    const income = document.getElementById('income').value;
    const food = document.getElementById('food').value;
    const rent = document.getElementById('rent').value;
    const clothes = document.getElementById('clothes').value;
    // Get All Text Field 
    const inputExpenses = document.querySelector('.total-expenses');
    const inputBalance = document.querySelector('.input-balance');
    const expensesNumber = inputExpenses.innerText;
    document.querySelector('.numeric').style.display = 'none';
    if (income > 0 || food > 0 || rent > 0 || clothes > 0) {
        totalExpenses = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
        inputExpenses.innerText = totalExpenses;
        inputBalance.innerText = parseFloat(income) - totalExpenses;
    } else {
        document.querySelector('.number').style.display = 'block';
    }

})

