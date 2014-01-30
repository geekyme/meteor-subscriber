Package.describe({
	summary: "Plug and play package for collecting emails. Use this for landing pages or newsletter subscription."
})

Package.on_use(function(api, where){
	api.use(['minimongo', 'mongo-livedata', 'templating', 'handlebars', 'jquery', 'stylus'], 'client');
	api.add_files(['collection.js'], ['client', 'server']);
	api.add_files(['templates/classic.html', 'templates/classic.js', 'styles.styl'], 'client');

	if(api.export) api.export('Subscribers')
})

// todo test
Package.on_test(function(api) {
  api.use('subscriber', ['client', 'server']);
  api.use(['tinytest', 'test-helpers']);  

  api.add_files('test.js', ['client', 'server']);
});
