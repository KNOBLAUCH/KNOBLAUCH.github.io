var myHeading = document.querySelector('p2');
myHeading.textContent = '3.';

for (var i = 0; i <= 10; i++)
  setTimeout(function() { myHeading.textContent += i; }, 10000);
