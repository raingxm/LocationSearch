describe('helloWorld', function(){
  'use strict';

  it('should be true', function(){
    expect(true).toBe(true);
  });

  it('should get server url base on input cityName', function() {
    expect(getServerUrl('')).toBe('http://location-backend-service.herokuapp.com/locations');
  });
});
