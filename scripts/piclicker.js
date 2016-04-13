var amountofpis = document.querySelector('p2');
amountofpis.textContent = 'amount of πs:';

var pispersec = document.querySelector('p3');
pispersec.textContent = 'amount of πs per second:';

var pi = 3.1415926535897932384626433832795028841971693993751058209749;
var pis = 0;
var pps = pi;
var totpis = 0;

(function loop() {
  setTimeout(function () {
    { 
      //update every 1/100 second
      
      roundNum = Math.round((7/pps-0.3)*10)/10;
      
      pisRound = Math.round(pis*roundNum)/roundNum;
      ppsRound = Math.round(pps*1000)/1000;
      
      amountofpis.textContent = 'amount of πs: ' + pisRound;
      pis += (pps/100);
      totpis += (pps/100);
      
      pispersec.textContent = 'amount of πs per second: ' + ppsRound;
      
    }
    loop()
  }, 10);
}());
