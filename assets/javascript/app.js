 $(document).ready(function(){

        
        var start = function(){
        var timer = 60;
        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;
        var answers = [];
        var currentQuestion = 0;
        }
        
        var questions = [
            question1 = {
                question: 'Which U.S. State is the largest?',
                correct: 0,
                choices: ['Texas', 'Cali', 'Florida', 'Nevada'],
            },
            question2 = {
                question: 'Which State has the highest population?',
                correct: 1,
                choices: ['Texas', 'Cali', 'NY'],
            },
            question3 = {
                question: 'Which State is the oldest?',
                correct: 2,
                choices: ['Massachusetts', 'Rhode Island', 'New York'],
            }];
