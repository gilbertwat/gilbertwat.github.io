---
layout: post
title: Gotcha in CodeIgniter
categories: software-engineering
tags: programming java PHP software engineering
---
After 2 months of hustling, the development phase of my first "big" project is over\. In this 2 months, I had to spend half of my brain debugging and implementing new features in a now defunct version of a group buying site\. Another half was working on the new version of it in the same time\. The old version is simply a "tar pit" - spaghetti of PHP HTML MySQL CSS Javascript soup is taking me back to the "good old days"\. I simply cannot understand why someone in the 2012 get stuck in the 2001 web development style, I will not allow such non sense in the new version\.

So I have chosen CodeIgniter as the framework for it ease to deploy, develop and control\. Also I have to cater the technical background of my team\. Apart from me, none have experience in any PHP framework whatsoever\. Hence I have no choice but to choose a framework with an easy learning curve\. Unlike those comprehensive framework, there is little magic in it\. Still we faced some magic moments and got a list of gotchas to share\.

The most memorial moment has to be the difference between
  
```php
$this->db->stop_cache()  
```
and
  
```php
$this->db->flush_cache()
```

It burnt us in the very last minute of the project\. All of us has some misconception about those 2 functions\. Some of us thinks ```stop_cache()``` will also clear the cache, others thinks ```flush_cache()``` will stop the caching\. Actually ```stop_cache()``` will stop the cache, but the cache remains when you ```start_cache()``` again\. ```flush_cache()``` will not stop the cache, instead it will clear the cached query\. Fortunately "sed" come to rescue and I need to place back those caching statements appropriately\.

####Takeaway 1: ```stop_cache()``` just stop the cache, ```flush_cache()``` just flush the cache\.####

Another misconception is undocumented\. We assumed form_validation will run whenever the function is run\. We then put form validation in a different method than the form displaying method\. The URL is messed up as a result\. After a bit of googling, The form validation method only run when there is POST value\. This was a great lesson and needs tons of refactoring effort\.

####Takeaway 2: ```form_validation->run()``` will execute only when there is POST value\.####
Following up on the last mistakes, we also accidentally discovered that the POST value is passed on to the redirected page\. And hence we can separate any form validation from the actual data processing\.

####Takeaway 3: POST value is passed on to the redirected page\.####

Do you have any gotchas you've faced in CodeIgniter? Sharing is loving!
