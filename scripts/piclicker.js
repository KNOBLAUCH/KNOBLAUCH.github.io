var amountofpis = document.querySelector('p2');
amountofpis.textContent = 'amount of πs:';

var pispersec = document.querySelector('p3');
pispersec.textContent = 'amount of πs per second:';

var pis = 0;
var pps = 0.7;

(function loop() {
  setTimeout(function () {
    { 
      //update every second
      
      amountofpis.textContent = 'amount of πs: ' + pis;
      pis += pps;
      
      pispersec.textContent = 'amount of πs per second: ' + pps;
      
    }
    loop()
  }, 1000);
}());
