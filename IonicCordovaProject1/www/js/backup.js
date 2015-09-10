
//var restaurantes = [
//            { Nome: 'um', ID: 1, Cozinha: "Burger", Visto1: true },
//            { Nome: 'dois', ID: 2, Cozinha: "Japonesa", Visto1: false },
//            { Nome: 'tres', ID: 3, Cozinha: "Italiana", Visto1: false },
//            { Nome: 'quatro', ID: 4, Cozinha: "Burger", Visto1: false }
//];


//WCFJSON();



//function list() {
//    $.ajax(server + "MicaService.svc/Restaurantes", {
//        success: function (data) {
//            $scope.restaurantes = data;
//             alert(data.length);
//        }
//        //,contentType: "application/soap+xml; charset=utf-8"
//    });
//}

//var restauranteEntity = {
//    "Nome": "aaaaa",
//    "Bairro": "safsdf",
//    "Nota": 10,
//    "Visto1": false,
//    "Visto2": false,
//    "Cozinha": "Japonesa",
//    "ID": 0
//};
//function save() {
//    $.ajax({
//        type: "POST",
//        url: server + "MicaService.svc/SaveRestaurante/0",
//        data: JSON.stringify(restauranteEntity),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        processData: true,
//        success: function (data, status, jqXHR) {
//            alert("success..." + data);
//        },
//        error: function (xhr) {
//            alert('error' + xhr.responseText);
//        }
//    });
//}

//function deleteItem() {
//    $.ajax({
//        type: "POST",
//        url: server + "MicaService.svc/DeleteRestaurante",
//        data: JSON.stringify(restauranteEntity),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        processData: true,
//        success: function (data, status, jqXHR) {
//            alert("success..." + data);
//        },
//        error: function (xhr) {
//            alert('error' + xhr.responseText);
//        }
//    });
//}


//function getNewId() {
//    var highest = 0;
//    jQuery.each(restaurantes, function (index, element) {
//        if (restaurantes[index].id > highest)
//            highest = restaurantes[index].id;
//    });
//    return highest + 1;
//}



//.factory('Chats', function () {
//    // Might use a resource here that returns a JSON array

//    // Some fake testing data
//    var chats = [{
//        id: 0,
//        name: 'Ben Sparrow',
//        lastText: 'You on your way?',
//        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//    }, {
//        id: 1,
//        name: 'Max Lynx',
//        lastText: 'Hey, it\'s me',
//        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//    }, {
//        id: 2,
//        name: 'Andrew Jostlin',
//        lastText: 'Did you get the ice cream?',
//        face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
//    }, {
//        id: 3,
//        name: 'Adam Bradleyson',
//        lastText: 'I should buy a boat',
//        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//    }, {
//        id: 4,
//        name: 'Perry Governor',
//        lastText: 'Look at my mukluks!',
//        face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
//    }];

//    return {
//        all: function () {
//            return chats;
//        },
//        remove: function (chat) {
//            chats.splice(chats.indexOf(chat), 1);
//        },
//        get: function (chatId) {
//            for (var i = 0; i < chats.length; i++) {
//                if (chats[i].id === parseInt(chatId)) {
//                    return chats[i];
//                }
//            }
//            return null;
//        }
//    };
//})
