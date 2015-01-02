'use strict';
angular.module('Phone.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Games', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [];
  $http.get('/games.json').success(function(data){
    friends=data;
  });

  return {
    all: function() {
      return friends;
    }
  };
});
