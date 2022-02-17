
/* ------------------
Input Field Error 
--------------------- */

function errorMessage(error, numaricError, numberError, submitButton) {
    if (isNaN(error)) {
        document.querySelector(numaricError).style.display = 'block';
        document.querySelector(numberError).style.display = 'none';
        document.getElementById(submitButton).disabled = true;
    } else if (error > -1) {
        document.querySelector(numaricError).style.display = 'none';
        document.querySelector(numberError).style.display = 'none';
        document.getElementById(submitButton).disabled = false;
    } else if (error < 0) {
        document.querySelector(numberError).style.display = 'block';
        document.querySelector(numaricError).style.display = 'none';
        document.getElementById(submitButton).disabled = true;

    }
}
// Get All Input Field 

document.getElementById('income').addEventListener('keyup', function () {
    const income = document.getElementById('income').value;
    errorMessage(income, '.income-numeric', '.income-number', 'calcu-submit');
});
document.getElementById('food').addEventListener('keyup', function () {
    const food = document.getElementById('food').value;
    errorMessage(food, '.fnumeric', '.fnumber', 'calcu-submit');
});
document.getElementById('rent').addEventListener('keyup', function () {
    const rent = document.getElementById('rent').value;
    errorMessage(rent, '.rnumeric', '.rnumber', 'calcu-submit');
});
document.getElementById('clothes').addEventListener('keyup', function () {
    const clothes = document.getElementById('clothes').value;
    errorMessage(clothes, '.cnumeric', '.cnumber', 'calcu-submit');
});

/* ---------------------
Calculation Part 
--------------------- */
document.getElementById('calcu-submit').addEventListener('click', function () {
    // Get income Input Field 
    const income = document.getElementById('income');
    const incomeValue = parseFloat(income.value);
    // Get food Input Field 
    const food = document.getElementById('food');
    const foodValue = parseFloat(food.value);
    // Get rent Input Field 
    const rent = document.getElementById('rent');
    const rentValue = parseFloat(rent.value);
    // Get clothes Input Field 
    const clothes = document.getElementById('clothes');
    const clothesValue = parseFloat(clothes.value);

    // Get total income Text Field 
    const inputIncome = document.querySelector('.total-income');
    // Get total expenses Text Field 
    const inputExpenses = document.querySelector('.total-expenses');
    // Get total balance Text Field 
    const inputBalance = document.querySelector('.input-balance');
    const expensesNumber = inputExpenses.innerText;

    if ((incomeValue > -1) && (foodValue > -1) && (rentValue > -1) && (clothesValue > -1)) {
        totalExpenses = foodValue + rentValue + clothesValue;

        if (totalExpenses < incomeValue) {
            inputExpenses.innerText = totalExpenses;
            inputIncome.innerText = incomeValue;
            inputBalance.innerText = incomeValue - totalExpenses;
            income.value = '';
            food.value = '';
            rent.value = '';
            clothes.value = '';
            document.querySelector('.enough-total-balance-error').style.display = 'none';
        } else {
            document.querySelector('.enough-total-balance-error').style.display = 'block';
        }

        document.querySelector('.button-number').style.display = 'none'
    } else {
        document.querySelector('.button-number').style.display = 'block'
    }

});


/* -----------------------
Save Money your Income 
--------------------------- */

document.getElementById('save-money').addEventListener('keyup', function () {
    const saveMoney = document.getElementById('save-money').value;
    errorMessage(saveMoney, '.save-numeric-error', '.save-number-error', 'save-button');
});

// Save Money calculation Start 
document.getElementById('save-button').addEventListener('click', function () {
    // get total Income Balance input 
    const income = document.querySelector('.total-income');
    const incomeValue = parseFloat(income.innerText);

    // get Deposit balance text field
    const depositBalance = document.querySelector('.input-balance');
    const depositBalanceValue = parseFloat(depositBalance.innerText);

    // get save money input field 
    const getSaveMoneyinput = document.getElementById('save-money');

    // get saving amount value 
    const getSavingtext = document.getElementById('saving-amount');

    // get remaining amount value 
    const getRemainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceValue = parseFloat(getRemainingBalance.innerText);

    // calculation saveing Money 
    const saveMoneyValue = parseFloat(getSaveMoneyinput.value) / 100;
    const saveMoney = incomeValue * saveMoneyValue;
    // getSavingtext.innerText = saveMoney.toFixed(2);


    // calculation remaining balance money

    if (depositBalanceValue > saveMoney) {
        getSavingtext.innerText = saveMoney.toFixed(2);
        const totalRemainingBalance = depositBalanceValue - saveMoney;
        getRemainingBalance.innerText = totalRemainingBalance.toFixed(2);
        getSaveMoneyinput.value = '';
        document.querySelector('.enough-balance-error').style.display = 'none';
    } else {
        document.querySelector('.enough-balance-error').style.display = 'block';
        getRemainingBalance.innerText = '00.00';
        getSavingtext.innerText = '00.00';
    }
})