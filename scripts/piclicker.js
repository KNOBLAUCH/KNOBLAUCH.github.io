var amountofpis = document.querySelector('p2');
amountofpis.textContent = 'amount of πs:';

var pispersec = document.querySelector('p3');
pispersec.textContent = 'amount of πs per second:';

var pis = 0;
var pps = 0.7;

(function loop() {
  setTimeout(function () {
    { 
      //update every 1/100 second
      
      pisRound = Math.round(pis*10)/10;
      
      amountofpis.textContent = 'amount of πs: ' + pisRound;
      pis += (pps/100);
      
      pispersec.textContent = 'amount of πs per second: ' + pps;
      
    }
    loop()
  }, 10);
}());
