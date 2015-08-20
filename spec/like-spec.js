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

  it('click search button should fetch city data from server', function() {
    spyOn(window, 'fetchCity');
    $('#searchButton').click();
    expect(fetchCity).toHaveBeenCalled();
  });

  it('call renderCity should add city in web page', function() {
    expect($('#searchResults .results').size()).toBe(1);
    renderCity({name: 'xian', description: 'nice place'});
    expect($('#searchResults .results').size()).toBe(2);
    expect($('#searchResults .results').last().find('h5').text()).toBe('xian');
    expect($('#searchResults .results').last().find('h6').text()).toBe('nice place');
  });

});
