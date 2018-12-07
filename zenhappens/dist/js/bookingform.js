// hidden form javascript

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


// range slider javascript


// javascript by Trevan Hetzel on codepen
// https://codepen.io/trevanhetzel/pen/rOVrGK

var sheet = document.createElement('style'),  
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'],
  times = ['15 minutes', '30 minutes', '45 minutes', '60 minutes', '75 minutes', '90 minutes', '120 minutes'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {  
  var curVal = el.value,
      val = (curVal - 1) * 16.666666667,
      style = '';
  
  // Set active label
  $('.range-labels li').removeClass('active selected');
  
  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
  
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  
  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {
    style += '.range {background: linear-gradient(to right, #6D9E11 0%, #6D9E11 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
    style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #6D9E11 0%, #6D9E11 ' + val + '%, #F1F1F1 ' + val + '%, #F1F1F1 100%)}';
  }

  return style;
}

$rangeInput.on('input', function () {
  newValue = $(this).val();
  sheet.textContent = getTrackStyle(this);
  $rangeInput.attr("aria-valuenow", newValue.toString());
  $rangeInput.attr("aria-valuetext", times[newValue]);
});

// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();
  
  $rangeInput.val(index + 1).trigger('input');
  
});