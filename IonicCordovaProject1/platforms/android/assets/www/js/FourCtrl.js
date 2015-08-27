angular.module('starter.controllers')

    .controller('FourCtrl', function ($scope, $stateParams, FourFactory) {
        $scope.restaurantes = FourFactory.getAll();

        $scope.remove = function (restaurante) {
            FourFactory.remove(restaurante);
        }      
    })


    .controller('RestauranteEditCtrl', function ($scope, $state, $stateParams, FourFactory) {
        var id = $stateParams.restauranteId;
        if (id == 0)
            $scope.action = 'add';
        else {
            $scope.action = 'change';
            $scope.restaurante = FourFactory.get($stateParams.restauranteId);
        }
        

        $scope.addItem = function (restaurante) {
            
            var newItem = {};

            //form.nome.$modelValue;
            //// Add values from form to object
            

            //newItem.nome = form.restaurante.nome;
            //newItem.cozinha = form.restaurante.cozinha;
            
            newItem.nome = restaurante.nome;
            newItem.cozinha = restaurante.cozinha;
            

            FourFactory.add(newItem);
            
            $state.go('tab.four');
        };

    })



;