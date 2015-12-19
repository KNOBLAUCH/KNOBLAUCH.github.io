var myHeading = document.querySelector('p2');
myHeading.textContent = '3.';

(function loop() {
  setTimeout(function () {
    { myHeading.textContent += '1'; }
    loop()
  }, 9000);
}());

