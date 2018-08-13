// User clicks "Start" to start the game
$('#start').on('click', function(){
    game.start();
    
})

// Provide user a button to stop the game when done.
$('#done').on('click',function(){
    game.done();
})

// After user clicks "Start" display the list (array) of questions and choice list
var questions = [{
    question: 'Question 0',
    answers: ['a', 'b', 'c'],
    correctAnswer: 'c'
},{
    question: "Question 1",
    answers: ["x", "y", "z"],
    correctAnswer: "z"
},{
    question: "Question 2",
    answers: ["x", "y", "z"],
    correctAnswer: "z"
}, {
    question: "Question 3",
    answers: ["x", "y", "z"],
    correctAnswer: "z"
}, {
    question: "Question 4",
    answers: ["x", "y", "z"],
    correctAnswer: "z"
}, {
    question: "Question 5",
    answers: ["x", "y", "z"],
    correctAnswer: "z"
}
];


var answers = {question:[0]="c", question:[1]="z", question:[2]="z" ,question:[3]="z" ,question:[4]="z", question:[5]="z"};

// Set a counter and display the results, or a message if time ran out.
    var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function(){  // start countdown when user clicks "Start"
        game.counter--;
        $('#counter').html(game.counter)
        if(game.counter<=0){
            console.log("Time ran out, sorry!"); // dsplay to the msg when game time is up
            game.done();
        }
        //Check if user pressed "Done"
        if($('#done').on('click', function(){
        game.done();
    }));
},
        // After use click "Start" remove the "Start" button and set the interval to xsec count down and display time remaining.
        start: function(){
        timer = setInterval(game.countdown,1000); 
        $('#subcontainer').prepend('<h2>Time remaining: <span id="counter">30</span> Seconds</h2>'); // display time remaining
        $('#start').remove(); 
        // function for question loop
        for(var i=0; i<questions.length; i++){
            $('#subcontainer').append('<h2>'+questions[i].question+'<h2>');
            for(var j=0;j<questions[i].answers.length;j++){
                //append each and every question with a name equal to the number of the question along with it's value.
                $('#subcontainer').append("<input type='radio' name='question-"+i+" value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]+"")
            }
        }
        // Provide user with a "Done" button incase user finish early
         $('#subcontainer').append('<br><button id="done">Done</button>')
    },
    
        // check whether answers are correct or incorrect
        done: function(){
            $.each($('input[name="question-0"]:checked'), function(){  // looks for the checked / selected answer
                if($(this).val() === questions[0].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($('input[name="question-1"]:checked'), function(){  // looks for the checked / selected answer
                if($(this).val() === questions[1].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($('input[name="question-2"]:checked'), function(){  // looks for the checked / selected answer
                if($(this).val() === questions[2].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($('input[name="question-3"]:checked'), function(){  // looks for the checked / selected answer
                if($(this).val() === questions[3].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($('input[name="question-4"]:checked'), function(){  // looks for the checked / selected answer
                if($(this).val() === questions[4].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($('input[name="question-5"]:checked'), function(){  // looks for the checked / selected answer
                if($(this).val() === questions[5].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                } 
            }), 

            this.result();
            },

            // show the results
            result: function(){
                clearInterval(timer);
                $('#subcontainer h2').remove();
                $('#subcontainer').html("<h2>Done!!</h2>");
                $('#subcontainer').append("<h3>Correct Answer: "+this.correct);
                $('#subcontainer').append("<h3>Incorrect Answer: "+this.incorrect);
                $('#subcontainer').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
            },
        }
    
