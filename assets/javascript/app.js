// User clicks "Start" to start the game
$('#start').on('click', function(){
  game.start();
  
})

// After user clicks "Start" display the list (array) of questions and choice list
var questions = [{
  question: 'Which is the only American Football team to go a whole season undefeated, including the Super Bowl?',
  answers: [' The 1985 Chicago Bears',  ' The 2007 New England Patriots', ' The 1972 Miami Dolphins'],
  correctAnswer: 'The 1972 Miami Dolphins',
  name: 'Football',
  
},{
  question: "How many NBA championships did Michael Jordan win with the Chicago Bulls?",
  answers: [" Five", " Six", " Seven"],
  correctAnswer: "Six",
  name: 'Basketball',
},{
  question: "Which is the only team to play in every soccer World Cup tournament?",
  answers: [" Brazil", " Spain", " Germany"],
  correctAnswer: "Brazil",
  name: 'Soccer',
}, {
  question: "Who has won more tennis grand slam titles?",
  answers: [" Rafael Nadal", " Serena Williams", " Roger Federer"],
  correctAnswer: "Serena Williams",
  name: 'Tennis',
}, {
  question: "Which boxer inflicted Muhammad Ali's first defeat in professional boxing?",
  answers: [" Larry Holmes", " Joe Frazier", " Leon Spinks"],
  correctAnswer: "Joe Frazier",
  name: 'Boxing',
}, {
  question: "Which golf tournament did Tiger Woods win by 12 strokes in 1997 to record his first major championship win?",
  answers: [" U.S. Open", " The PGA", " The Masters"],
  correctAnswer: "The Masters",
  name: 'Golf',
}
];

//
  var correct = 0;
  var incorrect = 0;
  var counter = 30;
  var unanswered = 0;


// Set a counter and display the results, or a message if time runs out.
  var game = {
  
  countdown: function(){  // start countdown when user clicks "Start"
      counter--;

      $('#counter').html(counter)
      if(counter ==0){
        //  console.log("Time ran out, sorry!"); // dsplay to the msg when game time is up
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
      $('#intro').remove();
      // function for question loop
      for(var i=0; i<questions.length; i++){
          $('#subcontainer').append('<h3>'+questions[i].question+'<h3>');
          for(var j=0;j<questions[i].answers.length;j++){
              //append each and every question with a name equal to the number of the question along with it's value.
              $('#subcontainer').append("<input type='radio' name="+questions[i].name+" value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]+"")
          }
      }
      // Provide user with a "Done" button incase user finish early
       $('#subcontainer').append('<br><br><button id="done">Done</button>')
  },


  //var answers = {question:[0]="c", question:[1]="z", question:[2]="z" ,question:[3]="z" ,question:[4]="z", question:[5]="z"};

      // check whether answers are correct or incorrect
      done: function(){
        for(var i=0; i<questions.length; i++){
        var userChoice = $('input[type="radio"][name='+questions[i].name+']:checked').val();
        
        if(userChoice === questions[i].correctAnswer){
          correct++;
      } else if (!userChoice){
          unanswered++
      }
        else{
            incorrect++;
      }
    };

          this.result();
          },

          // show the results
          result: function(){
            var calculation = questions.length-(correct+incorrect);
              clearInterval(timer);
              $('#subcontainer h2').remove();
              $('#subcontainer').html("<h2>Done!!</h2>");
              $('#subcontainer').append("<h3>Correct Answer: "+correct);
              $('#subcontainer').append("<h3>Incorrect Answer: "+incorrect);
              $('#subcontainer').append("<h3>Unanswered: "+calculation+"</h3>");
              
          },
      }
      // Provide user a button to stop the game when done, 
      $(document).ready(function(){

        $('#subcontainer').on('click', '#done', function(){
          game.done();
        })
        });
