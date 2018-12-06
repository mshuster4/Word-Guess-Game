
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

var hiddenWord = [];


function gamePlay() {

    var currentWord = wineList[Math.floor(Math.random() * wineList.length)];
    
    document.onkeydown = function() {

        console.log(currentWord);

        for (var i = 0; i < currentWord.length; i++) {

            if (currentWord.charAt(i) == ' ') {
            
                hiddenWord[i] = ' ';

            }

            else {

                hiddenWord[i] = '_';

            }

        }

        document.getElementById("word-to-guess").innerHTML = hiddenWord;
    }

        document.onkeyup = function(event)  {

            var userGuess = event.key;

            console.log(userGuess);

            var guessesArray = [];

                for (var j = 0; j < currentWord.length; j++) {

                    if(userGuess == currentWord.charAt(j)) {

                        hiddenWord[j] = userGuess;

                    }

                    console.log(hiddenWord);

                }
                    

        }
            


};

gamePlay()






        
