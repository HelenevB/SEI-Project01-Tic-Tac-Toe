
let gameboard =["box1", "box2","box3", "box4", "box5", "box6", "box7","box8","box9"]


// console.log(gameboard)
//  on loading the game  just the start button appears 

$(document).ready(function(){
    $('.game-grid').hide();
    $('#startgame').bind('click',loadGame);
});


//  once start button is pressed grid appears and removeClass is added to ensure grid is clear at the start 
function loadGame (){
$('#startgame').click(function(){
    $('.game-grid').show();
    $(this).hide(); 
    $('.box').removeClass('X')
    $('.box').removeClass('O')
})
}


 let playerCounter = 0

// function of playGame =  player count is added for each move if the playercount is even the class for O is removed and X added. i.e X turn and player count goes up
//  after go the computer will check for a win 

function switchTurns(e){
 if(playerCounter % 2 === 0) {
    console.log(e.target) 
    $(e.target).removeClass('o');
     $(e.target).addClass('X').off('click');
     playerCounter += 1 
 }
else {
    console.log(e.target)
    $(e.target).removeClass('X');
    $(e.target).addClass('O').off('click');
    playerCounter += 1;
  }
 
};





// need to check for result on each loop 
//  if board is not full and a win is not identified  keep playing 
//  if board is full and win not identified it a draw
//  if X get three in a row at any time in a win  -  message pops up to say " X won"game to restart 
//  if O get three in a row at any time in a win  -  message pop up to say " O WON" game to restart 
//  if draw  - message pop ip to say -  game to restart

function checkRow(a, b, c) {

    if(a === 'X' && b === 'X' && c === 'X'){  
      return 
       
    }
    
    else if  (a === 'O' && b === 'O' && c === 'O') {  
        return 

    } else {  
         

    }  
} 


function checkWin(gameboard) {
    return checkRow(gameboard[0], gameboard[1], gameboard[2])
        + checkRow(gameboard[3], gameboard[4], gameboard[5])
        + checkRow(gameboard[6], gameboard[7], gameboard[8])
        + checkRow(gameboard[0], gameboard[3], gameboard[6])
        + checkRow(gameboard[1], gameboard[4], gameboard[7])
        + checkRow(gameboard[2], gameboard[5], gameboard[8])
        + checkRow(gameboard[0], gameboard[4], gameboard[8])
        + checkRow(gameboard[2], gameboard[4], gameboard[6])
}

$('.box').on('click', switchTurns)