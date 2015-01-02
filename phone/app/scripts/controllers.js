'use strict';
angular.module('Phone.controllers', [])

.controller('ScoreCtrl', function($scope,$log) {
  $scope.home={};
  $scope.visitor={};
  $scope.home.score=0;
  $scope.visitor.score=0;

  $scope.update = function(target,score,value){
    if(score+value>=0 && score+value<=10){
        score=score+value;
    };
    if('home'===target){
      $scope.home.score=score;
    }
    if('visitor'===target){
      $scope.visitor.score=score;
    };
  }

})

.controller('GamesCtrl', function($scope, Games) {
  $scope.games = [{"_id":"5461cf251904dc3a6583b229","timestamp":"2014-11-11T08:56:05.808Z","tags":["tre"],
                  "teams":[{"score":10,"_id":"5461cf251904dc3a6583b22b","players":["Teemu","JussiNi"]},
                  {"score":6,"_id":"5461cf251904dc3a6583b22a","players":["NikoJ","JariV"]}],"__v":0},
                  {"_id":"5461cf251904dc3a6583b229","timestamp":"2014-11-11T08:56:05.808Z","tags":["tre"],
                  "teams":[{"score":10,"_id":"5461cf251904dc3a6583b22b","players":["Teemu","JussiNi"]},
                                  {"score":6,"_id":"5461cf251904dc3a6583b22a","players":["NikoJ","JariV"]}],"__v":0}];
  //$http.get('/games.json').success(function(data){
      //$scope.games=data;
//  });

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Games) {
  $scope.games = Games.all();
})

.controller('AccountCtrl', function($scope) {
});
