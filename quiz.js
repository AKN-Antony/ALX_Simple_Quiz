document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const num1Input = document.getElementById('number1');
    const num2Input = document.getElementById('number2');
    const resultDisplay = document.getElementById('result');
    const operationButtons = document.querySelectorAll('.operation-btn');
    const historyList = document.getElementById('history-list');
    
    // Store calculation history
    let calculationHistory = [];
    
    // Function to perform calculations
    function calculate(operation) {
        // Get input values
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        
        // Validate inputs
        if (isNaN(num1) || isNaN(num2)) {
            resultDisplay.textContent = "Invalid input!";
            resultDisplay.style.color = "#e74c3c";
            return;
        }
        
        let result;
        let operationSymbol;
        
        // Perform calculation based on operation
        switch(operation) {
            case 'add':
                result = num1 + num2;
                operationSymbol = '+';
                break;
            case 'subtract':
                result = num1 - num2;
                operationSymbol = '-';
                break;
            case 'multiply':
                result = num1 * num2;
                operationSymbol = '×';
                break;
            case 'divide':
                if (num2 === 0) {
                    resultDisplay.textContent = "Cannot divide by zero!";
                    resultDisplay.style.color = "#e74c3c";
                    return;
                }
                result = num1 / num2;
                operationSymbol = '÷';
                break;
            default:
                result = "Invalid operation";
        }
        
        // Display result
        resultDisplay.textContent = result;
        resultDisplay.style.color = "#27ae60";
        
        // Add to history
        const calculation = {
            expression: `${num1} ${operationSymbol} ${num2}`,
            result: result
        };
        
        calculationHistory.push(calculation);
        updateHistory();
    }
    
    // Update calculation history display
    function updateHistory() {
        historyList.innerHTML = '';
        
        // Show last 5 calculations
        const recentHistory = calculationHistory.slice(-5).reverse();
        
        recentHistory.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.expression} = ${item.result}`;
            historyList.appendChild(li);
        });
    }
    
    // Add event listeners to operation buttons
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const operation = button.getAttribute('data-operation');
            calculate(operation);
        });
    });
    
    // Add keyboard support
    document.addEventListener('keydown', (event) => {
        if (event.key === '+') calculate('add');
        if (event.key === '-') calculate('subtract');
        if (event.key === '*') calculate('multiply');
        if (event.key === '/') calculate('divide');
        if (event.key === 'Enter') calculate('add'); // Default to add on Enter
    });
});