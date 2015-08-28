// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

//.config(['$ionicConfigProvider', function ($ionicConfigProvider) {

//    $ionicConfigProvider.tabs.position('bottom'); // other values: top

//}])


.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
      })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })

    .state('tab.chats', {
        url: '/chats',
        views: {
            'tab-chats': {
                templateUrl: 'templates/tab-chats.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.chat-detail', {
          url: '/chats/:chatId',
          views: {
              'tab-chats': {
                  templateUrl: 'templates/chat-detail.html',
                  controller: 'ChatDetailCtrl'
              }
          }
      })

      .state('tab.four', {
          url: '/four',
          views: {
              'tab-four': {
                  templateUrl: 'templates/tab-four.html',
                  controller: 'FourCtrl'
              }
          }
      })

      .state('tab.restaurante', {
          url: '/restaurante/:restauranteId',
          views: {
              'tab-four': {
                  templateUrl: 'templates/restauranteEdit.html',
                  controller: 'RestauranteEditCtrl'
              }
          }
      })

              .state('tab.media', {
                  url: '/media',
                  views: {
                      'tab-media': {
                          templateUrl: 'templates/tab-media.html',
                          controller: 'MediaCtrl'
                      }
                  }
              })

      .state('tab.mediaEdit', {
          url: '/media/:mediaId',
          views: {
              'tab-media': {
                  templateUrl: 'templates/mediaEdit.html',
                  controller: 'MediaEditCtrl'
              }
          }
      })

              .state('tab.evento', {
                  url: '/evento',
                  views: {
                      'tab-evento': {
                          templateUrl: 'templates/tab-evento.html',
                          controller: 'EventoCtrl'
                      }
                  }
              })

      .state('tab.eventoEdit', {
          url: '/evento/:eventoId',
          views: {
              'tab-evento': {
                  templateUrl: 'templates/eventoEdit.html',
                  controller: 'EventoEditCtrl'
              }
          }
      })

    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

});
