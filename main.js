const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const score = document.getElementById('score');
const scoreA = document.getElementById('scoreA');
const body = document.body;
let init = false;
let x = 100;
let y = 100;

let b = 100;

let f = true;
let d = true;

let speedx = x;
let speedy = y;

const rectangle = (a) => {
	if (down) { b < canvas.height - 90 ? b = b+5 : b = b}
	if (up) { b > 0 ? b = b-5 : b = b}
	ctx.fillStyle = 'rgb(255, 255, 255)';
	ctx.fillRect(a, b, 15, 90);
}
const results = (a) => {
	const element = document.createElement('div');
	if (a) element.innerText = "Player 1 WINs";
	if (!a) element.innerText = "Player 2 WINs";
	element.setAttribute('id', 'message');
	body.appendChild(element);
	init = true;
	scoreA.innerText = 0;
	score.innerText = 0;
	element.addEventListener('click', () => {
		body.removeChild(element); 
		init = false;
		ball()
	})
}
const limits = () => {
	if (f) speedX = x = x + 5;
	if (!f) speedX = x = x -5; 
	if (x > canvas.width - 15) { f = false; scoreA.innerText++}
    if (x < 10) {f = true; score.innerText++};
	

	if (d) speedy = y = y + 3;
	if (!d) speedy = y = y - 3;
	if (y < 10) d = true;
	if (y > canvas.height - 10) d = false;

	if (score.innerText === '5') results(0);
	if (scoreA.innerText === '5') results(1);
	
	if (x === 70 && ( y > b -10 && y < b + 110)) f = true;
	if (x === 525 && ( y > b -10 && y < b + 110)) f = false;
}
const middleLine = () => {
	ctx.fillStyle = 'rgb(255, 255, 255)';
	ctx.fillRect(298, 25, 5, 35);
	ctx.fillRect(298, 80, 5, 35);
	ctx.fillRect(298, 135, 5, 35);
	ctx.fillRect(298, 190, 5, 35);
	ctx.fillRect(298, 245, 5, 35);
}
const ball = () =>{
	ctx.clearRect(0 ,0 ,600 ,400 );

	ctx.beginPath();
	ctx.fillStyle = 'rgb(255, 255, 255)';
	limits();
	middleLine();

	ctx.arc(speedX, speedy , 10, 0, Math.PI*2, false);
	ctx.fill();
	rectangle(50);
	rectangle(535);
	if (!init) requestAnimationFrame(ball);
}


ball()