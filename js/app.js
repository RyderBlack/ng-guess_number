const app = angular.module('guessApp', []);

    app.controller('MainCtrl', function ($scope) {

      let inputComputer = Math.floor(Math.random() * 100);
      console.log(inputComputer);
      $scope.tries = 10;

      $scope.submit = function(inputUser) {
        if (inputUser < inputComputer) {
          $scope.indicator = "It's more ! 😉";
          $scope.tries -= 1;
          $scope.inputUser = null;

        } else if (inputUser > inputComputer) {
          $scope.indicator = "It's less ! 😉";
          $scope.tries -= 1;
          $scope.inputUser = null;
        } else {
          $scope.indicator = "Congratulations ! You guessed the right number !";
        
        };

        if ($scope.tries == 0) {
          $scope.indicator = "Game over";
          $scope.inputUser = $scope.disabledInput;
        };

      };

});
