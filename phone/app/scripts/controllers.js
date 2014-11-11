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

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
})

.controller('AccountCtrl', function($scope) {
});
