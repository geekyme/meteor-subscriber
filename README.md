Meteor-subscriber
=====

I make several landing pages for my own ideas and I always need a quick way to collect emails. This package solves that problem by providing a super easy way to add an email 'subscribe' form to your project pages. 

Simply do this
```mrt install subscriber```

Add the template to your project
```{{> subscriberClassic}}```

The size of the template is made to fill 100% of its container, so wrap a container around it with your desired width.

This package does not require bootstrap-3, but I recommend it as the framework does polish up some styles to make buttons to look nicer for example.

[DEMO installed with BS3](https://subscriber.meteor.com/)

FEATURES
====
* Easy installation
* Inserts a document into collection 'subscribers' with properties 'email' & 'joined'. 
* Insertion method uses a meteor method called 'insertSubscriber' that takes an email as an argument. 
* Email supplied by user is regex tested
* The date is computed at the server side
* show status after pressing subscribe button to show success / failure
* In your own app code you can access the collection of subscribers with 'Subscribers', then you can write further hooks or allow / deny callbacks on the collection.

TODO
====
* Tests
* Some customization options