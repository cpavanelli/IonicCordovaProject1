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


.factory('FourFactory', function ($http) {
    var restaurantes = [
                { nome: 'um', id: 1, cozinha: "Burger", visitado: true },
                { nome: 'dois', id: 2, cozinha: "Japonesa", visitado: false },
                { nome: 'tres', id: 3, cozinha: "Italiana", visitado: false },
                { nome: 'quatro', id: 4, cozinha: "Burger", visitado: false }
    ];


    var cozinhas = [
            {nome: 'Todas', id: null},
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




   // var cozinhas = ['Todas', 'Arabe', 'Burger', 'Chinesa', 'Doces e Salgados', 'Italiana', 'Japonesa', 'Indiana', 'Vegetariana', 'Variada'];


    //var server = "http://localhost:6392/";
    //var server = "http://micaapp.azurewebsites.net/";
    //WCFJSON();


    //var testeDoido = $http.get(server + "Service1.svc/GetDate");

    //$.ajax( server + "Service1.svc/GetDate", {
    //    success: function (data) {
    //        alert(data);
    //    },
    //    error: function () {

    //    },
    //    processData: false,
    //    crossDomain: true
    //});

    //$.post(server +  + "Service1.svc/GetData", { value: "hello"},
    //    function (returnedData) {
    //        alert(returnedData);
    //    }
    //    );

    //content-type = application/soap+xml; charset=utf-8

    //$.ajax(server + "Service1.svc/GetDate", {
    //        success: function (data) {
    //            alert(data);
    //        },
    //        contentType: "application/soap+xml; charset=utf-8"
    //});


    //$.ajax({
    //    type: "GET",

    //    //url: server + "Service1.svc/GetDate",
    //    url: server+"WebService1.asmx/HelloWorld",
    //    //contentType: "application/json; charset=utf-8",
    //    success: function (data) {
    //        alert(data);
    //    }
    //});




    //var Type;
    //var Url;
    //var Data;
    //var ContentType;
    //var DataType;
    //var ProcessData;


    //function WCFJSON() {
    //    var userid = "1";
    //    Type = "POST";
    //    Url = server+ "Service1.svc/GetUser";
    //    Data = '{"Id": "' + userid + '"}';
    //    ContentType = "application/json; charset=utf-8";
    //    DataType = "json"; varProcessData = true;
    //    CallService();
    //}

    //// Function to call WCF  Service       
    //function CallService() {
    //    $.ajax({
    //        type: Type, //GET or POST or PUT or DELETE verb
    //        url: Url, // Location of the service
    //        data: Data, //Data sent to server
    //        contentType: ContentType, // content type sent to server
    //        dataType: DataType, //Expected data format from server
    //        processdata: ProcessData, //True or False
    //        crossDomain: true,
    //        success: function (msg) {//On Successfull service call
    //            alert(msg);
    //        },
    //        error: function (msg) {
    //            alert('erro');
    //        }// When Service call fails
    //    });
    //}



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
