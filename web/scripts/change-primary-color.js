document.addEventListener("DOMContentLoaded", function() {
	let changed = "no";
	if (sessionStorage.getItem("color-changed")) {
		changed = sessionStorage.getItem("color-changed");
	}

	if (changed == "yes") {
		document.getElementsByTagName("body")[0].style.setProperty("--primary", "#36C28B");
		document.getElementsByTagName("body")[0].style.setProperty("--list-bg", "#65A37A");
	}

	document.getElementsByTagName("header")[0].addEventListener("click", function() {
		if (changed == "no") {
			document.getElementsByTagName("body")[0].style.setProperty("--primary", "#36C28B");
			document.getElementsByTagName("body")[0].style.setProperty("--list-bg", "#65A37A");
			changed = "yes";
			sessionStorage.setItem("color-changed", "yes");
		} else {
			document.getElementsByTagName("body")[0].style.setProperty("--primary", "#50A1D5");
			document.getElementsByTagName("body")[0].style.setProperty("--list-bg", "#6589A3");
			changed = "no";
			sessionStorage.setItem("color-changed", "no");
		}
	});
});
