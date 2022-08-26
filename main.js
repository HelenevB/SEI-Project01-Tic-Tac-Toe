


let gameboard = document.querySelector(".game-grid");

let currentPlayer = ""
let playerCounter = 0



$(document).ready(function(){
    $(".playerScore").hide();
     $("#restart").hide();
     $('.game-grid').hide();
     $('#startgame').on('click',loadGame);
    //  fetchBoard()
     $('.box').on('click', playGame)
     $('#restart').on('click',restartGame)  
});


for (let i = 0; i < 9; i++){
let square =document.createElement('div')
square.setAttribute("class", "box")
square.setAttribute("id", "box" + i)
gameboard.appendChild(square)

}


function fetchBoard (){
    let board= []
   $('.game-grid div').each(function(index){
   board[index]=$(this).text();
      })
      console.log(board)
    return board 

     }
       


//  once start button is pressed grid appears and removeClass is added to ensure grid is clear at the start 
function loadGame (){
$('#startgame').click(function(){
    $('.box').removeClass('X')
    $('.box').removeClass('O')
    $('h1').addClass('h1-after')
    $('.game-grid').show();
    $(this).hide()
    $('.message').show().text("X To Start").addClass('Xturn')
    $('#restart').hide()
});
}

// function of playGame =  player count is added for each move if the playercount is even the class for O is removed and X added. i.e X turn and player count goes up
//  after go the computer will check for a win 

function  playGame (e){

    if(playerCounter % 2 === 0) {
    currentPlayer = "X"
    $(e.target).removeClass('O');
     $(e.target).addClass('X')
     $(e.target).text('X')
     $(e.target).off('click');
    $('.message').text(" O Turn").removeClass('Xturn').addClass('Oturn')
     playerCounter +=1
 }

else {
    currentPlayer = "O"
    $(e.target).removeClass('X');
    $(e.target).addClass('O').off('click');
    $(e.target).text('O')
    $('.message').text(`X Turn`).removeClass('Oturn').addClass('Xturn')
     playerCounter +=1
  }
  console.log(playerCounter)
 
  if (checkWin(fetchBoard()) != 0) {
    $('.box').off('click')
    $('.message').text(`${currentPlayer} Won`)
    setTimeout(function(){refreshBoard()},3000)
     return; 
    }  
    if (playerCounter === 9 ){
        $('.message').text("It's A Tie !")
        setTimeout(function(){refreshBoard()},3000)
     }
 
     return playerCounter

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


function refreshBoard () {
   playerCounter = 0
    $('.box').removeClass('X').removeClass('O')
    $('.box').text('')
    $('.message').text(` X To Start`).removeClass('X').removeClass('Oturn').addClass('Xturn')
    $('#restart').show()
     $('.box').on('click', playGame )
 }

function restartGame(){
    $('#restart').click(function(){
        $(this).hide(); 
        $('.game-grid').hide();
        $('.box').text('')
        $('.message').hide().removeClass('X').removeClass('Oturn').addClass('Xturn')
        $('h1').removeClass('h1-after').addClass('h1')
        $('#startgame').show()
    })
    }


