'use strict';

console.log('js doc linked');

startGame();

function startGame(){
  var userName;
  userName =prompt('How\'s it going Jerkface? What the hell is your name?');
  console.log('name?' + userName);
  alert('Whatever Jerkface... I mean ' + userName + ' , I hope you is enjoyin this.');
  
  var userPlace;
  userPlace =prompt('Where u frum?');
  console.log('place?' + userPlace);
  alert('Whatever Jerkface... I mean...  ' + userName + ' ; I heard it is nice in ' + userPlace + ' this time of year. So good for you, Jerkface!');

  var userFood;
  userFood =prompt('What have you been eating?');
  console.log('eating?' + userFood);
  alert('Damn!');

  var userVacay;
  userVacay =prompt('Where you goin fo Sprang Break?');
  console.log(userVacay);
  alert('looks like i will see you there, ' + userName + ' in ' + userVacay + ' eating all those damned ' + userFood + '!');
}