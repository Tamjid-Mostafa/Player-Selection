function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const input = parseFloat(inputFieldString);

    if(inputField.value === '' || inputField.value === null){
        alert('Per Player Field should not be Blank');
        return false;
    }
    else if(isNaN(inputField.value)){
        alert('please provide number');
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









document.getElementById('btn-Calculate').addEventListener('click', function(){
    const perPlayerField = getInputFieldValueById('per-player-budget-field');
    const playerEpensesElement = getTextElementValueById('player-expenses');
    const totalPlayerExpenses = perPlayerField + playerEpensesElement;

    setTextElementValueById('player-expenses', totalPlayerExpenses);

    
    
    
})

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerExpenseField = getInputFieldValueById('manager-field');
    const coachExpenseField = getInputFieldValueById('coach-field');
    const totalExpenses = getTextElementValueById('total');
    
    const expensesMangerAndCoach = managerExpenseField + coachExpenseField;

    const playerEpensesElement = getTextElementValueById('player-expenses');
    const total = expensesMangerAndCoach + playerEpensesElement;
    
    // const total = totalExpenses + expensesMangerAndCoach;



    setTextElementValueById('total', total);


})