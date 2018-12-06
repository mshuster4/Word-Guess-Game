
//Display word with "_ _ _ _" equal to the amount of letters in each word
//If user guesses letter correctly, their letter is display
//If user guess incorrectly, letter is displayed  under "letters already guessed"
//User can't guess same letter twice! 
//Guesses left: --
//Once Guesses == 0 or user guesses all word letters 
//Wins ++ or Losses ++
//The next word is displayed 

var wins = 0;
var losses = 0;
var guessesLeft = 10; 

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wineList = 
['chardonnay',
'riesling',
'pinot grigio',
'sauvignon blanc',
'gewuertztraminer',
'syrah',
'cabernet sauvignon',
'zinfandel', 
'pinot noir',
'merlot',
];

document.onkeyup = function(event) {

    var currentWord = wineList[Math.floor(Math.random() * wineList.length)];

    console.log(currentWord); 

    var hiddenWord = [];

    for (var i = 0; i < currentWord.length; i++) {

        if (currentWord.charAt(i) == ' ') {
            
            hiddenWord[i] = ' '
        }

        else {

            hiddenWord[i] = "_";

        }

    }

    console.log(hiddenWord); 
}





        
