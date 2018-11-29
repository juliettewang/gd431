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