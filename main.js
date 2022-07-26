const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const score = document.getElementById('score');

let x = 100;
let y = 100;

let b = 100;

let f = true;
let d = true;

let speedx = x;
let speedy = y;

const rectangle = (a) => {
	if (down) { b < canvas.height - 100 ? b = b+5 : b = b}
	if (up) { b > 0 ? b = b-5 : b = b}
	ctx.fillStyle = 'rgb(255, 255, 255)';
	ctx.fillRect(a, b, 15, 100);
}

const limits = () => {
	if (f) speedX = x = x + 5;
	if (!f) speedX = x = x -5; 
	if (x > canvas.width - 10) f = false;
    if (x < 10) {f = true; score.innerHTML++};
	

	if (d) speedy = y = y + 3;
	if (!d) speedy = y = y - 3;
	if (y < 10) d = true;
	if (y > canvas.height - 10) d = false;

	if (x === 75 && ( y > b -10 && y < b + 110)) f = true;
}

const ball = () =>{
	ctx.clearRect(0 ,0 ,500 ,400 );

	ctx.beginPath();
	ctx.fillStyle = 'rgb(255, 255, 255)';
	limits();

	ctx.arc(speedX, speedy ,10 ,0 ,Math.PI*2 ,false );
	ctx.fill();
	rectangle(50);
	requestAnimationFrame(ball);
}

ball()