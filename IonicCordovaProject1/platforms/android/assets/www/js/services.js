angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.factory('FourFactory', function () {
  var restaurantes = [
              { nome: 'um', id: 1, cozinha: "Burger" },
              { nome: 'dois', id: 2, cozinha: "Japones" },
              { nome: 'tres', id: 3, cozinha: "Italiano" },
              { nome: 'quatro', id: 4, cozinha: "Burger" }
    ];


  return {
      getAll: function () {
          return restaurantes;
      },
      remove: function (restaurante) {
          restaurantes.splice(restaurantes.indexOf(restaurante), 1);
      },
      add: function (restaurante) {
          restaurante.id = 5;
          restaurantes.push(restaurante);
      },
      get: function (restauranteId) {
          for (var i = 0; i < restaurantes.length; i++) {
              if (restaurantes[i].id === parseInt(restauranteId)) {
                  return restaurantes[i];
              }
          }
          return null;
      }
  };


})

;
