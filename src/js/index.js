;(function(exports) {

    var BASE_URL = 'http://location-backend-service.herokuapp.com/locations';

    exports.init = function() {
        $('#searchButton').click(function() {
            exports.fetchCity($('#locationInput').val());
        });
    };

    exports.fetchCity = function(cityName) {

    }

    exports.getServerUrl = function(cityName) {
        return cityName === '' ? BASE_URL : BASE_URL + '?name=' + cityName;
    }

})(this);