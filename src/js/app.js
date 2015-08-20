
;(function(exports) {

    var BASE_URL = 'http://location-backend-service.herokuapp.com/locations';

    exports.init = function() {
        $('#searchButton').click(function() {
            exports.fetchCity($('#locationInput').val());
        });

        $('#searchResults').on('click','.results a', function(e) {
            e.preventDefault();
            var likedCity = $(e.target).siblings('h5').text();
            exports.renderLikedCity(likedCity);
        });
    };

    exports.fetchCity = function(cityName) {
        $.get(exports.getServerUrl(cityName), function(data) {
            _.each(data, exports.renderCity);
        });
    };

    exports.renderCity = function(eachCity) {
        var template = _.template('<div class="results"><div class="panel large-12 columns">' +
            '<h5><%= name %></h5><h6><%= description %></h6>' +
            '<a href="#" class="like button tiny right">Like</a></div></div>');
        var content = template({name: eachCity.name,
                        description: eachCity.description});
        $('#searchResults').append($(content));
    };

    exports.renderLikedCity = function(likedCity) {
        var template = _.template('<li class="like">Liked <%= name %></li>');
        $('#likedPlaces ul').append($(template({name: likedCity})));
    };

    exports.getServerUrl = function(cityName) {
        return cityName === '' ? BASE_URL : BASE_URL + '?name=' + cityName;
    };

})(this);