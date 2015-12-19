var myHeading = document.querySelector('p2');
myHeading.textContent = '3.141';

function doSetTimeout(i) {
  setTimeout(function() { myHeading.textContent += i; }, 1000);
}

for (var i = 0; i <= 10; ++i)
  doSetTimeout(i);
