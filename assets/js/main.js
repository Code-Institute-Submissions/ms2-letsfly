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
];

// Set game variables
var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;
let gameStart = false;
let gameOver = false;
var points = 0;
var finalPoint = 0;
var win = 0;

// Set Audio variables

/*
const successSound = new Audio('assets/audio/airplane+jetstart2.mp3'); // correct guess sound
const fail = new Audio('assets/audio/airplane+breakdown+1.mp3'); // wrong guess sound
*/

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


// Adding a timer to the game (from fellow student Amy Keedwell https://github.com/AmyKeedwell/2-Milestone-Project-Memory-Bay/blob/master/assets/js/scripts.js)

$('.start').click(function() {
    gameStart = true;
    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function(){
        seconds--;
        (seconds == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s";
        document.getElementById("countdown").textContent = seconds;
        if (seconds === 0){
            $('#myModal').modal();
            clearInterval(countdown);
        };
        if (gameOver === true){
            $('#winModal').modal();
            clearInterval(countdown);
        };
        if (seconds <= 0) clearInterval(countdown);
    },1000);
});

