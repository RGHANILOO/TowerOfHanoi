# TowerOfHanoi
a logic game

New Branch to refactor the functions as classes for easier maintainibility and update 
i will be specifieing the class/ web componeents 

having approached the bulding structure of the game in functional programming, i now recognise an alternative approach in solving the various problems via OOP(Object Oriented Programming) as it would make the pparoach much easier and more maintainable 

1. Game Class
    Responsibility :
    This Class will orchestrate the game flow and managing of the overall state of the game

    Methods:

    StartGame(numberOFDisks): 
        initialise the game state with specified number of disks

    moveDisk(fromTowerX,toTowerY):
        Moves disk fom tower X to tower Y
    
    checkWinCon(): 
        Checks the game if it has reached the win condition
    
    getMoveCount():
        captures the number of moves made so far
    
    startTimer()
    stopTimer()
    resetTimer()
        reeprsatitive of Start, Stop and resetting the timer functio



2. Tower Class

    Responsibility:
        reperesentig an individual disk in the game

    Methods:

    render()
        renders the disk to display

3. GameUI Class:

    responsibility:
        Handles the user interfaceinteractions and updating the display
    
    Methods:

    initUI()
        sets up UI elements
    
    updateUI ()
        Updates the ui based on game state
    
    handleUSerInput()
        handles user input elements

4. GameState Class:

    responsibility :
        Manages the game state, including diskpositions on the tower
    
    Methods:

    initState()
        setup iniital game state
    
    moveDisk(fromx,toY):
        updates the state when a disk is moved
    
    checkWinCon()
        checks if the win condition is met
    
    isGameOver()
        determines if game is over
    
   
5. Timer Class()
    Respnsibilioty:
    managing the game timers

    Methods:

        startTimer()
        stopTimer()
        getElapsedTime() : retrieves the total elapsed time since the timer started/game start

6. Tower Class:
    Reposnibity:
        managing the disks placed on the tower
    
    Methods:
        addDisk(disk):
        
        removedDisk():
            Removes disk from the tower
        
        getTopDisk()
            retirieves the top disk on the tower
        
        reder()
            renders the tower and disks to display





