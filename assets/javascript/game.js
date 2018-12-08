
var guessesLeft = 9;   

var wineList = 
['chardonnay',
'riesling',
'gewuertztraminer',
'syrah',
'zinfandel',
'merlot',
];

var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                't', 'u', 'v', 'w', 'x', 'y', 'z'];
                

var alreadyGuessed = [];
var hiddenWord = [];
var currentWord; 
var letter; 

var alreadyGuessedText = document.getElementById('already-guessed');
var currentWordText = document.getElementById('hidden-word');
var guessesLeftCount = document.getElementById('guesses-left'); 


function gameStart() {
    
    currentWord = wineList[Math.floor(Math.random() * wineList.length)];
    console.log(currentWord);

    for (var i = 0; i < currentWord.length; i++) {
            
        hiddenWord.push('_');

    }
    
    currentWordText.innerHTML = hiddenWord.join(" ");

}

function gamePlay(letter) {

    if (choices.indexOf(letter) == -1) {

        alert("Please pick a letter!");

    }


    else if (currentWord.indexOf(letter) == -1) {

        

        guessesLeft--;
        guessesLeftCount.innerHTML = guessesLeft; 
        console.log(guessesLeft)
        alreadyGuessed.push(letter);
        alreadyGuessedText.innerHTML = alreadyGuessed.join(" ");
        console.log(alreadyGuessed);


        winOrLoss();

    }

    else {

        for (var i = 0; i < currentWord.length; i++)

            if (currentWord[i] == letter) {

                hiddenWord[i] = currentWord[i]; 

            }
        
        console.log(hiddenWord); 
        currentWordText.innerHTML = hiddenWord.join(" ");

        winOrLoss(); 

    }

}

function winOrLoss() {

    if (hiddenWord.indexOf('_') == -1) { 

        alert("Winner Winner!");
        resetGame();

    }

    else if (guessesLeft == 0) {
        
        alert("You Lost!")
        resetGame();

    }

}

function resetGame() {

    guessesLeft = 9; 
    guessesLeftCount.innerHTML = guessesLeft; 
    alreadyGuessed = [];
    hiddenWord = [];
    currentWord; 
    currentWordText.innerHTML = " ";
    alreadyGuessedText.innerHTML = " "; 

    gameStart();

}

document.onkeyup = function (event) {

    letter = event.key;
    console.log(letter);   
    gamePlay(letter);

}

gameStart(); 


