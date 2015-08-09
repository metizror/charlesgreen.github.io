---
layout: post-sidebar
date: 2014-02-16
title: 'Setting up a Deployment Project with Capistrano &amp; Chef-Solo on AWS'
description: 'Setting up a Deployment Project with Capistrano &amp; Chef-Solo on AWS'
categories: devops
author_name: Charles Green
author_url: /author/charles
author_avatar: charles
show_avatar: true
read_time: 3
feature_image: feature-fire
show_related_posts: true
square_related: recommend-fire
---

As projects grow in size and scope it got me thinking that we really should put an overall deployment process in place. Not only will this help to include deployment as part of the overall development process but also it will help to speedup the overall development process while ensuring that deployment is rock solid for even the first release.  

## Infrastructure Deployment  
Coming from a development background the "Infrastructure as Code" concept really makes sense. As such we will be using Amazon's [Ruby SDK](http://aws.amazon.com/ruby/) and [Cloud Formation](http://aws.amazon.com/cloudformation/) to script and automate the process of hardware and OS provisioning on [AWS](http://aws.amazon.com). From there we will be using [Chef-Solo](http://docs.opscode.com/chef_solo.html) to install and setup the environments needed to support our application. Lastly, we will be using [Capistrano](http://capistranorb.com) to deploy and version or application while bootstrapping the entire process from start to finish.  

### Infrastructure Provisioning Process:  
1. Start Capistrano Deployment Script on local system  
2. Capistrano will use SDK and Cloud Formation Templates to deploy new environment (EC2 Ubuntu instances, Load Balladeer, RDS PostgreSQL, etc.)
3. Capistrano will use Chef-Solo to install and configure required applications on EC2 instances.


## Continuous Deployment  
In my opinion, one of the greatest challenges being faced by organizations is the is the time, energy, and speed of releasing new features, updates, and big fixes to their production systems. One of the many reasons for this is that in many companies development changes are grouped together and manually pushed through each phase. To address this we will be using the concept of automated deployment while following many of the principles from Continuous Delivery.  


### SCORE Deployment Process:  
1. A change is submitted as a [Pull Request on GitHub](https://help.github.com/articles/using-pull-requests)  
2. The commit is reviewed and either accepted or rejected  
3. If accepted the Pull Request will be merged and automatically submitted to [Travis CI](http://travis-ci.org) for automated testing.
4. If all tests are passed the updated code will be automatically pushed to Amazon S3.  
5. A deployment script will monitor the bucket and automatically launch new server instances with the update SCORE package.  
6. The deployment script will then run a set of health checks on the services.
7. If all health checks pass the updated services will be added to the load balancer and the outdated servers will be retired.  

![Basic Deployment Overview]({{ site.url }}/img/SCORE_Deployment.png)  


### Helpful Links:  
- [Getting Started with Chef-Solo](http://leopard.in.ua/2013/01/04/chef-solo-getting-started-part-1/)  
- [How To Use Capistrano to Automate Deployments: Getting Started](https://www.digitalocean.com/community/articles/how-to-use-capistrano-to-automate-deployments-getting-started)  


Want to chat? Drop me a line at [@charles_green](http://www.twitter.com/charles_green) and say hello.
