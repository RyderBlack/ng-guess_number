let inputComputer = Math.floor(Math.random() * 100);
console.log(inputComputer);

const app = angular.module('GuessApp', []);

    app.controller('MainCtrl', function ($scope) {


    $scope.submit = function(inputUser) {
        if (inputUser === inputComputer) {
        alert('You win !');
        } else {
        alert('You loose !');
        }
    };
});
