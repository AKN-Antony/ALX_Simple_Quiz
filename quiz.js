document.addEventListener('DOMContentLoaded', function() {
    // Quiz Functionality
    const submitButton = document.getElementById('submit-answer');
    const feedbackDiv = document.getElementById('feedback');
    
    function checkAnswer() {
        const correctAnswer = "4";
        const selectedOption = document.querySelector('input[name="quiz"]:checked');
        
        if (!selectedOption) {
            feedbackDiv.textContent = "Please select an answer!";
            feedbackDiv.className = "incorrect";
            feedbackDiv.style.display = "block";
            return;
        }
        
        const userAnswer = selectedOption.value;
        
        if (userAnswer === correctAnswer) {
            feedbackDiv.textContent = "Correct! Well done.";
            feedbackDiv.className = "correct";
        } else {
            feedbackDiv.textContent = "That's incorrect. Try again!";
            feedbackDiv.className = "incorrect";
        }
        
        feedbackDiv.style.display = "block";
    }
    
    submitButton.addEventListener('click', checkAnswer);
    
    // Calculator Functionality (remains the same)
    const num1Input = document.getElementById('number1');
    // ... rest of calculator code ...
});