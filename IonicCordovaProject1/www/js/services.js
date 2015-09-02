angular.module('starter.services', [])

.factory('Chats', function () {
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
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
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
                { nome: 'um', id: 1, cozinha: "Burger", visitado : true },
                { nome: 'dois', id: 2, cozinha: "Japones", visitado : false },
                { nome: 'tres', id: 3, cozinha: "Italiano", visitado : false },
                { nome: 'quatro', id: 4, cozinha: "Burger", visitado : false }
    ];

    function getNewId() {
        var highest = 0;
        jQuery.each(restaurantes, function (index, element) {
            if (restaurantes[index].id > highest)
                highest = restaurantes[index].id;
        });
        return highest + 1;
    }

    return {
        getAll: function () {
            return restaurantes;
        },
        remove: function (restaurante) {
            restaurantes.splice(restaurantes.indexOf(restaurante), 1);
        },
        add: function (restaurante) {
            restaurante.id = getNewId();
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


.factory('EventoFactory', function () {
    var eventos = [
                { nome: 'Orquestra X', id: 1, data: "01/01/2015" },
                { nome: 'Evento Y', id: 2, data: "02/01/2014" },
                { nome: 'Show B', id: 3, data: "03/01/2013" },
                { nome: 'Etc 1235', id: 4, data: "01/01/2010" }
    ];

    function getNewId() {
        var highest = 0;
        jQuery.each(eventos, function (index, element) {
            if (eventos[index].id > highest)
                highest = eventos[index].id;
        });
        return highest + 1;
    }

    return {
        getAll: function () {
            return eventos;
        },
        remove: function (evento) {
            eventos.splice(eventos.indexOf(evento), 1);
        },
        add: function (evento) {
            evento.id = getNewId();
            eventos.push(evento);
        },
        get: function (eventoId) {
            for (var i = 0; i < eventos.length; i++) {
                if (eventos[i].id === parseInt(eventoId)) {
                    return eventos[i];
                }
            }
            return null;
        }

    };
})


.factory('MediaFactory', function () {
    var medias = [
                { nome: 'Filme 1', id: 1, tipo: "Filme" },
                { nome: 'Filme 2', id: 2, tipo: "Serie" },
                { nome: 'Filme 3', id: 3, tipo: "Filme" },
                { nome: 'Filme 4', id: 4, tipo: "Filme" }
    ];

    function getNewId() {
        var highest = 0;
        jQuery.each(medias, function (index, element) {
            if (medias[index].id > highest)
                highest = medias[index].id;
        });
        return highest + 1;
    }

    return {
        getAll: function () {
            return medias;
        },
        remove: function (media) {
            medias.splice(medias.indexOf(media), 1);
        },
        add: function (media) {
            media.id = getNewId();
            medias.push(media);
        },
        get: function (mediaId) {
            for (var i = 0; i < medias.length; i++) {
                if (medias[i].id === parseInt(mediaId)) {
                    return medias[i];
                }
            }
            return null;
        }

    };
})

;
