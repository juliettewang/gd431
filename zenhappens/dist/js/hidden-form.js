let formTriggers = document.querySelectorAll("[data-action='js-form__trigger'] input[type=radio]");
// set a variable for all the radio inputs within elements with the js-form__trigger data-action

for (i = 0; i < formTriggers.length; i++) {
	// add a click event listener for each one
	formTriggers[i].addEventListener("click", toggleTargets);
	// on click, run the toggleTargets function below
}

function toggleTargets(e) {
	var currentVal = e.target.value,
			// set a variable for the value of the input that was clicked
			// e, here, is a shorthand for "event" -- this is fairly common in JS
			container = e.target.closest("[data-action='js-form__trigger']"),
			// set a variable for the parent element of the clicked item
			triggerVal = container.dataset.trigger,
			// get the trigger value from the parent container
			targetEl = container.dataset.target
			// get the target value from the parent container

	let triggerTargets = document.querySelectorAll("." + targetEl);
	// set a variable for the things you want to target with the click event -- this is the variable targetEl prefixed with a period to make a class name

	for (i = 0; i < triggerTargets.length; i++) {
		// loop through the triggerTargets
		if (currentVal === triggerVal) {
			// compare the value, if it's "massage," then remove the hidden attribute on the targets
			triggerTargets[i].removeAttribute("hidden");
		} else {
			// otherwise, reset the hidden attribute on each target
			triggerTargets[i].setAttribute("hidden", "");
		}
	}
}
