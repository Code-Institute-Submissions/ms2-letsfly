// card data

const cardsArray = [

{
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
{
    name: 'swr',
    img: 'assets/img/SWR.png'
},
{
    name: 'thai',
    img: 'assets/img/THA.png'
},
{
    name: 'sli',
    img: 'assets/img/SLI.png'
},
{
    name: 'turk',
    img: 'assets/img/THY.png'
},
];

// Set game variables
var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

var points = 0;
var finalPoint = 0;
var win = 0;

// Set Audio variables

const successSound = new Audio('assets/audio/airplane+jetstart2.mp3'); // correct guess sound
const fail = new Audio('assets/audio/airplane+breakdown+1.mp3'); // wrong guess sound

var game = document.getElementById('game');
var grid = document.createElement('section');
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

grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
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
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});

//Adding a timer to the game- snippet taken from https://stackoverflow.com/questions/42007631/adding-time-counter-to-my-memory-game-script
(function () {
  var timeContainer = document.getElementById("timer-value");
  var startButton = document.getElementById("start-game");
  var timer = 0;
  var maxTime = 60;
  var timeout = null;
  function count () {
    timeout = setTimeout(function () {
      if (timer < maxTime) {
        timer++;
        timeContainer.innerText = timer;
        count();
      }
      else {
        alert("Time's up!");
        startButton.style.display = "inline-block";
      }
    }, 1000);
  }
  function endGame () {
    clearTimeout(timeout);
    startButton.style.display = "inline-block";
    alert("You completed the game in time!");
  }
  function startGame () {
    if (timeout) { clearTimeout(timeout); }
    timer = 0;
    timeContainer.innerText = timer;
    this.style.display = "none";
    count();
  }
  document.getElementById("start-game").addEventListener("click", startGame);
  document.getElementById("end-game").addEventListener("click", endGame);
})();


