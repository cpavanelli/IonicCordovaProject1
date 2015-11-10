var server = "http://micawcf.azurewebsites.net/";
//var server = "http://localhost:1637/";

// ratings object helper
function createRatingsObj(cssStar, _rating, _minRating, _readOnly, _callback)
{
    return {
        iconOn: 'ion-ios-star ' + cssStar,
        iconOff: 'ion-ios-star-outline ' + cssStar,
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor: 'rgb(200, 100, 100)',
        rating: _rating,
        minRating: _minRating,
        readOnly: _readOnly,
        callback: _callback
    }
}

function parseDateTimeFromServer(object)
{
    if (object.hasOwnProperty("VistoEm") && object.VistoEm != null)
    {
        var date = new Date(parseInt(object.VistoEm.substr(6)));   
        object.VistoEm = date;
    }

    if (object.hasOwnProperty("Registrado") && object.Registrado != null) {
        var date = new Date(parseInt(object.Registrado.substr(6)));
        object.Registrado = date;
    }

    if (object.hasOwnProperty("Quando") && object.Quando != null) {
        var date = new Date(parseInt(object.Quando.substr(6)));
        object.Quando = date;
    }
}

function parseDateTimeFromJS(object) {
    if (object.hasOwnProperty("VistoEm") && object.VistoEm != null) {
        var eventDate = new Date(object.VistoEm);
        object.VistoEm = { date: "/Date(" + eventDate.getTime() + ")/" }.date;
    }

    if (object.hasOwnProperty("Registrado") && object.Registrado != null) {
        var eventDate = new Date(object.Registrado);
        object.Registrado = { date: "/Date(" + eventDate.getTime() + ")/" }.date;
    }
}

function twoDigitsString(number)
{
    return ("0" + number).slice(-2);
}


//var regexIso8601 = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)/;

//function convertDateStringsToDates(input) {
//    // Ignore things that aren't objects.
//    if (typeof input !== "object") return input;

//    for (var key in input) {

//        if (!input.hasOwnProperty(key)) continue;

//        if (key == 'VistoEm') {
//            alert('vish');

//            var value = input[key];

//            var hello = value.DateWCF('dd-MM-yyyy');
//            alert(hello);

//        }

//        //var value = input[key];
//        //var match;

//        //// Check for string properties which look like dates.
//        //if (typeof value === "string" && (match = value.match(regexIso8601))) {
//        //    var milliseconds = Date.parse(match[0])
//        //    if (!isNaN(milliseconds)) {
//        //        input[key] = new Date(milliseconds);
//        //    }
//        //} else if (typeof value === "object") {
//        //    // Recurse into object
//        //    convertDateStringsToDates(value);
//        //}
//    }
//}
