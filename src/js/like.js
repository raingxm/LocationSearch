var Like = function($ele) {
    this.likes = [];
    this.ele = $ele;
    this.template = _.template('<li class="like"><%= address %></li>');
};

Like.prototype.add = function(place) {
    this.likes.push(place);
};

Like.prototype.render = function() {
    var content = _.map(this.likes, function(like) {
        return this.template({address:like});
    }.bind(this));

    $(this.ele.find('li')).empty();
    this.ele.append(content);
}
