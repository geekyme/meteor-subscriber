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
* populate collection 'subscribe' with documents (properties: email, timestamps)
* show status after pressing subscribe button to show success / failure

TODO
====
* Design / better looking templates
* Tests
* Some customization options