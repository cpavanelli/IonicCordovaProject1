angular.module('starter.controllers')

    .controller('FourCtrl', function ($scope, $ionicModal, $stateParams, FourFactory) {

        $scope.myFilter = null;
        $scope.popUpFilter = null;
        $scope.filterCozinha = null;
        $scope.filterNome = null;

        $scope.restaurantes = FourFactory.getAll();
        $scope.cozinhas = FourFactory.getCozinhas();

        $scope.openFilter = function () {
            if ($('#filtersDiv').css('display') == 'block') {
                $('#filtersDiv').css('display', 'none');
            }
            else {
                $('#filtersDiv').css('display', 'block');
            }
        };

        $scope.remove = function (restaurante) {
            FourFactory.remove(restaurante);
        };

        // Filters Modal Code
        $ionicModal.fromTemplateUrl('templates/restauranteFilter.html', {
            scope: $scope,
            animation: 'slide-in-right',
            cssClass: 'customPopup'
        }).then(function (modal) { $scope.modal = modal; });

        $scope.openModal = function () {
            $scope.modal.show().then(function () {
                if ($scope.filterCozinha == null)
                    $scope.filterCozinha = $scope.cozinhas[0];
            });
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        $scope.applyFilters = function () {
            $scope.popUpFilter = { cozinha: $scope.filterCozinha.id, nome: $scope.filterNome };

            if ($scope.popUpFilter.cozinha == null) {
                delete $scope.popUpFilter.cozinha;
            }

            if ($scope.popUpFilter.nome == null) {
                delete $scope.popUpFilter.nome;
            }


            if ($scope.popUpFilter != null && $scope.popUpFilter.cozinha == null && $scope.popUpFilter.nome == null)
                $scope.popUpFilter = null;

            $scope.updateFilter($scope.popUpFilter);

            $scope.closeModal();

        };

        $scope.updateFilter = function (_updateFilter) {
            $scope.myFilter = _updateFilter;
        }

        // Filters ON CHANGE
        $scope.cozinhaChange = function (_cozinha) {
            $scope.filterCozinha = _cozinha;
        };

        $scope.nomeChange = function (_nome) {
            if (_nome == '')
                $scope.filterNome = null;
            else
                $scope.filterNome = _nome;
        };

        //$scope.showPopup = function () {
        //    $scope.data = {}
        //    $scope.ctrl = this;
        //    // An elaborate, custom popup
        //    var myPopup = $ionicPopup.show({
        //        templateUrl: 'templates/restauranteFilter.html',
        //        scope: $scope,
        //        cssClass: 'customPopup',
        //        buttons: [
        //          {
        //              text: 'Cancel',
        //              onTap: function (e) {alert($scope.contactMessage.text);return 'cancel button';}
        //          },
        //          {
        //              text: '<b>Ok</b>',
        //              type: 'button-positive',
        //              onTap: function (e) { $scope.updateFilterTap(); return 'ok button'; }
        //          }
        //        ]
        //    });
        //    myPopup.then(function (res) {
        //        //alert("you tapped: " + res); 
        //    });
        //};

        //$scope.updateFilterTap = function () {
        //    $scope.popUpFilter = { cozinha: $scope.contactMessage.text };


        //    $scope.updateFilter($scope.popUpFilter);
        //}

        //new popover code



    })


    .controller('RestauranteEditCtrl', function ($scope, $state, $stateParams, FourFactory) {
        var id = $stateParams.restauranteId;
        $scope.cozinhas = FourFactory.getCozinhas();
        


        if (id == 0)
            $scope.action = 'add';
        else {
            $scope.action = 'change';
            $scope.restaurante = FourFactory.get(id);
            $scope.restaurante.cozinhaObj = FourFactory.getCozinha($scope.restaurante.cozinha);
        }

        $scope.addItem = function (restaurante) {        
            
            restaurante.cozinha = restaurante.cozinhaObj.id;
            FourFactory.add(restaurante);

            $state.go('tab.four');
        };

        $scope.cozinhaChange = function (_cozinha) {
            $scope.restaurante.cozinha = _cozinha.id;
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

//$('.backdrop').addClass('visible');
//$('.backdrop').addClass('active');
//$('.backdrop').css('z-index', '10');

//$('.modal-backdrop').addClass('backdrop');
//$('.modal-backdrop').addClass('active');

//$scope.$on('modal.hidden', function () {
//});