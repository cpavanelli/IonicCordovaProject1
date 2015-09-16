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

.directive('ionicRatings', ionicRatings)

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

// ratings object
function ionicRatings() {
    return {
        restrict: 'AE',
        replace: true,
        template: '<div class="text-center ionic_ratings">' +
          '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(1)" ng-show="rating < 1" ng-class="{\'read_only\':(readOnly)}"></span>' +
          '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(1)" ng-show="rating > 0" ng-class="{\'read_only\':(readOnly)}"></span>' +
          '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(2)" ng-show="rating < 2" ng-class="{\'read_only\':(readOnly)}"></span>' +
          '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(2)" ng-show="rating > 1" ng-class="{\'read_only\':(readOnly)}"></span>' +
          '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(3)" ng-show="rating < 3" ng-class="{\'read_only\':(readOnly)}"></span>' +
          '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(3)" ng-show="rating > 2" ng-class="{\'read_only\':(readOnly)}"></span>' +
          '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(4)" ng-show="rating < 4" ng-class="{\'read_only\':(readOnly)}"></span>' +
          '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(4)" ng-show="rating > 3" ng-class="{\'read_only\':(readOnly)}"></span>' +
          '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(5)" ng-show="rating < 5" ng-class="{\'read_only\':(readOnly)}"></span>' +
          '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(5)" ng-show="rating > 4" ng-class="{\'read_only\':(readOnly)}"></span>' +
          '</div>',
        scope: {
            ratingsObj: '=ratingsobj'
        },
        link: function (scope, element, attrs) {

            //Setting the default values, if they are not passed
            scope.iconOn = scope.ratingsObj.iconOn || 'ion-ios-star';
            scope.iconOff = scope.ratingsObj.iconOff || 'ion-ios-star-outline';
            scope.iconOnColor = scope.ratingsObj.iconOnColor || 'rgb(200, 200, 100)';
            scope.iconOffColor = scope.ratingsObj.iconOffColor || 'rgb(200, 100, 100)';
            scope.rating = scope.ratingsObj.rating || 0;
            scope.minRating = scope.ratingsObj.minRating || 0;
            scope.readOnly = scope.ratingsObj.readOnly || false;


            //Setting the color for the icon, when it is active
            scope.iconOnColor = {
                color: scope.iconOnColor
            };

            //Setting the color for the icon, when it is not active
            scope.iconOffColor = {
                color: scope.iconOffColor
            };

            //Setting the rating
            scope.rating = (scope.rating > scope.minRating) ? scope.rating : scope.minRating;

            //Setting the previously selected rating
            scope.prevRating = 0;

            //Called when he user clicks on the rating
            scope.ratingsClicked = function (val) {
                if (scope.minRating !== 0 && val < scope.minRating) {
                    scope.rating = scope.minRating;
                } else {
                    scope.rating = val;
                }
                scope.prevRating = val;
                scope.ratingsObj.callback(scope.rating);
            };

            scope.setRating = function (_rating) {
                scope.rating = _rating;
                scope.prevRating = _rating;
            };
            
            scope.ratingsObj.setRating = scope.setRating;

            //Called when he user un clicks on the rating
            scope.ratingsUnClicked = function (val) {
                if (scope.minRating !== 0 && val < scope.minRating) {
                    scope.rating = scope.minRating;
                } else {
                    scope.rating = val;
                }
                if (scope.prevRating == val) {
                    if (scope.minRating !== 0) {
                        scope.rating = scope.minRating;
                    } else {
                        scope.rating = 0;
                    }
                }
                scope.prevRating = val;
                scope.ratingsObj.callback(scope.rating);
            };
        }
    }
}


//.config(["$httpProvider", function ($httpProvider) {
//    $httpProvider.defaults.transformResponse.push(function (responseData) {
//        convertDateStringsToDates(responseData);
//        return responseData;
//    });
//}])