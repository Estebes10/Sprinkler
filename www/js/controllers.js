angular.module('app.controllers', ['chart.js'])

.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('riegoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('riegoHrCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  url = 'http://localhost:5000/conf_hour'
  $scope.data = {};

    $scope.submit = function(){
      days = [];
        if($scope.data.lunes == true){
          days.push(0);
        }
        if($scope.data.martes == true){
          days.push(1);
        }
        if($scope.data.miercoles == true){
          days.push(2);
        }
        if($scope.data.jueves == true){
          days.push(3);
        }
        if($scope.data.viernes == true){
          days.push(4);
        }
        if($scope.data.sabado == true){
          days.push(5);
        }
        if($scope.data.domingo == true){
          days.push(6);
        }
        console.log(days);
        console.log($scope.data.hour);

        $http.post(url, {days : days, hour: $scope.data.hour}).then(function (res){
            $scope.response = res.data;
        });
    };

}])

.controller('riegoHumCtrl', ['$scope', '$stateParams', '$http','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicPopup) {
  url = 'http://localhost:5000/conf_humidity'
  $scope.data = {};

    $scope.submit = function(){
      console.log($scope.data.inferior);
      console.log($scope.data.superior);

      $http.post(url, {limInferior : $scope.data.inferior, limSuperior: $scope.data.superior}).then(function (res){
          $scope.response = res.data;
      });
    };

}])

.controller('regarAhoraCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  url = 'http://localhost:5000/water_now'

  $http.get(url).then(function (res){
      console.log(res.data.humidity)
      $scope.humidity = res.data.humidity;
      $scope.temp = res.data.temperature;
  });

  $scope.update =  function(){
    $http.get(url).then(function (res){
        console.log(res.data.humidity)
        $scope.humidity = res.data.humidity;
        $scope.temp = res.data.temperature;
    });
  }
}])

.controller('lOGCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  $scope.colors = ["#2487E9", "#24E924"];

  url = 'http://localhost:5000/show_graph';

  $http.get(url).then(function(response){
    $scope.labels = response.data.labels;
    $scope.series = ['Humidity', 'Temperature'];
    hum_temp = response.data.hum_values;
    temp_temp = response.data.temp_values;
    $scope.data = new Array(hum_temp, temp_temp);

    //$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    //$scope.series = ['Series A', 'Series B'];
    /*$scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];*/
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left',
            fontColor: '#2487E9'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      },
      legend: { display: true }
    };
  });
}])
