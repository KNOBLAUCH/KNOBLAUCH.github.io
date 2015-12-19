var myHeading = document.querySelector('p2');
myHeading.textContent = '3.';

var count = 0;
(function loop() {
  setTimeout(function () {
    { 
      count++;
      myHeading.textContent += count;
    }
    loop()
  }, 1000);
}());

