$(document).ready(function() {
  $("#ticTacLines, #yourTurn, #compTurn").hide();
  var playerChoice;
  var computerChoice;
  
  //Stores turn choice that will later determine winner
  var turns = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  
  //Keeps track of whose turn it is
  var didWin = false;
  
  
  //Keeps track of computer's turn
  var count = 0;
 
  
  //When player chooses X, store choices of both player and computer
  $("#x").click(function() {
    playerChoice = "X";
    computerChoice = "O";
    
    $("#choose, #x, #o").hide();
    $("#ticTacLines, #yourTurn").show();
  });
  
  
  //When player chooses O, store choices of both player and computer
  $("#o").click(function() {
    playerChoice = "O";
    computerChoice = "X";
    
    $("#choose, #x, #o").hide();
    $("#ticTacLines, #yourTurn").show();
  });
 
  /*computer's turn to plot X or O based on random move*/
  function computerTurn() {
    var computersMove;
    $("#yourTurn").hide();
    $("#compTurn").show();
    var taken = false;
    setTimeout(function timer() {
    while(taken === false && count !== 5) {
      //Generate computer's random turn
      computersMove = (Math.random() * 10).toFixed();
      var move = $("#" + computersMove).text();
      if (move === " ") {
        $("#"+computersMove).text(computerChoice).css("color","#C53554");
        taken = true;
        turns[computersMove] = computerChoice;
        setTimeout(function timer() {
          $("#compTurn").hide();
          $("#yourTurn").show();
          lose(turns, computerChoice);
        }, 750)
      } 
    }
    
    }, 1000)
   
  }
  
  /*Resets game after win, loss, or draw*/
  function reset() {
    turns = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    count = 0;
    $(".btn").text(" ");
    $("#win").html(" ");
    $("#yourTurn").show();
    didWin = false;
  }
  
          
  //Storing value of each square cell into turn array
  function playerTurn(playerChoice, id) {
          count++;
          turns[id] = playerChoice;
        
          win(turns, playerChoice);
          if (didWin === false) {
            computerTurn(turns);
            win(turns, computerChoice);
        }
    }
  
  /*All possible winning combinations for player*/
  function win(turns, currentTurn) {
    if (turns[0] === currentTurn && turns[1] === currentTurn && turns[2] === currentTurn) {
      winDisplay();
      
    } else if (turns[3] === currentTurn && turns[4] === currentTurn && turns[5] === currentTurn) {
      winDisplay();
      
    } else if (turns[6] === currentTurn && turns[7] === currentTurn && turns[8] === currentTurn) {
      winDisplay();
      
    } else if (turns[0] === currentTurn && turns[3] === currentTurn && turns[6] === currentTurn) {
      winDisplay();
      
    } else if (turns[1] === currentTurn && turns[4] === currentTurn && turns[7] === currentTurn) {
     winDisplay();
      
    } else if (turns[2] === currentTurn && turns[5] === currentTurn && turns[8] === currentTurn) {
      winDisplay();
      
    } else if (turns[0] === currentTurn && turns[4] === currentTurn && turns[8] === currentTurn) {
      winDisplay();
      
    } else if (turns[2] === currentTurn && turns[4] === currentTurn && turns[6] === currentTurn) {
      winDisplay();
      
    } else if (turns.indexOf(" ") === -1) {
        drawDisplay();
      
    } else {
      didWin = false;
    }
  }
  
  /*If computer has winning combo, then player loses and display is shown*/
   function lose(turns, currentTurn) {
    if (turns[0] === currentTurn && turns[1] === currentTurn && turns[2] === currentTurn) {
      loseDisplay();
      
    } else if (turns[3] === currentTurn && turns[4] === currentTurn && turns[5] === currentTurn) {
      loseDisplay();
      
    } else if (turns[6] === currentTurn && turns[7] === currentTurn && turns[8] === currentTurn) {
      loseDisplay();
      
    } else if (turns[0] === currentTurn && turns[3] === currentTurn && turns[6] === currentTurn) {
      loseDisplay();
      
    } else if (turns[1] === currentTurn && turns[4] === currentTurn && turns[7] === currentTurn) {
     loseDisplay();
      
    } else if (turns[2] === currentTurn && turns[5] === currentTurn && turns[8] === currentTurn) {
      loseDisplay();
      
    } else if (turns[0] === currentTurn && turns[4] === currentTurn && turns[8] === currentTurn) {
      loseDisplay();
      
    } else if (turns[2] === currentTurn && turns[4] === currentTurn && turns[6] === currentTurn) {
      loseDisplay();
      
    } else {
      didWin = true;
    }
  }
  
  /*Tells player that they won*/
  function winDisplay() {
      $("#yourTurn, #compTurn").hide();
      $("#win").html("Victorious! You Won!");
      didWin = true;
      
      setTimeout (function timer() {
        reset();
      }, 3000)
  }
  
  /*Tells player that they lost*/
  function loseDisplay() {
      $("#yourTurn, #compTurn").hide();
      $("#win").html("Oh no! Sorry...the Computer Won This Time. Try Again!");
      didWin = false;
      
      setTimeout (function timer() {
        reset();
      }, 3000)
  
 }
  
  /*Tells player that the game is a draw*/
  function drawDisplay() {
      $("#yourTurn, #compTurn").hide();
      $("#win").html("It's a Draw this time. Try Again!");
      didWin = false;
      
      setTimeout (function timer() {
        reset();
      }, 3000)
  }
  
  
   //When player clicks on square to play, plot either X or O
   $(".btn").click(function() {
       if ($(this).text() === " ") {
         $(this).append(playerChoice).css("color","#3552C5");
         var spot = $(this).attr("id");
         playerTurn(playerChoice, spot);
       } 
    });
  
});