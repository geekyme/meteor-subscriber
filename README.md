Meteor-subscriber
=====

I make several landing pages for my own ideas and I always need a quick way to collect emails. This package solves that problem by providing a super easy way to add an email 'subscribe' form to your project pages. 

Simply do this
```mrt install subscriber```

Add the template to your project
```{{> subscriberClassic}}```

Whenever someone fills in the form and hits the 'subscribe' button, their email along with the timestamp gets saved into a collection named 'subscribers'

As this is just an initial version, the template is not very pretty. I intend to polish up the design over the next week. 

TODO
====
* Design / better looking templates
* Tests
* Some customization options