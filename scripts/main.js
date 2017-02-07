'use strict';

var WIDTH = 20;
var HEIGHT = 14;
var img = document.getElementById('svg');

run();

function run() {
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

  var container = document.getElementsByClassName('stars-container')[0];

  container.innerHTML = '';
  var increase = Math.PI * 2 / WIDTH;

  for (var i = 0; i < HEIGHT; i++) {
    var counter = 0;
    for (var j = 0; j < WIDTH; j++) {

      var starContainer = document.createElement('div');
      starContainer.classList.add('star-container');

      var star = document.createElement('div');
      star.classList.add('star');

      container.appendChild(starContainer);
      starContainer.appendChild(star);
      var pixelData = canvas.getContext('2d').getImageData(j, i, 1, 1).data;
      star.style.backgroundColor = 'rgb(' + pixelData[0] + ', ' + pixelData[1] + ', ' + pixelData[2] + ')';
      starContainer.style.top = (Math.sin(counter) / 2 + 0.5) * 80 + rndm(0, 10) + 'px';
      starContainer.style.left = (Math.sin(counter) / 2 + 0.5) * 80 + i * 5 + rndm(0, 10) + 'px';

      var w = Math.round(rndm(2, 5));
      star.style.width = w + 'px';
      star.style.height = w + 'px';
      star.style.boxShadow = '0px 0px ' + w / 2 + 'px ' + w / 2 + 'px  rgb(' + pixelData[0] + ', ' + pixelData[1] + ', ' + pixelData[2] + ')';
      star.style.borderRadius = w + 'px';
      star.style.animation = 'star ' + rndm(1, 4) + 's infinite alternate ease-in-out';

      counter += increase;
    }
  }
}

function rndm(min, max) {
  return Math.random() * (max - min) + min;
}

var countries = document.getElementById('countries');

countries.addEventListener('click', function () {
  var options = countries.querySelectorAll('option');
  var count = options.length;
});

countries.addEventListener('change', function (e) {
  var img = document.getElementById('svg');
  console.log('change', e.target.value);
  img.src = 'droneflags/images/' + e.target.value + '.svg';
  console.log(img.src);
  img.addEventListener('load', function () {
    run();
  });
});