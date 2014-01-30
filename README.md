Meteor-subscriber [![Build Status](https://travis-ci.org/geekyme/meteor-subscriber.png?branch=master)](https://travis-ci.org/geekyme/meteor-subscriber)
=====

I make several landing pages for my own ideas and I always need a quick way to collect emails. This package solves that problem by providing a super easy way to add an email 'subscribe' form to your project pages. 

Installation
====
Simply 
```mrt install subscriber```

Then add the template to your project
```{{> subscriberClassic}}```

Demo
====
[DEMO installed with BS3](https://subscriber.meteor.com/)

[Repository](https://github.com/geekyme/meteor-subscriber-demo)

Features
====
* Template fills 100% of its container, so wrap a container around it with your desired width
* Inserts a document into collection ```subscribers``` with properties ```email``` & ```joined```. 
* Insertion method uses a meteor method called ```insertSubscriber``` that takes an email as an argument. 
* Email supplied by user is regex tested
* The date is computed at the server side
* show status after pressing subscribe button to show success / failure
* In your own app code you can access the collection of subscribers with ```Subscribers```, then you can write further hooks or allow / deny callbacks on the collection.
* Doesn't require BS3, but recommended since BS3 polish up some styles

Todo
====
* Some customization options