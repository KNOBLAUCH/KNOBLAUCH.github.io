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
      //update every 1/10 second
      
      pisRound = Math.round(pis*10)/10;
      ppsRound = Math.round(pps*1000)/1000;
      
      amountofpis.textContent = 'amount of πs: ' + pisRound;
      pis += (pps/10);
      totpis += (pps/10);
      
      pispersec.textContent = 'amount of πs per second: ' + ppsRound;
      
    }
    loop()
  }, 100);
}());

function removepi(amount) {
    if (amount < pis){
      pis -= amount; 
    }
}

function increasepps(amount){
  pps += amount;
}

function buyupgrade(name){
  if (name == 'test'){
    removepi(20);
    increasepps(2);
  }
}
