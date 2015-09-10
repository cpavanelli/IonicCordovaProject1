angular.module('starter.services', [])

.factory('FourFactory', function ($http, $timeout, $q) {
    //var server = "http://localhost:1637/";
    var server = "http://micawcf.azurewebsites.net/";
    //var server = "http://testeapp2.azurewebsites.net/";
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
                      return restaurantes;
                  });
        },
        remove: function (restaurante) {
            restaurantes.splice(restaurantes.indexOf(restaurante), 1);

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

            $.ajax({
                type: "POST",
                url: server + "MicaService.svc/SaveRestaurante/0",
                data: JSON.stringify(restaurante),
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

            $.ajax({
                type: "POST",
                url: server + "MicaService.svc/SaveRestaurante/0",
                data: JSON.stringify(restaurante),
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
                if (restaurantes[i].ID === parseInt(restauranteId)) {
                    return restaurantes[i];
                }
            }
            return null;
        },
        getCozinhas: function () {
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

;


