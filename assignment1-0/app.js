(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
  
   
   $scope.lunchInput = '';
   $scope.setMessage = function (lunchInput) { 
      if ($scope.lunchInput == '') return $scope.lunchMessage = 'Please enter data first'; 
      var courses = $scope.lunchInput.split(',');
      
      $scope.lunchMessage = courses.length < 4 ? 'Enjoy!' : 'Too much!';  
   }; 
}

})();
