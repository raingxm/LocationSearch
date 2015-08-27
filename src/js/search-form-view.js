var SearchFormView = Backbone.View.extend({
    initialize: function() {
        this.template = $('#search-form').html();
    },
    el: '#searchForm',
    render: function() {
        var template = _.template(this.template);
        this.$el.html(template());
        return this.$el;
    }
});
