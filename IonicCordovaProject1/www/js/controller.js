angular.module('starter.controllers')

    .controller('FourCtrl', function ($scope, $ionicModal, $stateParams, FourFactory) {


        $scope.popUpFilter = { Cozinha: null, Nome: null, Visto1: null, Nota: null };
        $scope.restaurantes = [{ Nome: 'Carregando...' }];
        $scope.cozinhas = FourFactory.getCozinhas(true);
        
        FourFactory.getAll().then(function (_r) {
            $scope.restaurantes = _r;
        });
        
        

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
            $scope.closeModal();
        };

        $scope.clearFilters = function () {
            $scope.popUpFilter = { Cozinha: null, Nome: null, Visto1: null, Nota: null };
            $scope.notaObjFilter.setRating(0);
            $scope.closeModal();
        };

     

        // Filters ON CHANGE
        $scope.cozinhaChange = function (_cozinha) {
            $scope.popUpFilter.Cozinha = _cozinha.id;
        };
        
        $scope.nomeChange = function (_nome) {
            $scope.popUpFilter.Nome = _nome;
        };
        

        $scope.visitadoChange = function (_visitado) {
            // invert it
            if (_visitado)
                $scope.popUpFilter.Visto1 = false;
            else
                $scope.popUpFilter.Visto1 = null;
        };

        $scope.ratingsChange = function (rating) {
            $scope.popUpFilter.Nota = rating;
        };

        $scope.filterExpression = function (_restaurante) {
            var valid = true;

            if ($scope.popUpFilter.Nome != null && $scope.popUpFilter.Nome != '' && _restaurante.Nome.toLowerCase().indexOf($scope.popUpFilter.Nome.toLowerCase()) < 0)
                valid = false;

            if ($scope.popUpFilter.Cozinha != null && $scope.popUpFilter.Cozinha != _restaurante.Cozinha)
                valid = false;
            //|| $scope.popUpFilter.Visto1 != _restaurante.Visto2
            if ($scope.popUpFilter.Visto1 != null && (_restaurante.Visto1 != $scope.popUpFilter.Visto1 || _restaurante.Visto2 != $scope.popUpFilter.Visto1))
                valid = false;

            if ($scope.popUpFilter.Nota != null && $scope.popUpFilter.Nota != 0 && $scope.popUpFilter.Nota != _restaurante.Nota)
                valid = false;



            return valid;
        };
        $scope.getStarIcons = function (nota) {
            var html = '<span class="ion-ios-star big-star small-star ionic_rating_icon_on"></span>';
            var result = '';
            for (var i = 1; i <= nota; i++) {
                result += html;
            }
            return result;
        };

      

        $scope.notaObjFilter = createRatingsObj('mid-star', 0, 0, false, function (rating) { $scope.ratingsChange(rating); });

      

    })


    .controller('RestauranteEditCtrl', function ($scope, $state, $stateParams, FourFactory, $ionicModal, $ionicLoading) {
        var id = $stateParams.restauranteId;
        $scope.cozinhas = FourFactory.getCozinhas(false);
        //$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        

        var notaToAdd = null;
        
        if (id == 0)
        {
            $scope.action = 'add';
            $scope.ratingsObject = createRatingsObj('big-star', 0, 0, false, function (rating) { $scope.ratingsCallback(rating); });
            notaToAdd = 3;
            $scope.restaurante = { cozinhaObj: FourFactory.getCozinha("Variada") , VistoEm : new Date() };
        }
        else {
            $scope.action = 'change';
            
            $scope.restaurante = FourFactory.get(id);
            $scope.restaurante.cozinhaObj = FourFactory.getCozinha($scope.restaurante.Cozinha);

            $scope.ratingsObject = createRatingsObj('big-star', $scope.restaurante.Nota, 0, false, function (rating) { $scope.ratingsCallback(rating); });
            notaToAdd = $scope.restaurante.Nota;
        }

        $scope.addItem = function (restaurante) {        
            
            restaurante.Cozinha = restaurante.cozinhaObj.id;
            restaurante.Nota = notaToAdd;
            restaurante.Visto1 = $('.vo-preto').length > 0;
            restaurante.Visto2 = $('.vo-preta').length > 0;

            FourFactory.add(restaurante);
            

            $state.go('tab.four');
        };

        $scope.updateItem = function (restaurante) {
            alert($scope.restaurante.Localizacao);
            restaurante.Cozinha = restaurante.cozinhaObj.id;
            restaurante.Nota = notaToAdd;
            
            restaurante.Visto1 = $('.vo-preto').length > 0;
            restaurante.Visto2 = $('.vo-preta').length > 0;

            FourFactory.update(restaurante);
            $state.go('tab.four');
        };

        
        $scope.ratingsCallback = function (rating) {
            notaToAdd = rating;
        };

        $scope.setVisto = function (visto12, element, $event) {
            var jClickedDiv = $($event.target);

            if (visto12 == 1) {
                jClickedDiv.toggleClass('vo-preto');
                jClickedDiv.toggleClass('vo-branco');
            }
            else
            {
                jClickedDiv.toggleClass('vo-preta');
                jClickedDiv.toggleClass('vo-branca');

            }
        };

        // MAPSSSSSS
        

           // Map Modal Code
        $ionicModal.fromTemplateUrl('templates/map.html', {
            scope: $scope,
            animation: 'slide-in-right',
            cssClass: 'customPopup'
        }).then(function (modal) { $scope.modal = modal; });


        $scope.openLocalidade = function () {
            $scope.modal.show().then(function () {


                if($scope.restaurante.Localizacao == null)
                    $scope.centerOnMe();
                else
                {
                    $scope.setMapCenterAndMarker($scope.restaurante.Localizacao.split('|')[0], $scope.restaurante.Localizacao.split('|')[1]);
                }
            });
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        $scope.cancelLocalidade = function () {
            //$scope.restaurante.Localizacao = '';
            $scope.modal.hide();
        };
        
        $scope.okLocalidade = function () {
            
            $scope.restaurante.Localizacao = $scope.marker.coords.latitude + '|' + $scope.marker.coords.longitude;
            $scope.modal.hide();
        };


        //navigator.geolocation.getCurrentPosition(function (pos) {
          
        //    $scope.map = { center: { latitude: pos.coords.latitude, longitude: pos.coords.longitude }, zoom: 8 };
          
        //}, function (error) {
        //    alert('Unable to get location: ' + error.message);
        //});
        //$scope.setMarker(-23.546985824250882, -46.634442083618666);

        $scope.setMarker = function (lat, long) {
            $scope.marker = {
                id: 0,
                coords: {
                    latitude: lat,
                    longitude: long
                },
                options: { draggable: true },
                events: {
                    dragend: function (marker, eventName, args) {

                        //alert('Sua latitude eh: ' + $scope.marker.coords.latitude + ' E sua longitude eh: ' + $scope.marker.coords.longitude);

                        $scope.marker.options = {
                            draggable: true
                            ,
                            labelContent: "",
                            labelAnchor: "100 0",
                            labelClass: "marker-labels"
                        };
                    }
                }
            };
        }

        

        $scope.centerOnMe = function() {
            //if(!$scope.map) {
            //    return;
            //}

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location...',
                showBackdrop: false
            });
            navigator.geolocation.getCurrentPosition(function (pos) {

                //$scope.map = { center: { latitude: pos.coords.latitude, longitude: pos.coords.longitude }, zoom: 10 };
                //$scope.setMarker(pos.coords.latitude, pos.coords.longitude);
                $scope.setMapCenterAndMarker(pos.coords.latitude, pos.coords.longitude);

                $ionicLoading.hide();
            }, function (error) {
                alert('Unable to get location: ' + error.message);
            });
        };

        $scope.setMapCenterAndMarker = function(lat, long)
        {
            $scope.map = { center: { latitude: lat, longitude: long }, zoom: 15 };
            $scope.setMarker(lat, long);

        }

        var events = {
            places_changed: function (searchBox) {
                var place = searchBox.getPlaces();
                if (!place || place == 'undefined' || place.length == 0) {
                    console.log('no place data :(');
                    return;
                }

                $scope.map = {
                    "center": {
                        "latitude": place[0].geometry.location.lat(),
                        "longitude": place[0].geometry.location.lng()
                    },
                    "zoom": 18
                };

                $scope.setMarker(place[0].geometry.location.lat(), place[0].geometry.location.lng());
               
            }
        };
        $scope.searchbox = { template: 'searchbox.tpl.html', events: events };
        // $scope.searchBox = { template: 'searchBox.template.html', events: searchBoxEvents, parentdiv: 'searchBoxParent' };

        //$scope.searchbox = { events: events };


        // MAPSSSSSS

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

    .controller('MapCtrl', function ($scope) {
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
