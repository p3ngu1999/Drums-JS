var numberOfButtons = document.querySelectorAll(".button").length;

for (var i = 0; i < numberOfButtons; i++) {
	// button click

	document.querySelectorAll(".button")[i].addEventListener("click", function() {
		var buttonStyle = this.innerHTML;
		sound(buttonStyle);
		buttonAnimation(buttonStyle);
	});
}

// sound event

document.addEventListener("keypress", function(event) {
	sound(event.key);
	buttonAnimation(event.key);
});

// drum sounds

function sound(key) {
	switch (key) {
		case "w":
			var sound1 = new Audio("sounds/tom-high.wav");
			sound1.play();
			break;

		case "a":
			var sound2 = new Audio("sounds/tom-mid.wav");
			sound2.play();
			break;

		case "s":
			var sound3 = new Audio("sounds/tom-low.wav");
			sound3.play();
			break;

		case "d":
			var sound4 = new Audio("sounds/snare.wav");
			sound4.play();
			break;

		case "j":
			var sound5 = new Audio("sounds/crash.wav");
			sound5.play();
			break;

		case "k":
			var sound6 = new Audio("sounds/kick.wav");
			sound6.play();
			break;
		
		default: console.log(key);
	}
}

// drum sounds activation

function buttonAnimation(currentKey) {
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("active");

	setTimeout(function() {
		activeButton.classList.remove("active");
	}, 100);
}
