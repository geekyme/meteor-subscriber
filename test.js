Tinytest.add("Subscribers collection exist", function(test){
	test.equal(Subscribers.find().count(), 0);
});

Tinytest.add("insertSubscriber method works", function(test){
	var count = Subscribers.find().count();
	var email = 'myemail@example.com';
	Meteor.call('insertSubscriber', email, function(err, id){
		// remove the inserted subscriber after a while
		Meteor.setTimeout(function(){Subscribers.remove(id)}, 1000);
	});
	var newCount = Subscribers.find().count();
	test.equal(newCount, count+1);
});