
/* ------------------
Input Field Error 
--------------------- */
function errorMessage(error, input) {

    // Income Input Field Error show message 

    if (input === 'inError') {
        if (isNaN(error)) {
            document.querySelector('.income-numeric').style.display = 'block';
            document.querySelector('.income-number').style.display = 'none';
            document.getElementById('calcu-submit').disabled = true;
        } else if (error > -1) {
            document.querySelector('.income-numeric').style.display = 'none';
            document.querySelector('.income-number').style.display = 'none';
            document.getElementById('calcu-submit').disabled = false;
        } else if (error < 0) {
            document.querySelector('.income-number').style.display = 'block';
            document.querySelector('.income-numeric').style.display = 'none';
            document.getElementById('calcu-submit').disabled = true;
        }
    }

    // Food Input Field Error show message 

    if (input === 'fError') {
        if (isNaN(error)) {
            document.querySelector('.fnumeric').style.display = 'block';
            document.querySelector('.fnumber').style.display = 'none';
            document.getElementById('calcu-submit').disabled = true;
        } else if (error > -1) {
            document.querySelector('.fnumeric').style.display = 'none';
            document.querySelector('.fnumber').style.display = 'none';
            document.getElementById('calcu-submit').disabled = false;
        } else if (error < 0) {
            document.querySelector('.fnumber').style.display = 'block';
            document.querySelector('.fnumeric').style.display = 'none';
            document.getElementById('calcu-submit').disabled = true;

        }
    }

    // rent Input Field Error show message 

    if (input === 'rError') {
        if (isNaN(error)) {
            document.querySelector('.rnumeric').style.display = 'block';
            document.querySelector('.rnumber').style.display = 'none';
            document.getElementById('calcu-submit').disabled = true;
        } else if (error > -1) {
            document.querySelector('.rnumeric').style.display = 'none';
            document.querySelector('.rnumber').style.display = 'none';
            document.getElementById('calcu-submit').disabled = false;
        } else if (error < 0) {
            document.querySelector('.rnumber').style.display = 'block';
            document.querySelector('.rnumeric').style.display = 'none';
            document.getElementById('calcu-submit').disabled = true;

        }
    }

    // Clothes Input Field Error show message 

    if (input === 'cError') {
        if (isNaN(error)) {
            document.querySelector('.cnumeric').style.display = 'block';
            document.querySelector('.cnumber').style.display = 'none';
            document.getElementById('calcu-submit').disabled = true;
        } else if (error > -1) {
            document.querySelector('.cnumeric').style.display = 'none';
            document.querySelector('.cnumber').style.display = 'none';
            document.getElementById('calcu-submit').disabled = false;
        } else if (error < 0) {
            document.querySelector('.cnumber').style.display = 'block';
            document.querySelector('.cnumeric').style.display = 'none';
            document.getElementById('calcu-submit').disabled = true;

        }
    }

}

// GEt All Input Field 
document.getElementById('income').addEventListener('keyup', function () {
    const income = document.getElementById('income').value;
    errorMessage(income, 'inError');
});
document.getElementById('food').addEventListener('keyup', function () {
    const food = document.getElementById('food').value;
    errorMessage(food, 'fError');
});
document.getElementById('rent').addEventListener('keyup', function () {
    const rent = document.getElementById('rent').value;
    errorMessage(rent, 'rError');
});
document.getElementById('clothes').addEventListener('keyup', function () {
    const clothes = document.getElementById('clothes').value;
    errorMessage(clothes, 'cError');
});

/* ---------------------
Calculation Part 
--------------------- */
document.getElementById('calcu-submit').addEventListener('click', function () {
    // Get All Input Field 
    const income = document.getElementById('income');
    const incomeValue = parseFloat(income.value);
    const food = document.getElementById('food');
    const foodValue = parseFloat(food.value);
    const rent = document.getElementById('rent');
    const rentValue = parseFloat(rent.value);
    const clothes = document.getElementById('clothes');
    const clothesValue = parseFloat(clothes.value);
    // Get All Text Field 
    const inputExpenses = document.querySelector('.total-expenses');
    const inputBalance = document.querySelector('.input-balance');
    const expensesNumber = inputExpenses.innerText;
    if ((incomeValue > -1) && (foodValue > -1) && (rentValue > -1) && (clothesValue > -1)) {
        totalExpenses = foodValue + rentValue + clothesValue;
        inputExpenses.innerText = totalExpenses;
        inputBalance.innerText = incomeValue - totalExpenses;
        income.value = '';
        food.value = '';
        rent.value = '';
        clothes.value = '';
        document.querySelector('.button-number').style.display = 'none'
    } else {
        document.querySelector('.button-number').style.display = 'block'
    }


})

