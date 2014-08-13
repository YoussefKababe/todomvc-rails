TodosRails.Router.map(function() {
	this.resource('todos', { path: '/' }, function() {
		this.route('active', { path: 'todos/active' });
		this.route('completed', { path: 'todos/completed' });
	});
});

TodosRails.Router.reopen({
	location: 'history',
	rootURL: '/'
});

TodosRails.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});

TodosRails.TodosIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('todos');
		// return this.store.find('todo');
	}
});

TodosRails.TodosActiveRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('isCompleted');
		})
	},
	renderTemplate: function(controller) {
		this.render('todos/index', {controller: controller});
	}
});

TodosRails.TodosCompletedRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return todo.get('isCompleted');
		})
	},
	renderTemplate: function(controller) {
		this.render('todos/index', {controller: controller});
	}
});