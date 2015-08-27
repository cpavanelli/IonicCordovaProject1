angular.module('starter.controllers')

    .controller('FourCtrl', function ($scope, $stateParams, FourFactory) {
        $scope.restaurantes = FourFactory.getAll();

        $scope.remove = function (restaurante) {
            FourFactory.remove(restaurante);
        }      
    })


    .controller('RestauranteEditCtrl', function ($scope, $stateParams, FourFactory) {
        
        $scope.restaurante = FourFactory.get($stateParams.restauranteId);
        
    })



;