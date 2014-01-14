Template.subscriberClassic.events({
	'submit .subscriber-form': function (e) {
		e.preventDefault();
		var target = e.target;
		var email = $(target).find('input').val(); // fetch the input value
		var date = new Date().getTime(); // in epoch milliseconds
		$(target).parent().addClass('animate');
		Subscribers.insert({email: email, joined: date}, function(err, id){
			if(err){ 
				Session.set('subscribeStatus', {
					message: '<b>Damn</b>. An error occured. Try again later?',
					class: 'alert-danger'
				})
				console.log(err)			
			}else{
				console.log('successfully inserted subscriber: '+id);
				$(target).find('input').val("");
				$(target).parent().removeClass('animate');
				Session.set('subscribeStatus', {
					message: 'Good call <b>champ</b>! We\'ll keep you updated.',
					class: 'alert-success'
				})
			}			
		});
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