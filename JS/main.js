
   

let gameboard = document.querySelector(".game-grid");

let currentPlayer = ""
let playerOne = 0;
let playerTwo = 0;

for (let i = 0; i < 9; i++){
let square =document.createElement('div')
square.setAttribute("class", "box")
square.setAttribute("id", "box" + i)
gameboard.appendChild(square)

}

// console.log(gameboard)
//  on loading the game  just the start button appears 

$(document).ready(function(){
    $(".playerScore").hide();
    $("#restart").hide();
    $('.game-grid').hide();
     $('#startgame').bind('click',loadGame);
    fetchBoard ()
});


//  once start button is pressed grid appears and removeClass is added to ensure grid is clear at the start 
function loadGame (){
$('#startgame').click(function(){
    $('.box').removeClass('X')
    $('.box').removeClass('O')
    $('.game-grid').show();
    $(".playerScore").show()
    $(this).hide(); 
});
}


 let playerCounter = 0
 let panelCount = 0
// function of playGame =  player count is added for each move if the playercount is even the class for O is removed and X added. i.e X turn and player count goes up
//  after go the computer will check for a win 

function switchTurns(e){
 if(playerCounter % 2 === 0) {
    currentPlayer= "X"
    $(e.target).removeClass('O');
     $(e.target).addClass('X')
     $(e.target).text('X')
     $(e.target).off('click');
     $('.message').text("it is O's turn")
     playerCounter += 1 
 }

else {
    currentPlayer = "O"
    $(e.target).removeClass('X');
    $(e.target).addClass('O').off('click');
    $(e.target).text('O')
    $('.message').text(`it is X's turn`)
    playerCounter += 1;
  }

  if (checkWin(fetchBoard()) !==0) {
    $('.box').off('click')
    $('.message').text(`${currentPlayer} is the winner`)
    setTimeout(function(){refreshGame()},3000)
     return;
    }  
    else {

    }
        
    }
    

   

function fetchBoard (){
     let board= [];
    $('.game-grid div').each(function(index){
      board[index]=$(this).text();
     })
    console.log(panelCount)
    console.log(board)
    return board 
    }
    
    


   
function checkRow(a, b, c) {
  
    if (a === 'X' && b === 'X' && c === 'X') {
        return 1;
    } 
    else if (a === 'O' && b === 'O' && c === 'O') {
        return -1;
    } 
  else {return 0;
    }
    
    }



function checkWin(gameboard) {
    return checkRow(gameboard[0],gameboard[1], gameboard[2])
        + checkRow(gameboard[3], gameboard[4], gameboard[5])
        + checkRow(gameboard[6], gameboard[7], gameboard[8])
        + checkRow(gameboard[0], gameboard[3], gameboard[6])
        + checkRow(gameboard[1], gameboard[4], gameboard[7])
        + checkRow(gameboard[2], gameboard[5], gameboard[8])
        + checkRow(gameboard[0], gameboard[4], gameboard[8])
        + checkRow(gameboard[2], gameboard[4], gameboard[6])
}



function refreshGame () {
    $('.box').removeClass('X').removeClass('O')
    $('.box').text('')
    $('.box').bind('click')
    $('.message').text(`${currentPlayer} to start`)
    $('#restart').show()
    $('.box').on('click', switchTurns)
}



$('.box').on('click', switchTurns)