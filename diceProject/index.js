console.log('Hello Console');

// Generate random number 1-6
let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;

// Ambil image sesuai dengan random number yang didapatkan
let randomDiceImg1 = `dice${randomNum1}.png`;
let randomDiceImg2 = `dice${randomNum2}.png`;

// Set path image
const randomImgSrc1 = `./images/${randomDiceImg1}`;
const randomImgSrc2 = `./images/${randomDiceImg2}`;

const img1 = document.querySelectorAll('img')[0];
const img2 = document.querySelectorAll('img')[1];

img1.setAttribute('src', randomImgSrc1);
img2.setAttribute('src', randomImgSrc2);

const winnerText = document.querySelectorAll('h1')[0];

if(randomNum1 > randomNum2) {
    winnerText.innerText = 'Player 1 Win!!'
} else if(randomNum1 === randomNum2){
    winnerText.innerText = 'Draw'
} else {
    winnerText.innerText = 'Player 2 Win!!'
}

