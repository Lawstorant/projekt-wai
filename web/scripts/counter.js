document.addEventListener("DOMContentLoaded", function() {

	if (!localStorage.getItem("counter")) {
		localStorage.setItem("counter", 1);
	} else {
		let count = parseInt(localStorage.getItem("counter"));
		localStorage.setItem("counter", count + 1);
	}

	if (!localStorage.getItem("name")) {
		let name = prompt("Jak masz na imię?");
		localStorage.setItem("name", name);
	}

	let panel = document.getElementsByClassName("srodek")[0];

	let container = document.createElement("div");
	let nameDisplay = document.createElement("p");
	let viewsDisplay = document.createElement("p");
	let clearButton = document.createElement("button");

	let counter = parseInt(localStorage.getItem("counter"));
	let appendix;

	if (counter == 1) {
		appendix = "raz";
	} else {
		appendix = "razy";
	}

	let part1 = document.createTextNode(`${localStorage.getItem("name")}, widziałeś/aś tę stronę już:`);
	let part2 = document.createTextNode(`${counter} ${appendix}`);
	let buttonText = document.createTextNode("Wyczyść dane lokalne");

	nameDisplay.appendChild(part1);
	viewsDisplay.appendChild(part2);
	viewsDisplay.style.fontWeight = "bold";
	container.style.padding = "10px";
	container.style.textAlign = "center";
	container.style.backgroundColor = "#E9E9E9";
	container.style.flex = "0 0 100%";
	clearButton.appendChild(buttonText);

	clearButton.addEventListener("click", function() {
		localStorage.clear();
		sessionStorage.clear();
		location.reload();
	});

	container.appendChild(nameDisplay);
	container.appendChild(viewsDisplay);
	container.appendChild(clearButton);
	panel.appendChild(container);
});
