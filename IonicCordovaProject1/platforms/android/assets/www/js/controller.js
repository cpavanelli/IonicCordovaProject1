angular.module('starter.controllers')

    .controller('FourCtrl', function ($scope, $ionicPopup, $stateParams, FourFactory) {

        $scope.myFilter = null;
        $scope.popUpFilter = null;


        $scope.teste = 'aaaaaa';


        $scope.openFilter = function () {
            if ($('#filtersDiv').css('display') == 'block') {
                $('#filtersDiv').css('display', 'none');
            }
            else
            {
                $('#filtersDiv').css('display', 'block');
            }
            
            //$scope.modal.show($event);
        };
        $scope.closePopover = function () {
            $scope.modal.hide();
        };


        $scope.restaurantes = FourFactory.getAll();

        $scope.remove = function (restaurante) {
            FourFactory.remove(restaurante);
        };

        $scope.filterData = function () {
            closePopover();
            alert();
            FourFactory.filterData(null);
            
        };


        //$ionicModal.fromTemplateUrl('templates/restauranteFilter.html', {
        //    scope: $scope,
        //    animation: 'slide-in-up'
        //}).then(function (modal) {
        //    $scope.modal = modal;
        //});


        //new popup code

        
        $scope.contactMessage = { text: "text" }
        
        $scope.showPopup = function () {
            $scope.data = {}
            $scope.ctrl = this;
            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                templateUrl: 'templates/restauranteFilter.html',
                scope: $scope,
                cssClass: 'customPopup',
                buttons: [
                  {
                      text: 'Cancel',
                      onTap: function (e) {
                          alert($scope.contactMessage.text);
                          return 'cancel button';
                      }
                  },
                  {
                      text: '<b>Ok</b>',
                      type: 'button-positive',
                      onTap: function (e) {
                          //alert($scope.contactMessage.text);
                          
                          //$scope.myFilter = null;

                          //if ($scope.popUpFilter != null) {
                          //    //$scope.myFilter = { cozinha: 'Japones' };
                          //    $scope.popUpFilter = { cozinha: 'Japones' };
                          //}
                          //else {
                          //    //$scope.myFilter = { cozinha: 'Burger' };
                          //    $scope.popUpFilter = { cozinha: 'Burger' };
                          //}
                          $scope.popUpFilter = { cozinha: $scope.contactMessage.text };
                          
                          
                          $scope.updateFilter($scope.popUpFilter);
                          
                          return 'ok button';
                      }
                  },
                ]
            });
            myPopup.then(function (res) {
                //alert("you tapped: " + res);
                
            });
        };

        $scope.updateFilter = function (_updateFilter) {
            $scope.myFilter = _updateFilter;
        }

        //end new code



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

            //newItem.nome = restaurante.nome;
            //newItem.cozinha = restaurante.cozinha;
            //newItem.visitado = restaurante.visitado;
            
            FourFactory.add(restaurante);
            
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