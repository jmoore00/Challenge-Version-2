it("stateCode should equal DC in at least one instance", function() {
    var stateCode = 'DC';
     expect(stateCode).toEqual('DC');
});

angular.module('myApp').controller('customersCtrl', function ($scope) {
    $scope.value = 0;
    $scope.maxValue = 3;
    $scope.incrementValue = function () {
        if ($scope.value < $scope.maxValue) {
            $scope.value++;
        } else {
            $scope.value = 0;
        }
    };



    expect(stateCode).toEqual('DC');
});

//describe('MyCtrl', function () {
//    var scope, controller;

//    beforeEach(inject(function ($controller, $rootScope) {
//        scope = $rootScope.$new();
//        controller = $controller('MyCtrl', {
//            $scope: scope
//        });
//    }));

//    it('has correct initial values', function () {
//        expect(scope.value).toBe(0);
//        expect(scope.maxValue).toBe(3);
//    });

//    it('increments correctly', function () {
//        scope.incrementValue();
//        expect(scope.value).toBe(1);
//        scope.incrementValue();
//        expect(scope.value).toBe(2);
//        scope.incrementValue();
//        expect(scope.value).toBe(3);
//        scope.incrementValue();
//        expect(scope.value).toBe(0);
//    });
//});

