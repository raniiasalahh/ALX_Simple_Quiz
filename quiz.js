function checkAnswer() {
    // The correct answer to the quiz question
    var correctAnswer = "4";
    
    // Get the user's selected answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    // Get the feedback element to display the result
    var feedback = document.getElementById('feedback');
    
    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
