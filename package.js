Package.describe({
	summary: "Plug and play package for collecting emails. Use this for landing pages or newsletter subscription."
})

Package.on_use(function(api, where){
	api.use(['minimongo', 'mongo-livedata', 'templating', 'handlebars', 'jquery'], 'client');
	api.add_files(['collection.js'], ['client', 'server']);
	api.add_files(['templates/classic.html', 'templates/classic.js'], 'client');
})

// todo test
Package.on_test(function(api) {
  // api.use('errors', 'client');
  // api.use(['tinytest', 'test-helpers'], 'client');  

  // api.add_files('errors_tests.js', 'client');
});
