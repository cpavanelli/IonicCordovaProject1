angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $ionicModal, DashService) {
    $scope.dashItems = [{ Nome: 'Carregando...' }];
    $scope.nextEvents = [{ Nome: 'Carregando...' }];


    $scope.refreshDash = function () {
        DashService.getRecent().then(function (_d) {
            $scope.dashItems = _d;
        });

        DashService.getNextEvents().then(function (_e) {
            $scope.nextEvents = _e;
        });

        $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.getLink = function (_item) {
        if (_item.IsRestaurante) {
            return "#/tab/restaurante/" + _item.ID
        }
    }

    $scope.refreshDash();

})

.controller('MapaCtrl', function ($scope, $ionicModal, $ionicLoading, FourFactory) {

    $scope.markers = [];

    $scope.loadRestaurantesForMap = function () {
        FourFactory.getAll().then(function (_r) {
            $scope.restaurantes = _r;

            $scope.setMarkers();

        });

    }

    $scope.setMarkers = function () {

        for (var i = 0; i < $scope.restaurantes.length; i++) {
            if ($scope.restaurantes[i].Localizacao != null) {

               // $scope.markers.push({ latitude: $scope.restaurantes[i].Localizacao.split('|')[0], longitude: $scope.restaurantes[i].Localizacao.split('|')[1] });
                var newMarker = {
                    id: i+1,
                    coords:
                    {
                        latitude: $scope.restaurantes[i].Localizacao.split('|')[0],
                        longitude: $scope.restaurantes[i].Localizacao.split('|')[1]
                    }
                };

                $scope.markers.push(newMarker);
            }
        }

    }

    $scope.centerOnMe = function () {
        $scope.loading = $ionicLoading.show({
            content: 'Getting current location...',
            showBackdrop: false
        });
        navigator.geolocation.getCurrentPosition(function (pos) {

            $scope.setMapCenterAndMarker(pos.coords.latitude, pos.coords.longitude);
            $scope.loadRestaurantesForMap();
            $ionicLoading.hide();

        }, function (error) {
            $ionicLoading.hide();
            alert('Unable to get location: ' + error.message);
            $scope.loadRestaurantesForMap();
        });
    };

    $scope.setMarker = function (lat, long) {
        $scope.marker = {
            id: 0,
            coords: {
                latitude: lat,
                longitude: long
            },
            options: { draggable: true }
        };
    }

    $scope.setMapCenterAndMarker = function (lat, long) {
        $scope.map = { center: { latitude: lat, longitude: long }, zoom: 13 };
        $scope.setMarker(lat, long);

    }

    // LOAD RESTAURANTES



    $scope.centerOnMe();

})

.controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})


.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
