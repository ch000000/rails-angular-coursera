(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
   $scope.myLunch = '';
   $scope.lunchMessage = '';
   $scope.setMessage = function (myLunch) { 
      var lunchCheckMsg = 'Please enter data first';
      var myLunch = '1,2,3';
      var inputs = myLunch.split(',');
      
      lunchCheckMsg = inputs.length < 4 ? 'Enjoy!' : 'Too much!'; 
      $scope.lunchMessage =  lunchCheckMsg;;
   }; 
    
}

})();
