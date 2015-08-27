describe('search result test', function(){
  'use strict';
  var searchResult;
  beforeEach(function() {
    var f = jasmine.getFixtures();
    f.fixturesPath = 'base/spec/fixtures';
    loadFixtures('myfixture.html');
    searchResult = new SearchResult($('#searchResults'));
  });

  afterEach(function() {
    var f = jasmine.getFixtures();
    f.cleanUp();
    f.clearCache();
  });

  it('get search result data', function() {
    
  });

});
