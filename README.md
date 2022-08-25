## Project-One-Tic-Tac-Toe
-------
### Technologies used 
---
* Html
* CSS
* javaScript
* jQuery 

### Links for Wireframe & User's Stories 
---

[WIREFRAME-TIC TAC TOE.pdf](https://git.generalassemb.ly/hvb/Project-One-Tic-Tac-Toe/files/4088/WIREFRAME-TIC.TAC.TOE.pdf)


#### [User's stories](https://trello.com/b/hySlpAfs/project-1)
---

### Background  to the project 

#### Concept of Tic Tac Toe & Ideas for the Game 
##### Tic Tac Toe is a Two Player Game whereby if you get three X's or O's in  row you win . I wanted to create a Two Player version of the game that allowed for personalizations (name input and character selection) and allow for accumalative score count between two players over multiple games (or a complete restart.  Although some of these functions are now considered on-going enhancements. 
---
#### Development Process 

I considered  4 key elements for the game :

* Start Function & Game setup 
* playing the Game
* Determining the Winner 
* Restarting or refreshing the page 

#### Start Function & Game Setup

* Created the landing page and transition to game "page" using Jquery methods hide & Show.
* Built the board in JS using a for loop which i contained in the main game-grid.
* Created a loadgame function which is triggered by clicking on start game. 
* board is created 

#### playing the Game 
* essentially created one function named playGame () to run the grid. 
* Within in this function held the logic for switching turns and calls the functions to determine if it a win or a lost 
* the start of play is triggered from click on any of the board boxes and X will always be the first player.
* Switching Turns is determine by the playercount : after every click the computer adds to counnt and work with an if else statement ot determine the player. If it is evens it X if it is odd it O. 
* once the player is determine i've used jQuery methodas to addClass and text to requried Div so that the right characters show in the box. Once the required box is clicked the off method is used to disable that box from being over clicked again

#### Determining the Winner 
* First i needed to create an empty array , that can log the content of each div i.e X or O. Created a function called 'fetchBoard' to do this.  
* i created a function called CheckWin which held all the winning combinations and called within this function, checkrow. checkrow would loop through and see if all three index where X or O and return a value back , if not null will be return and the game proceed. 
* The checkWin function is called at the end of the play game function . in an if else statement.  if the paremeters are met that the game will be stopped and the winner is alerted 
* a tie was determined using the playerCount.  A tie is only considered if all 9 boxes are full and there is no winner. an if statement follows the check-win conditional to state if there have 9 clicks and no winning combination it will be a draw. 

#### Refresh the board & Restarting the Game 
* as the scorecard is an enhancement development, these two function currently seem quite repatative. However the purpose was  that refresh would only clear the board area  you of X's & O's and further games can be played between players allowing scores to be counted 
* The purposes of the restart would have been to take players back to the start button and reactivate the game in full again (this would have had more effect if Name and character seletion function had been added) 

----

### Future Considerations for fixes and development 
----
#### Functionality 

*  Player Name and Character Selection 
*  Player who wins to start the next round 
*  scoreCount 
*  restart button to disappear when a new games starts after the refresh and only appear again at the end. 
*  Option to play against the computer 

### CSS Design 

* hover over entered cells 
* borders of winning combination to change color when a win is annouced 
* winners messages to display in the same color as the characters 











 
