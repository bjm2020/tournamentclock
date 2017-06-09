var tournamentData = {
  tournamentType: "No Limit Holdem Freezeout",
  prizePool: 100,
  players: 21,
  startingStack: 5000
};

var levels = [
  {smallBlind: 25,
   bigBlind: 50,
 breakAfter: false},
 {smallBlind: 50,
  bigBlind: 100,
breakAfter: false},
{smallBlind: 75,
 bigBlind: 150,
breakAfter: false},
{smallBlind: 100,
 bigBlind: 200,
breakAfter: true},
{smallBlind: 10000,
 bigBlind: 20000,
breakAfter: false}];

var Tournament = function(data) {
  this.tournamentType = data.tournamentType;
  this.currentSmallBlind = ko.observable();
  this.currentBigBlind = ko.observable();
  this.currentAnte = ko.observable();
  this.nextSmallBlind = ko.observable();
  this.nextBigBlind = ko.observable();
  this.nextAnte = ko.observable();
  this.currentRound = data.currentRound;
  this.prizePool = data.prizePool;
  this.playersLeft = data.players;
  this.startingStack = data.startingStack;
  this.currentLevel = 0;
  this.nextLevel = 1;
  this.chipAverage;
  this.time;
}

Tournament.prototype.increaseBlinds = function(levels) {
  this.currentLevel++;
  this.nextLevel++;
  this.currentSmallBlind(levels[this.currentLevel].smallBlind);
  this.currentBigBlind(levels[this.currentLevel].bigBlind);
  this.nextSmallBlind(levels[this.currentLevel+1].smallBlind);
  this.nextBigBlind(levels[this.currentLevel+1].bigBlind);
};

Tournament.prototype.pauseClock = function() {

};

Tournament.prototype.rewindClock = function(seconds) {

};

Tournament.prototype.getChipAverage = function() {

};

Tournament.prototype.restartClock = function() {

}

Tournament.prototype.initiateClock = function(duration, display) {
//  var countDownTime = levels[this.currentLevel].duration;
  var timer = duration;
  var minutes;
  var seconds;
  setInterval(function() {
    var minutes = parseInt(timer/60,10);
    var seconds = parseInt(timer % 60,10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent =  minutes + ":" + seconds;
    //this.time = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }

  }, 1000);
}

function startClock(duration, display) {
//  var countDownTime = levels[this.currentLevel].duration;
  var timer = duration;
  var minutes;
  var seconds;
  setInterval(function() {
    var minutes = parseInt(timer/60,10);
    var seconds = parseInt(timer % 60,10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent =  minutes + ":" + seconds;
    //this.time = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }

  }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
        console.log(display);
    startClock(fiveMinutes, display);
};

window.onload();

var BlindStructure = function(data) {
  this.levels = data.levels;
}

var Level = function(data) {
  this.smallBlind = data.smallBlind;
  this.duration = data.bigBlind;
  this.round = data.round;
  this.breakAfter = data.breakAfter;
}

function startTournament() {
  var self = this;


}

function endTournament() {

}
