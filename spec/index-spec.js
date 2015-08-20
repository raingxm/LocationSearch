describe('helloWorld', function(){
  'use strict';

  beforeEach(function() {
    var f = jasmine.getFixtures();
    f.fixturesPath = 'base/spec/fixtures';
    loadFixtures('myfixture.html');
  });

  afterEach(function() {
    var f = jasmine.getFixtures();
    f.cleanUp();
    f.clearCache();
  });

  it('should be true', function(){
    expect($('#likedPlaces ul li').size()).toBe(1);
  });

  it('should get server url base on input cityName', function() {
    expect(getServerUrl('')).
        toBe('http://location-backend-service.herokuapp.com/locations');
  });
});
