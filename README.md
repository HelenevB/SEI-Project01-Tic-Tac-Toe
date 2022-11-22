## **Project 1: Tic Tac Toe** 

### **Contents** 
 
* [Overview](#overview)
* [The Brief & Timeframe](#the-brief--timeframe)
* [Technologies used](#technologies-used)
* [The Planning & Development Process](#the-planning--development-process)
* [Wins & Challenges](#wins--challenges)
* [Known Bugs](#known-bugs)
* [Future Enhancements](#future-enhancements) 
* [Key Learnings](#key-learnings)

<br>

### **Overview**
---

<img src="images/Tic-Tac-Toe.jpg">

Tic Tac Toe is a game whereby if you get three X's or O’s in a row, you win. I set out to create a basic online two-player version of the game that consolidated my learning from the first two weeks of the immersive software engineering course.

The source code is accessible on  GitHub [here](https://github.com/HelenevB/SEI-Project01-Tic-Tac-Toe).

You will find the deployed application [here](https://pages.git.generalassemb.ly/hvb/Project-One-Tic-Tac-Toe/). 

<br>

### **The Brief & Timeframe**
---

* Build a dynamic game that allows two players to compete from the same computer
* The game must be able to determine a winner
* The game must be fully responsive 
* This was a solo project 
* Timeframe: 7 days 

<br>

### **Technologies used** 
---

* Html5
* CSS3
* JavaScript
* jQuery
* Git 
* GitHub

<br>

### **The Planning & Development Process**
---

 I spent the initial stages of the process sketching out the design and writing out the logic for the game.

<img src="images/Wireframe1.png" width=40% height=40%%>  <img src="images/wireframe2.png"  width=40% height=40%> 


To help manage the build, I broke down the development process into four sections;


* Start function & Game setup
* Playing the game
* Determining the winner
* Restarting the game 


As part of the game set-up, I needed to create the grid for Tic-Tac-Toe. I initially did this with HTML and CSS, using a grid template. However, on review decided to minimise my use of HTML and build the grid in JavaScript using a for-loop. 


<img src="images/gridcode.png" width="100%"> 
<br>

Once I had the board created, my first step was to get the X and O’s to appear on-click and establish the switch of turns between X & O:

* I created a function named “switchTurns”(later renamed “playGame”)
* I stated a global variable called “playerCounter” and set it to 0 

I set a condition within “switchTurns” that after each “click”, the “playerCounter” would go up by one.  If the count were on an even number, it would be X’s go, and if it were odd, it would be O’s go.  Subject to whose go it was, the relevant class attribute would be assigned to the box ‘on-click”, resulting in the appropriate letter rendering in the space.

 Finally, to ensure the box could not be overwritten, I disabled the ability for the box to be clicked on again; I used JQuery ”off()” method to remove the event handler for the targeted box.

<img src="images/switchTurn1.png" width="50%" > 

At this stage, I was making progress, I had a grid, and on clicking each box, an X and O would appear alternatively. Now it was time to apply some logic to the game; I wrote this out in pseudocode first to help me break down my approach:

<img src="images/pseudo.png" width="100%" > 

To determine the state of play, I needed to create functions that check the win. I had three functions in all: 

1. fetchBoard(), which took the values X & O from the board and placed them in an array at the given index. 


<img src="images/fetchboard.png" width="100%" > 

2. checkRow(), this function takes three parameters as an argument that is checked against the conditions stated to establish if there is a winning combination and returns a value based on whether it was X, O or null.


<img src="images/checkRow.png" width="100%" > 

3. checkWin(), this function would take one parameter as an argument which I named “gameboard”. And then, within the function, checkRow() is called back eight times, mapping over all possible winning combinations from the gameboard, to see if the checkrow conditions are met.

<img src="images/checkwin.png" width="100%" > 

With all the puzzle pieces laid out, I needed to fit them together to complete the game logic; my inexperience showed as I struggled to visualise how it would look. From my pseudocode, I knew I needed to check for the win at the end of each turn, so I knew I’d have to call back the checkWin() function within switchTurns(). Still, I wasn’t sure how, so at this stage, I decided to consult with our lecturer as I find talking through my process helps me navigate towards the answer I am looking for:

After consultation, I established that I needed to add two if statements at the end of my switchTurns() function. The first if statement checks for the win. The If statement takes checkWin() (with fetchBoard() as a parameter) as a conditional argument, stating if it does not return a value of  0, then a player has won (this would either be -1= O. or  1=X).

To determine which player won, I stated a global variable called “currentPlayer”. At the start of each go, the currentPlayer value would either be set to X or O. If a win was determined, I instructed the computer to display the message that the “currentPlayer” had won. The game would then reset. 

If there was no winner, I needed the second if statement to determine if there was a draw.  A draw would only be possible if all boxes were full, so I used the “playerCounter” as the conditional argument, stating if it was equal to 9, end the game and announce a tie.

If neither of the if statement conditions were met, the new “playerCounter” value would be returned, and the next player would be allowed to make their move.

 The completed code for the game-play logic now looks as below; this is the stage where it made sense to me to change the function name from “switchTurns” to “playGame.”

<img src="images/playGame.png" width="100%" > 

The game was now playable; however, as I had spent much of the week on the game functionality, I had minimal time to add all the planned features and explore styling. With the time I had, I decided to keep it simple with a basic colour theme to add a tiny bit of personality (i do love a block colour)!
<br>

### **Wins & Challenges**
---
The biggest win for me was meeting the required MVP. Two weeks prior, I had never developed, let alone deployed, an application, so to see the visual of the skills I had learnt was very rewarding. 

The biggest challenge was the JavaScript logic; many times throughout the build process, I felt like I had the puzzle pieces but struggled to make them all fit. Whilst I was keen to work through the task independently, I knew when to ask for help to talk through the hurdles, allowing me to enhance my understanding and move through the task to meet the MVP. 
  
<br>

### Known Bugs 
---
* The winner's message is displayed in the opposite players' colours
* The restart button is redundant 

<br>

### **Future Enhancements** 
---
* Player name and character selection  
* The player who wins starts the next round
* Score count to be included 
* Build a working restart functionality, i.e. score count goes back to zero, and the game fully restarts 
* Enhance styling, i.e. hover effect over each box
<br>

### **Key Learnings**
---
My key takeaway from this was understanding how important the planning process was and mapping out the crucial functions, as, throughout the week, I was chopping and changing each function. If I'd been more thorough with my planning process, staying on task would have been easier, as I would have been more confident in my direction.




