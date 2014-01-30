Template.subscriberClassic.events({
	'submit .subscriber-form': function (e) {
		e.preventDefault();
		var target = e.target;
		var email = $(target).find('input').val(); // fetch the input value
		Meteor.call('insertSubscriber', email, function(err, id){
			if(err){ 
				Session.set('subscribeStatus', {
					message: err.reason,
					class: 'alert-danger'
				})
				console.log(err)			
			}else{
				console.log('successfully inserted subscriber: '+id);
				$(target).find('input').val("");
				Session.set('subscribeStatus', {
					message: 'Good call <b>champ</b>! We\'ll keep you updated.',
					class: 'alert-success'
				})
			}
		})
	}
});

Template.subscriberClassic.helpers({
	status: function () {
		// ...
		return Session.get('subscribeStatus');
	},
	message: function(){
		return Session.get('subscribeStatus').message;
	},
	class: function(){
		return Session.get('subscribeStatus').class;
	}
});