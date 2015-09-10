
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