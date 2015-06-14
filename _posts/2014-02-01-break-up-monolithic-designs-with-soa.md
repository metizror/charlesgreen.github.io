---
layout: post
date: 2014-02-01
title: 'Break up Monolithic Designs w/ SOA'
description: 'Break up monolithic designs with SOA to increase supportability and modularity.'
categories: devops
author_name: Charles Green
author_url: /author/charles
author_avatar: charles
show_avatar: true
read_time: 3
feature_image: feature-wolf
show_related_posts: true
square_related: recommend-woods
---

Initially when I first started developing applications using Ruby and Rails I did as many people have done and started down the path of building large monolithic applications. The kind with tightly coupled databases and true to form with fat models and skinny controllers. I also relied heavily on using code generators, a couple dozen different gems, and static config files just to make initial development faster. Over the long run however this turned out to be hidden support debut that would need to be repaid during the life of the application.  

Enter software development from the SOA perspective. After supporting (read fighting for my life with scars as proof) I quickly embraced a few cored SOA design principles. And while I agree that there is no one single "best" way to developing applications I do believe that some ways do suck much more than others.

In many cases I now start with messaging system at the core of the application. For example using RabbitMQ and then developing and exposing other functionality like authentication, databases, analytics, payment, email, etc. as much smaller individual modules or applications that are focused on doing one thing very week while sandboxing them and removing dependencies.  Between services and the message queues are producers and consumers that can be scaled up or down as needed without restriction.

The cost of upfront developing is a bit more however it is easily offset by the ease of working in teams with each member being able to focus on individual components. Not to mention the reduced cost of longterm support, increased stability, and the overall happiness factor received from customers in having a system that's almost always online.  

Here is a minimalistic 30,000 foot example of what a high level design would look like along with some of my preferred technologies.

![Simple SOA Design with Preferred Technology Stack]({{ site.url }}/assets/images/soa_design.png)


Want to chat? Drop me a line at [@charles_green](http://www.twitter.com/charles_green) and say hello.
