var tournamentData = {
  tournamentType: "No Limit Holdem Freezeout",
  prizePool: 100,
  players: 21,
  startingStack: 5000
};

var levels = [
  {smallBlind: 25,
   bigBlind: 50,
   level: 1,
 breakAfter: false},
 {smallBlind: 50,
  bigBlind: 100,
  level: 2,
breakAfter: false},
{smallBlind: 75,
 bigBlind: 150,
 level: 3,
breakAfter: false},
{smallBlind: 100,
 bigBlind: 200,
 level: 4,
breakAfter: true},
{smallBlind: 10000,
 bigBlind: 20000,
 level: 5,
breakAfter: false}];

this.currentLevel = 0;
this.nextLevel = 1;

var Tournament = function(data,levelArray) {
  this.tournamentType = data.tournamentType;
  this.currentAnte = ko.observable();
  this.nextAnte = ko.observable();
  this.currentRound = data.currentRound;
  this.prizePool = data.prizePool;
  this.playersLeft = data.players;
  this.startingStack = data.startingStack;
  //console.log(levelArray);
  this.levels = ko.observableArray(levelArray);
  console.log(this.levels[0]);
//  this.currentLevel = 0;
  //console.log(this.currentLevel);
//  this.nextLevel = 1;
  this.averageStack = " ";
  this.time = " ";

  this.currentSmallBlind = ko.computed(function() {
    console.log(this.levels[0].smallBlind);
    return this.levels[this.currentLevel].smallBlind;
  });

  this.currentBigBlind = ko.computed(function() {
    return this.levels[this.currentLevel].bigBlind;
  });

  this.nextSmallBlind = ko.computed(function() {
    return this.levels[this.nextLevel].smallBlind;
  });

  this.nextBigBlind = ko.computed(function() {
    return this.levels[this.nextLevel].bigBlind;
  });

  this.blinds = ko.computed(function(){
    return this.currentSmallBlind + "/" + this.currentBigBlind;
  });

  this.nextBlinds = ko.computed(function() {
    return this.nextSmallBlind + "/" + this.nextBigBlind;
  });
}

Tournament.prototype.setLevels = function(levelArray) {
  levelArray.forEach(function(level) {
    self.levels.push(new Level(level));
  });
};

Tournament.prototype.increaseBlinds = function(levels) {
  this.currentLevel++;
  this.nextLevel++;
  this.currentSmallBlind(self.levels[this.currentLevel].smallBlind);
  this.currentBigBlind(self.levels[this.currentLevel].bigBlind);
  this.nextSmallBlind(self.levels[this.currentLevel+1].smallBlind);
  this.nextBigBlind(self.levels[this.currentLevel+1].bigBlind);
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

    //display.textContent =  minutes + ":" + seconds;
    this.time = minutes + ":" + seconds;

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
function viewModel() {
  var self = this;
    startTournament();


  function startTournament() {
    var self = this;
    var tournament = new Tournament(tournamentData, levels);
  //  tournament.setLevels(levels);
    self.currentTournament = ko.observable(tournament);
    console.log(currentTournament());
  }


}
var model = new viewModel();
ko.applyBindings(model);

//startTournament();


function endTournament() {

}
