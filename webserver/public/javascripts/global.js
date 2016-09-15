var app = angular.module('myApp', []);
app.controller('ExampleController', ['$scope', function($scope) {

   $scope.data = {

    singleSelect:null,

    multipleSelect: [],

    option1: 'option-1'

   };
}]);

app.controller('DateController', ['$scope', function($scope) {
        $scope.requestDate = new Date(2014, 3, 19);
    }
]);
app.controller('DateController', ['$scope', function($scope) {
      $scope.example = {
        value: new Date(2010, 11, 28, 14, 57)
      };
    }]);

app.controller('myCtrl', ['$scope', function($scope) {

$scope.checkboxModel = {
     };

$scope.selectAll = function() {
console.log("inside selectAll func");
$scope.checkboxModel.value1 = true;
$scope.checkboxModel.value2 = true;
$scope.checkboxModel.value3 = true;
$scope.checkboxModel.value4 = true;
$scope.checkboxModel.value5 = true;
$scope.checkboxModel.value6 = true;
      
};    
$scope.deselectAll = function() {
console.log("inside deselectAll func");
$scope.checkboxModel.value1 = false;
$scope.checkboxModel.value2 = false;
$scope.checkboxModel.value3 = false;
$scope.checkboxModel.value4 = false;
$scope.checkboxModel.value5 = false;
$scope.checkboxModel.value6 = false;
      
};          

$scope.saveAll = function () {
		console.log("inside saveall func");
                    data = {}
                    $http.get("/", data
                        ).success(function (res, status, headers, config) {
                    if (res == 'success')
                    {
                        $scope.message = res;
                    }
                    else
                    {
                        $scope.message = res;
                    }
                }).error(function (res, status) { 
                    $scope.message = res;
                });
                }
    }]);
