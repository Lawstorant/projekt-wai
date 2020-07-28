function addParagraph(element, string) {
	let paragraph = document.createElement("p");
	let text = document.createTextNode(string);

	paragraph.appendChild(text);
	element.appendChild(paragraph);
}


document.addEventListener("DOMContentLoaded", function() {
	let element = document.getElementsByClassName("tresc")[0];
	addParagraph(element, "Co by tu jeszcze dodać? Nie wiem :D");
});
