//Simple Calculator based on Retro style calculators and styled to appear in a 3D display. Also features a solar panel for style. Made for FreeCodeCamp. Coming soon: features for better responsive design


var app = angular.module('myCalc', []);

var calcControl = app.controller('calculatorCtrl', ["$scope", function($scope) {
	
		var prevNum = 0;
  var curNum = 0;
  var opperand = '';
  var clearOnPush = false;
  var memory = 0;


//resets input screen
  var clear = function() {
    if (clearOnPush) {
      $scope.screen = '';
      clearOnPush = false;
    };
  };

//disables buttons from being pressed while off
$scope.offBtn = function() {
$scope.numOp = '';
	$scope.screen = '';
$scope.equals = '';
}

//turns calculator on and allows calculators to be made

 $scope.onBtn = function() {
$scope.screen = '0';
    prevNum = 0;
   
  
//function to select operators
  var answer = function() {
    var result = 0;
    switch (opperand) {
//addition
      case 'plus':
        result = prevNum += Number($scope.screen);
        break;
//subtract
      case 'minus':
        result = prevNum -= Number($scope.screen);
        break;
//multiply
      case 'times':
        result = prevNum *= Number($scope.screen);
        break;
//divide
      case 'divide':
        result = prevNum /= Number($scope.screen);
        break;
      default:
        result = $scope.screen;
    };
    $scope.screen = result;
  };

  
//display number of button
  $scope.numOp = function(val) {
    clear();
    $scope.screen += val;
  }

//toggle negative number
  $scope.negBtn = function() {
    clear();
    if ($scope.screen && $scope.screen !== '0.') {
      var neg = Number($scope.screen) * -1;
      $scope.screen = neg.toString();
    }
  }
//add decimal to number
  $scope.dec = function() {
    clear();
    if ($scope.screen.indexOf('.') < 0) {
      if ($scope.screen) {
        $scope.screen += '.';
      } else {
        $scope.screen = '0.'
      }
    }
  }

//allows backspace if an error is made
$scope.delete = function(){
      if ($scope.screen != 0) {$scope.screen = $scope.screen.slice(0,$scope.screen.length-1);
   } else { $scope.screen = '0';
}
																										}
//function for operating on numbers
  $scope.mathOp = function(op) {
    clear();
    if (prevNum && $scope.screen) {
      answer();
    }
    if ($scope.screen) {
      prevNum = Number($scope.screen);
    }
    $scope.screen = prevNum;
    opperand = op;
    clearOnPush = true;
  }
//when equal button pressed, result will appear
  $scope.equals = function() {
    answer();
    clearOnPush = true;
    prevNum = Number($scope.screen);
  }

																										}



}]);																								
														