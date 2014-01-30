if(Meteor.isServer){
	Subscribers.allow({
		remove: function(){
			return true
		}
	})
}

if(Meteor.isClient){

	Tinytest.add("Meteor-Subscriber - subscriber collection exist", function(test){
		test.instanceOf(Subscribers, Meteor.Collection)
	});

	testAsyncMulti("Meteor-Subscriber - insertSubscriber method works", [
		function(test, expect){
			var email = 'myemail@example.com';
			Meteor.call('insertSubscriber', email, expect(function(err, id){
				test.isFalse(err) // falsy value includes undefined
				test.isTrue(id) // truthy value includes a real string
				Subscribers.remove(id); // remove the inserted email after testing
			}));			
		}
	]);
}