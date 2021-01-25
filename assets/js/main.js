// card data

const cardsArray = [{
    name: 'aircanada',
    img: 'assets/img/ACA.png'
},
{
    name: 'hawaii',
    img: 'assets/img/HAL.png'
},
{
    name: 'klm',
    img: 'assets/img/KLM.png'
},
{
    name: 'FIN',
    img: 'assets/img/FIN2.png'
},
{
    name: 'emirates',
    img: 'assets/img/UAE.png'
},
{
    name: 'jal',
    img: 'assets/img/JAL.png'
},
{
    name: 'Ryanair',
    img: 'assets/img/RYR.png'
},
{
    name: 'Scandinavian',
    img: 'assets/img/SAS.png'
},
];

// Set game variables
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let gameStart = false;
let gameOver = false;
let timerId;
let firstClick = 0;



// Set Audio variables

/*
const successSound = new Audio('assets/audio/airplane+jetstart2.mp3'); // correct guess sound
const fail = new Audio('assets/audio/airplane+breakdown+1.mp3'); // wrong guess sound
*/

let game = document.getElementById('game');
let grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

// Shuffle cards and display 2 sets of cards
var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

gameGrid.forEach(function (item) {
  var name = item.name,
      img = item.img;


  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

//Function for matching cards- loops through all selected cards when called, then match class added
const match = () => {
  var selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.add('match')
  });
};

var resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

let matchCards = 0;

grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || 
      clicked === previousTarget || 
      clicked.parentNode.classList.contains('selected') || 
      clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        matchCards++;
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});


    //Function code from Stack Overflow
    function gameTimer(duration, display) {
        let timer = duration,
            minutes, seconds;

        timerId = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = minutes + ':' + seconds;

            if (timer-- <= 0) {
               // loseGame(timer);
                display.textContent = "00:00";
                timer = duration;
                clearTimeout(timerId);
            }
            // stop timer if game is won
            if (matchCards === 8) {
                clearTimeout(timerId);
                alert("Awesome You won!!");
            }else if(timerId && timer <= 0){
                looseGame(display, clearTimeout, timerId);
            }
        }, 1000);
    }

    const looseGame = (display, clearTimeout, timerId) =>{
        display.textContent = "00:00";

        setTimeout(()=>{
           // alert("You lost the game!");
            $('#myModal').modal('toggle'); 

            clearTimeout(timerId);
        }, 2000)
    }

    
    //start the countdown when first card is clicked 
    let gameBoard = document.querySelector('.board');
    gameBoard.onclick = (function() {
        firstClick++;
        //remove onclick after first card is clicked
        if (parseInt(firstClick) < 2) {
            gameBoard.removeAttribute('onclick');
            timeRemaining = 60,
                display = document.querySelector('#timer');
            gameTimer(timeRemaining, display);
        }
    });

// to do: 
// stop the timer when the player matches all cards
// add points for match paired plus 1 point for each second remaining
// out of time modal and a well done modal for finishing on time
// 