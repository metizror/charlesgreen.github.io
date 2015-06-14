---
layout: post
date: 2014-02-05
title: 'Getting Down To Business With SOA &amp; New Open Source Projects'
description: 'Getting Down To Business With SOA &amp; New Open Source Projects'
categories: devops
author_name: Charles Green
author_url: /author/charles
author_avatar: charles
show_avatar: true
read_time: 3
feature_image: feature-wolf
show_related_posts: false
square_related: recommend-wolf
---

Over the last year I've been rethinking my approach to application development. So much so that this has grown from a simple idea into a down right obsession. And to make the most of this new found enthusiasm I've started stepping up my activity here and on GitHub.  Over the short-term you can expect to see one to two new posts per week focusing on Service-Oriented Architecture (SOA) design and best practices. These will include a mix of high level discussions and low level code examples.  

I've already started mapping out a few new open source projects for common services to help reduce the effort needed to build applications the right way. The projects will include an oAuth2 provider, oData provider, and an email service to be used with RabbitMQ. Most of these services will be written mostly in Ruby or a bit of node.js however it's important to keep in mind that taking an SOA approach lets us focus on producing and consuming messages using the best tool for the job rather than worry about the specific language we are using.

Without further delay I'd like to kick this series off with a brief overview of what to expect and to give you a look at what's important to me when it comes to development.


## Development Environment  
We all know that setting up a development environment is a very personal endeavor. So much so that you will not find any two environments alike even if they are for the same person. So I'm not going to try and connivence you how to setup yours. Instead I'm only going to share what works well for me. In the world of software development I initially started with VB back in the day and moved to C# so rightfully so Visual Studio was at the center of my world and to be completely honest I still believe it is by far the most feature rich and bug free development environment ever made. Funny enough however I spend most of my time using vi and TestMate. As for Java development I use Eclipse but I try my best to avoid it all together. If you share the same likes as I do then great. If not, there are 1000's of IDE and editors to choose from. If you got one you love I'd like to hear about it. If not keep trying them out and let me know which one rocks your world.

## Packages &amp; Dependencies  
Working mostly on a Mac I tend use Homebrew to install things like PostgreSQL, RabbitMQ, and any other out of the box application that's needed. I do this to make it easily reproducible with basic defaults so it makes it easier to work with other people on projects. From there I use package and dependency managers like Ruby Version Manager (rvm), Node Package Manager (npm), and NuGet in .NET. to install and manage the different libraries and languages. They make it easier to change environments to match the specific needs of the project as well as to upgrade to new versions as they are released.  

## Version Control  
Git with GitHub or GitLab. I prefer git CLI on Mac or GitStash on Windows. It gives me all the integration I need.  

## Documentation  
A quick word on 3rd party libraries, while some developers look for the latest and greatest technologies on the market I stick with solid technologies that that consistently work well and have solid documentation.  Personally, I'd rather skip and miss the bus on a new technology if it has poor documentation. To me it usually a good indicator of what it's going to be like working with the product over the long-term.

### Documentation Generators
To take this a step further and bring it a little closer to home. I once let people on my team skip or minimize documentation in the sake of speed and deadlines however I now believe that it was a foolish mistake on my part. Not only that but I now strongly believe that using tools like RDoc and YARD to get the documentation closer to the code that it references and auto generating it on the fly is an absolute must. On the .NET side I tend to stick with XML style comments and auto generating documentation using Visual Studio. I've found this to be the easiest way to keep documentation up to date.

## Test/Behavior Driven Development (TDD/BDD)  
Whether you are writing a small app or a large application it goes without saying that if you are not following TDD or BDD then there is no way to have a high level of confidence your code is actually done what it is supposed to do.  It seems like every time I try to skip writing tests and jump right into coding to "save" time it ends up taking me more time then if I would have actually done it right the first time. And while picking a testing framework is like picking an IDE I usually find myself going back to tools that I am comfortable with.  For Ruby development that tends to be RSpec for functionality and Capybara for automated UI testing. Lastly, while I like the concept of writing user stories with frameworks like Cucumber I find it is usually overkill.  For .NET I tend to stick with MSTest and NUnit.

### Code Coverage  
This is another one of those touchy areas and I've seen developers and teams on both ends of the spectrum. Either they care and monitor the percentage of coverage they have or they couldn't care less.  Personally, I think having a total test count is useless however having a figure that represents how much of the code is worked out and tested during continuous integration testing does add a lot of value but I don't think there is a once size fits all. And while a higher number does not guarantee there will not be any errors I do believe that having a target percentage does help when analyzing how things are going over time. For example, if 50% coverage gets the team there then great, if not increase the number until it does. The goal is not to always do more but rather to do what is needed to consistently reach the teams goals and produce good quality applications.


Want to chat? Drop me a line at [@charles_green](http://www.twitter.com/charles_green) and say hello.
