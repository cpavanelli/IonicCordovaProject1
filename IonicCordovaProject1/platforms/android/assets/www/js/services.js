angular.module('starter.services', [])

.factory('FourFactory', function ($http, $timeout, $q) {
    var restaurantes = [{ Nome: 'Carregando...' }];

    var cozinhas = [
            { nome: 'Todas', id: null },
            { nome: 'Arabe', id: 'Arabe' },
            { nome: 'Burger', id: 'Burger' },
            { nome: 'Chinesa', id: 'Chinesa' },
            { nome: 'Doces e Salgados', id: 'Doces e Salgados' },
            { nome: 'Italiana', id: 'Italiana' },
            { nome: 'Japonesa', id: 'Japonesa' },
            { nome: 'Indiana', id: 'Indiana' },
            { nome: 'Vegetariana', id: 'Vegetariana' },
            { nome: 'Variada', id: 'Variada' }
    ];

    return {
        getAll: function () {
            return $http.get(server + "MicaService.svc/Restaurantes")
                  .then(function (result) {
                      restaurantes = result.data

                      jQuery.each(restaurantes, function (index, value) {
                          parseDateTimeFromServer(this);
                      });
                      return restaurantes;
                  });
        },
        remove: function (restaurante) {
            restaurantes.splice(restaurantes.indexOf(restaurante), 1);
            parseDateTimeFromJS(restaurante);
            $.ajax({
                type: "POST",
                url: server + "MicaService.svc/DeleteRestaurante",
                data: JSON.stringify(restaurante),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                processData: true
            });
        },
        add: function (restaurante) {
            var insertRestaurante = jQuery.extend(true, {}, restaurante);
            parseDateTimeFromJS(insertRestaurante);


            $.ajax({
                type: "POST",
                url: server + "MicaService.svc/SaveRestaurante/0",
                data: JSON.stringify(insertRestaurante),
                async: false,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                processData: true,
                success: function (data, status, jqXHR) {
                    restaurante.ID = data;
                    restaurantes.push(restaurante);
                }
            });
        },
        update: function (restaurante) {
            var insertRestaurante = jQuery.extend(true, {}, restaurante);
            parseDateTimeFromJS(insertRestaurante);

            $.ajax({
                type: "POST",
                url: server + "MicaService.svc/SaveRestaurante/0",
                data: JSON.stringify(insertRestaurante),
                async: false,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                processData: true,
                success: function (data, status, jqXHR) {
                }
            });
        },
        get: function (restauranteId) {
            for (var i = 0; i < restaurantes.length; i++) {
                if (restaurantes[i].ID == restauranteId) {
                    return restaurantes[i];
                }
            }
            return null;
        },
        getCozinhas: function (returnTodas) {
            if (!returnTodas) {
                return cozinhas.slice(1, cozinhas.length);
            }

            return cozinhas;
        },
        getCozinha: function (nome) {
            for (var i = 0; i < cozinhas.length; i++) {
                if (cozinhas[i].id === nome) {
                    return cozinhas[i];
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

.service('DashService', function ($http) {
    //var server = "http://localhost:1637/";

    this.getRecent = function () {
        return $http.get(server + "MicaService.svc/DashItems")
              .then(function (result) {
                  dashItems = result.data

                  jQuery.each(dashItems, function (index, value) {
                      parseDateTimeFromServer(this);
                  });
                  return dashItems;
              });
    }

    this.getNextEvents = function () {
        return $http.get(server + "MicaService.svc/GetNextEvents")
              .then(function (result) {
                  nextEvents = result.data

                  jQuery.each(nextEvents, function (index, value) {
                      parseDateTimeFromServer(this);
                  });
                  return nextEvents;
              });
    }
})

;


