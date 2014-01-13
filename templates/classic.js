Template.subscriberClassic.events({
	'submit .subscriber-form': function (e) {
		e.preventDefault();
		var target = e.target;
		var email = $(target).find('input').val(); // fetch the input value
		var date = new Date().getTime(); // in epoch milliseconds
		Subscribers.insert({email: email, joined: date}, function(err, id){
			if(err) throw Meteor.Meteor.Error(500, 'Something crop up. Check the error object', err);
			console.log(id);
			$(target).find('input').val("");
		});
	}
});