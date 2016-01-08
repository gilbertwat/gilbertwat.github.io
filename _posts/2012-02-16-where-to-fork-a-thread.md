---
layout: post
title: Where to fork a thread?
categories: ["Software Engineering"]
tags: Android Java Concurrency
---
This is a repost of a post in Tumblr over a years ago. Time flies and I found the solution.

*The original post:* 

As my project starts to grow and I am trying to refactor my code into different modules to enhance code reuse. In the Android world it is a NO-NO to perform any blocking functions in the UI-thread. For example when there is a HTTP request to the server, and display the response in the UI. Everyone must put the HTTP request routine to a separate thread and notify the UI thread once it is finished. In Android case, you can always use AsyncTask / Handler / Service.

The problem doesn\'t exist when the HTTP request and the Activity(UI class) is in the same package. The problem is when the HTTP request and the Activity should be refactored to a separate package. Where should the forking routine reside? Should it be in the main package? Should it be the responsibility of sub-package? Both of the solutions are technically plausible. let\'s set aside the performance issue because the performance difference will be negligible compared to the response time of the HTTP request. So the problem boils down to the system Design and the development process.

Let\'s take a look at the pros &amp; cons of two different approaches.

Method 1: All thread management is done in the main package:  
Pros:
* Centralized place for thread management
* Skill requirement of  the sub-package developer is lower(Yes, few developers in Hong Kong understands thread)
* The sub-packages are less complicated, the manager can hire a bunch of code monkey and voila!
* Easier to implement.  
Cons:
* Very large codebase for the main package
* Dependency of the main package developer is greatly increased(what if he/she get hit by a car?)
* Less code reuse as every forking requires the main package to do it.

Method 2: Distributed thread management
Pros:
* More or less dummy main package, even people who doesn\'t understand threading can use the sub-package. Harmlessly.
* More code reuse as the sub-package can handle their own.
* Not wholly depends on one programmer/programming team.  
Cons:
* The skill requirement of the whole project team must be at least decent, understands how threads works. (Hard to achieve in Hong Kong)
* Callback Spaghetti anyone?
* Harder to implement. Let\'s say the request returns an ArrayList need to propagate the ListView, How?

From the time being, I will stick with the first approach, but I think I will definitely move to the second approach as the project continues to grow. What is your thought? Which path will you choose? Are there any better alternatives?

*End of original post*

My code become more modular in these years and Method 3 comes out to be the superior.

Method 3: separate UI blocking operations into a generic library. The other service will call the UI blocking operations.

This method separate the concern of the UI blocking operation, the depending library logics, and our client facing application.

Another intriguing part is that I claim that there are only a few people in Hong Kong software industry understands thread. How young and foolish I am! It is always fun to reread my Journal.
