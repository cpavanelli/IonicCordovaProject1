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
            $scope.restaurante = FourFactory.get(id);
        }
        
        $scope.addItem = function (restaurante) {
            
            var newItem = {};

            newItem.nome = restaurante.nome;
            newItem.cozinha = restaurante.cozinha;
            
            FourFactory.add(newItem);
            
            $state.go('tab.four');
        };

    })

    .controller('MediaCtrl', function ($scope, $stateParams, MediaFactory) {
        $scope.medias = MediaFactory.getAll();

        $scope.remove = function (media) {
            MediaFactory.remove(media);
        }
    })


    .controller('MediaEditCtrl', function ($scope, $state, $stateParams, MediaFactory) {
        var id = $stateParams.mediaId;

        if (id == 0)
            $scope.action = 'add';
        else {
            $scope.action = 'change';
            $scope.media = MediaFactory.get(id);
        }

        $scope.addItem = function (media) {

            var newItem = {};

            newItem.nome = media.nome;
            newItem.tipo = media.tipo;

            MediaFactory.add(newItem);

            $state.go('tab.media');
        };

    })


    .controller('EventoCtrl', function ($scope, $stateParams, EventoFactory) {
        $scope.eventos = EventoFactory.getAll();

        $scope.remove = function (evento) {
            EventoFactory.remove(evento);
        }
    })


    .controller('EventoEditCtrl', function ($scope, $state, $stateParams, EventoFactory) {
        var id = $stateParams.eventoId;

        if (id == 0)
            $scope.action = 'add';
        else {
            $scope.action = 'change';
            $scope.evento = EventoFactory.get(id);
        }

        $scope.addItem = function (evento) {

            var newItem = {};

            newItem.nome = evento.nome;
            newItem.data = evento.data;

            EventoFactory.add(newItem);

            $state.go('tab.evento');
        };

    })


;