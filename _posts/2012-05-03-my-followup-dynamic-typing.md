---
layout: post
title: My follow-up on dynamic typing
categories: ["Software Engineering"]
tags: programming java PHP software engineering
---
In my [previous post](/php/2012/04/28/why-i-prefer-static-typed/), I've mentioned that it is up to the implementation to define whether the function will behave properly\. Another issue that I can came out with is the readability of your code to average Gilbert\. I have once written a function, which came back to bite my team\. The function briefly return whether the user is activated or not, and return NULL when the user is not found\.

```php

function is_user_activated($id) {  
	if ($user !== null) {
		return $user->is_activated;  
	} else {
		return NULL;
	}
}
```

Of course this function will be no problem if all my team have a deep understanding of their beloved / behated PHP\. But the user of the function put it in the if-statement like this:  
```php
if (is_user_activated($this->input->post($id))).$user->firstname....
```

of course it is NULL for the variable *$user* \.\.\. And my colleague is spending his whole day debugging my function until I told him the difference between NULL and FALSE in PHP\.

In the utopia of software development, every developer must know their tools inside out and able to sort out this kind of problem in no time\. But in Hong Kong, one can only dream of such environment\.
