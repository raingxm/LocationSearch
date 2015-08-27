describe('like test', function(){
  'use strict';
  var like;
  beforeEach(function() {
    var f = jasmine.getFixtures();
    f.fixturesPath = 'base/spec/fixtures';
    loadFixtures('myfixture.html');
    like = new Like($('#likedPlaces nav ul'));
  });

  afterEach(function() {
    var f = jasmine.getFixtures();
    f.cleanUp();
    f.clearCache();
  });

  it('Like section should have add method add like city', function() {
    expect(like.likes.length).toBe(0);
    like.add('xian');
    expect(like.likes.length).toBe(1);
  });

  it('Like could render itself', function() {
    expect($('#likedPlaces nav ul li').size()).toBe(1);
    like.add('beijing');
    like.add('xian');
    like.render();
    expect($('#likedPlaces nav ul li').size()).toBe(3);
  });
});
