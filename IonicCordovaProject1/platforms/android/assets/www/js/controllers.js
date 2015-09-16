angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, DashService) {
    $scope.dashItems = [{ Nome: 'Carregando...' }];
    $scope.nextEvents = [{ Nome: 'Carregando...' }];
    


    DashService.getRecent().then(function (_d) {
        $scope.dashItems = _d;
    });

    DashService.getNextEvents().then(function (_e) {
        $scope.nextEvents = _e;
    });
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
