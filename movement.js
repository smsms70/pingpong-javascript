let up = false;
let down = false;

document.addEventListener('keydown', e => {
	switch(e.key){
		case "ArrowUp":
			up = true;
			down = false;
		break;
		case "ArrowDown":
			down = true;
			up = false;
		break;
	}
})
document.addEventListener('keyup', e => {
	switch(e.key){
		case "ArrowUp":
			up = false;
		break;
		case "ArrowDown":
			down = false;
		break;
	}
})