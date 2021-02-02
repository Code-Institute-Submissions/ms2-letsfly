// set card data array:

const cardsArray = [{
    name: 'aircanada',
    img: 'assets/img/ACA.png'
},
{
    name: 'hawaii',
    img: 'assets/img/HAL.png'
},
{
    name: 'turkish',
    img: 'assets/img/THY.png'
},
{
    name: 'iceland',
    img: 'assets/img/ICE.png'
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
    name: 'air lingus',
    img: 'assets/img/EIN.png'
},
{
    name: 'Swiss',
    img: 'assets/img/SWR.png'
},
];

// Set game variables:

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1000;
let gameStart = false;
let gameOver = false;
let timerId;
let firstClick = 0;

// Cards/grid created and displayed by manipulating the DOM (code from Tania Rascia Tutorial: https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/):
let game = document.getElementById('game');
let grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

// Shuffle cards and display 2 sets of 8 cards:
var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

// Function to create card div for each object and display images from Tania Rascia Tutorial: https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/)
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
  
  // Append the div to the grid section:
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

//Function for matching cards- loops through all selected cards when called, then match class added
const match = () => {
  let selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.add('match')
  });
};

//function to count how many moves made- code from  https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-3-moves

let flips = 0;
let counter = document.querySelector('.flips');
function moveCounter() {
    flips++;
    counter.innerHTML = flips + ' flips'; 
};

// code from Tania Rascia's tutorial- to allow multiple guesses/reset guess count after 2
let resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;


  let selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

let matchCards = 0;

// Adding event listener to the grid: 
grid.addEventListener('click', function (event) {

// Event target being the clicked item:
  let clicked = event.target;

  //Below code from Tania Rascia tutorial https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ 
  if (clicked.nodeName === 'SECTION' || // Only selected divs inside the grid to be selected, not the grid section itself
      clicked === previousTarget || 
      clicked.parentNode.classList.contains('selected') || 
      clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    moveCounter(); //to count the number of moves at first click
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name; //assign the first guess
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess); // assign the second guess
      clicked.parentNode.classList.add('selected');
    }

    
    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) { // if both guesses match
        matchCards++; //apply the match function
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});

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

    //Function code from Stack Overflow- to set timer:
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
                 $('#mywinModal').modal('toggle');
            }else if(timerId && timer <= 0){
                loseGame(display, clearTimeout, timerId);
            }
        }, 1000);
    };

    // Lose game function code:
    const loseGame = (display, clearTimeout, timerId) => {
        display.textContent = "00:00";

        setTimeout(() => {
            $('#myModal').modal('toggle'); 

            clearTimeout(timerId);
        }, 2000)
    };



