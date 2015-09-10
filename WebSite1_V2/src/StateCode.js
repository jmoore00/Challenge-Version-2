var app = angular.module('myApp', []);
app.controller('customersCtrl', function ($scope, $http) {
    $http.get("https://my.ncarb.org/Public/api/certification/search?pageSize=100&page=0&lastName=&firstName=&city=&stateCode=&countryCode=&orderBy=name")
    .success(function (response) { $scope.names = response.data.StateCode; });
});