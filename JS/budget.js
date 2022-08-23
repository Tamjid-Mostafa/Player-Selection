function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const input = parseFloat(inputFieldString);

    if(inputField.value === '' || inputField.value === null){
        alert('Field should not be Blank');
        return false;
    }
    else if(isNaN(inputField.value) || inputField.value <= 0){
        alert('please provide positive number');
        return false;
    }

    // inputField.value = '';
    return input;
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementTextString = element.innerText;
    const elementText = parseFloat(elementTextString);
    return elementText;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

// Dom Selection 

const btnCalculate = document.getElementById('btn-calculate');
const btnCalculateTotal = document.getElementById('btn-calculate-total');





btnCalculate.addEventListener('click', function(){
    const perPlayerField = getInputFieldValueById('per-player-budget-field');
    const playerEpensesElement = getTextElementValueById('player-expenses');


    

    // count List Item from Un-ordered List
    const listItem = document.getElementsByTagName('li');
    const count = listItem.length;
    

    const totalPlayerBudget = perPlayerField * count;
    const totalPlayerExpenses = totalPlayerBudget + playerEpensesElement;


    if(count === 0){
        alert('Please Select Players First');
        return;
    }
    


    setTextElementValueById('player-expenses', totalPlayerExpenses);

    
    
    
})





btnCalculateTotal.addEventListener('click', function(){
    const managerExpenseField = getInputFieldValueById('manager-field');
    const coachExpenseField = getInputFieldValueById('coach-field');
    // const totalExpenses = getTextElementValueById('total');
    
    const expensesMangerAndCoach = managerExpenseField + coachExpenseField;

    const playerEpensesElement = getTextElementValueById('player-expenses');
    const total = expensesMangerAndCoach + playerEpensesElement;
    
    // const total = totalExpenses + expensesMangerAndCoach;

    
    setTextElementValueById('total', total);


})