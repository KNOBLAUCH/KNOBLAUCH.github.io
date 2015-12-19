var myHeading = document.querySelector('p2');
myHeading.textContent = '3.141';

for (i = 0; i < 500; i++) {
    myHeading.textContent += '3 ';
    setTimeout(1000);
}
