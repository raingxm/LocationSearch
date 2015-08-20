describe('Location test', function(){
  'use strict';

  beforeEach(function() {
    var f = jasmine.getFixtures();
    f.fixturesPath = 'base/spec/fixtures';
    loadFixtures('myfixture.html');
    init();
  });

  afterEach(function() {
    var f = jasmine.getFixtures();
    f.cleanUp();
    f.clearCache();
  });

  it('should get server url base on input cityName', function() {
    var cityName = '';
    expect(getServerUrl(cityName)).
        toBe('http://location-backend-service.herokuapp.com/locations');
    cityName = 'Melbourne' ;   
    expect(getServerUrl(cityName)).
        toBe('http://location-backend-service.herokuapp.com/locations' + 
          '?name=Melbourne');
  });


  it('should be true', function() {
    expect($('#likedPlaces ul li').size()).toBe(1);
  });

  it('click search button should fetch city data from server', function() {
    spyOn(window, 'fetchCity');
    $('#searchButton').click();
    expect(fetchCity).toHaveBeenCalled();
  });

});
