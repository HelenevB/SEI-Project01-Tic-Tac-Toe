// function game load 

$(document).ready(function(){
    $('form').hide();
    $('.scorecount').hide();
    $('.game-grid').hide();
    $('#startgame').bind('click',loadGame);
});


function loadGame (){
$('#startgame').click(function(){
    $(this).hide();
    $('form').show().css();  
    $('form').css();
})
}

 



// game start 

//  playgame

// computerchoice 



// result&restart


// got the gameboard elements and turned them into an array 


var gameboard =Object.keys($( '.box')).map(function(key){
    return  $($( '.box'))[key]
})

console.log(gameboard)


// comparechoice


function checkRow(a , b, c) {

    if(a === 'X' && b === 'X' && c === 'X'){  

        return +1 
    }
    
    else if  (a === 'O' && b === 'O' && c === 'O') {  
        return -1;  

    } else {  
        return 0;  

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
        + checkRow(gameboard[2], gameboard[4], gameboard[6]);
}

