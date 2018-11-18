let formTriggers = document.querySelectorAll("#js-services input[type=radio]");
// set a variable for all the radio inputs inside the #js-services

for (i = 0; i < formTriggers.length; i++) {
	// add a click event listener for each one
	formTriggers[i].addEventListener("click", toggleTargets);
	// on click, run the toggleTargets function below
}

function toggleTargets(e) {
	var currentVal = e.target.value;
	// set a variable for the value of the input that was clicked
	// e, here, is a shorthand for "event" -- this is fairly common in JS
	
	let triggerTargets = document.querySelectorAll(".js-massage__questions");
	// set a variable for the things you want to target with the click event

	for (i = 0; i < triggerTargets.length; i++) {
		// loop through the triggerTargets
		if (currentVal === "massage") {
			// compare the value, if it's "massage," then remove the hidden attribute on the targets
			triggerTargets[i].removeAttribute("hidden");
		} else {
			// otherwise, reset the hidden attribute on each target
			triggerTargets[i].setAttribute("hidden", "");
		}
	}
}


