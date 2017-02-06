var WIDTH = 20;
var HEIGHT = 14;
var img = document.getElementById('svg');


run();

function run() {
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

  var container = document.getElementsByClassName("star-container")[0];

  container.innerHTML = '';
  var increase = Math.PI * 2 / WIDTH;


  for (var i = 0; i < HEIGHT; i++) {
    var counter = 0;
    for (var j = 0; j < WIDTH; j++) {
      var div = document.createElement('div');
      div.classList.add('star');
      container.appendChild(div);
      var pixelData = canvas.getContext('2d').getImageData(j, i, 1, 1).data;
      div.style.backgroundColor = "rgb(" + pixelData[0] + ", " + pixelData[1] + ", " + pixelData[2] + ")";
      div.style.boxShadow = "0px 0px 3px 5px rgb(" + pixelData[0] + ", " + pixelData[1] + ", " + pixelData[2] + ")";
      div.style.borderRadius = "4px";
      div.style.top = ((Math.sin(counter) / 2 + 0.5) * 80) + rndm(0, 10) + 'px';
      div.style.left = ((Math.sin(counter) / 2 + 0.5) * 80) + (i * 5) + rndm(0, 10) + 'px';


      // var w = rndm(2, 10) + 'px';
      // div.style.width = w;
      // div.style.height = w;


      counter += increase;
    }
  }
}


function rndm(min, max) {
  return Math.random() * (max - min) + min;
}


var countries = document.getElementById("countries");

countries.addEventListener("click", function () {
  var options = countries.querySelectorAll("option");
  var count = options.length;
});

countries.addEventListener("change", function (e) {
  var img = document.getElementById('svg');
  console.log('change', e.target.value);
  img.src = '../bower_components/flag-icon-css/flags/4x3/' + e.target.value + '.svg';
  console.log(img.src);
  img.addEventListener("load", function() {
    run();
  });
});

