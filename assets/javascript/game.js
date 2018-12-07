
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
var currentWordText = document.getElementById('word-to-guess');
var guessesLeftCount = document.getElementById('guesses-left'); 


function gameStart() {

    currentWord = wineList[Math.floor(Math.random() * wineList.length)];

    console.log(currentWord);
    
    for (var i = 0; i < currentWord.length; i++) {
            
        hiddenWord.push('_');

    }
    
    console.log(hiddenWord); 

}

function gamePlay(letter) {

    if (currentWord.indexOf(letter) == -1) {

        guessesLeft--;

        console.log(guessesLeft)

        alreadyGuessed.push(letter);

        console.log(alreadyGuessed);

    }

    else {
        for (var i = 0; i < currentWord.length; i++)
        
            {

                hiddenWord.push(letter);

            }
        
        console.log(hiddenWord); 

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

    alreadyGuessed = [];

    hiddenword = [];

    gameStart();

}


document.onkeyup = function (event) {

    letter = event.key;

    console.log(letter); 

    gamePlay(letter);

}

gameStart(); 

