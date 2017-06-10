var tournamentData = {
  tournamentType: "No Limit Holdem Freezeout",
  prizePool: 100,
  players: 21,
  startingStack: 5000
};

var levels = [
  {smallBlind: 25,
   bigBlind: 50,
   duration: 1,
   level: 1,
 breakAfter: false},
 {smallBlind: 50,
  bigBlind: 100,
  duration: 2,
  level: 2,
breakAfter: false},
{smallBlind: 75,
 bigBlind: 150,
 duration: 1,
 level: 3,
breakAfter: false},
{smallBlind: 100,
 bigBlind: 200,
 duration: 1,
 level: 4,
breakAfter: true},
{smallBlind: 10000,
 bigBlind: 20000,
 duration: 1,
 level: 5,
breakAfter: false}];

this.currentLevel = ko.observable(0);
this.nextLevel = ko.observable(1);
this.time = ko.observable("00:00");

var Tournament = function(data,levelArray) {
  this.tournamentType = data.tournamentType;
  this.currentAnte = ko.observable();
  this.nextAnte = ko.observable();
  this.currentRound = data.currentRound;
  this.prizePool = data.prizePool;
  this.playersLeft = data.players;
  this.startingStack = data.startingStack;
  this.levels = ko.observableArray(levelArray);
  console.log(this.levels[0]);
  this.averageStack = " ";
  //model.currentTournament(this);
//  this.time = " ";

this.blinds = ko.computed(function(){

    return this.levels[this.currentLevel()].smallBlind + "/" + this.levels[this.currentLevel()].bigBlind;
  });

  this.nextBlinds = ko.computed(function() {
    return this.levels[this.nextLevel()].smallBlind + "/" + this.levels[this.nextLevel()].bigBlind;
  });
}

Tournament.prototype.increaseBlinds = function(levels) {
  if(currentLevel() < this.levels().length-1) {
  currentLevel(currentLevel()+1);
}
if(nextLevel() < this.levels().length - 1) {
  nextLevel(nextLevel()+1);
}
};

Tournament.prototype.pauseClock = function() {

};

Tournament.prototype.rewindClock = function(seconds) {

};

Tournament.prototype.getChipAverage = function() {

};

Tournament.prototype.restartClock = function() {

}

//window.onload = function () {
  //  var fiveMinutes = 60 * 5,
    //    display = document.querySelector('#time');
    //    console.log(display);
  //  startClock(fiveMinutes, display);
//};

//window.onload();

var BlindStructure = function(data) {
  this.levels = data.levels;
}

var Level = function(data) {
  this.smallBlind = data.smallBlind;
  this.bigBlind = data.bigBlind;
  this.duration = data.duration;
  this.round = data.round;
  this.breakAfter = data.breakAfter;
}

function viewModel() {
  var self = this;
  self.startClock = function(duration, display) {
  //  var countDownTime = levels[this.currentLevel].duration;
  console.log(self.currentTournament().levels()[currentLevel()]);
    duration = self.currentTournament().levels()[currentLevel()].duration * 60;
    console.log(duration);
    var timer = duration;
    var minutes;
    var seconds;
    setInterval(function() {
      var minutes = parseInt(timer/60,10);
      var seconds = parseInt(timer % 60,10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      //display.textContent =  minutes + ":" + seconds;
      time(minutes + ":" + seconds);

      if (--timer < 0) {
        self.currentTournament().increaseBlinds();
        duration =   duration = self.currentTournament().levels()[currentLevel()].duration * 60;
        timer = duration;
      }

    }, 1000);
  }

    self.startTournament = function() {
      var self = this;
      var tournament = new Tournament(tournamentData, levels);
    //  tournament.setLevels(levels);
      self.currentTournament = ko.observable(tournament);
    }

    self.startTournament();




}
var model = new viewModel();
ko.applyBindings(model);

//startTournament();


function endTournament() {

}
