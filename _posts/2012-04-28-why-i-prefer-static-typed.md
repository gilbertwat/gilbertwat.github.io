---
layout: post
title: Why I prefer static typed language
category: "Software Engineering"
tags: programming java PHP
author: Gilbert Wat
---
Yes\. It is been a long time\.

![How users see programmer and the reverse](/assets/images/user-see-programmer.jpg)

I am now working on a project which consists of a team from different technical background\. Some works on PHP for their whole careers, others, like me, comes from a Java background\. Yes I know both of them are boring, bad \.\.\. etc\. But this is what we get\. But basically we can be split into two camp, Static typed camp and dynamic typed camp, or Camp Java and Camp PHP to be simple\.

As we are collaborating using CodeIgniter, I notice many, subtle or not, differences in our code while reading codes from different camp\. The most prominent difference is the parameter of functions\. Here are examples of function declaration from both camp\.

Camp Java
  
```php
public function get_a_list_of_sth($param_a, $param_b, $param_c) {
	...
}
```

Camp PHP
  
```php
function get_a_list_of_sth($option_array_param) { ... }
```


So essentially Camp PHP tends to group all the parameter into one array and Camp Java loves to split all parameters to different names\. I am more inclined to Camp Java for the most obvious reason - readability\.

The camp PHP is of course easier to develop, but the caller will not be able to determine whether what to put as arguments into the function without digging in to the code\.

###ALERT ABSTRACTION LEAK\!###

The caller cannot safely call and expect the functions to run as described\. Without reading the implementation, caller of the functions have no way to make a successful call of the function without referring to the documentation, if there is any\. This brings us to another issue of testing and maintenance\.
When using PHP or any other dynamic typed language, everyone should check the type of the arguments in the run-time\. Take an example of a trivial add function\. In a static typed world: 
```
public int add (int x, int y) { ... }
```

I can heard PHP guys already asking, 'what about numbers with decimal places?\! This is too rigid\! We, in one function, can handle both\! we will write like this:  
```
function add($x, $y) { ... }
```

But the world is a cruel world, callers of your functions will come out with strange idea to use your functions\. For example,  
```add('Barbie', 'Ken');```

And they expect result to be 'BarbieKen', or even 'null'\! Most importantly, it relies on the implementation of the function to alert the callers they are doing it wrong\. If the caller is misusing the function, he/she might not discover the problem, until a later stage of development\. Hell ensured if average Joe is the one who is debugging\. In another way of saying, it is more error-prone when there is no documentation or a type system whatsoever\. As always, humans are the most unreliable part of the system\.

But for the Camp Java version, at least the compiler will complain to the caller they should not be passing 'Barbie' and 'Ken' as arguments\. And the function declaration itself is the documentation\. Let's face it, few developers like to read documentation in the code unless necessary / the function is closed-source\. And the all-wise Donald Knuth recommend code as its own documentation, for this purpose, static typed language is more readable as even for average Joe, less type related bugs can be found in its code\.

Therefore for my personal project, I will use static typed language for sure\.

P\.S [Some tragic things happened with Null](http://stackoverflow.com/questions/4456438/how-can-i-pass-the-string-null-through-wsdl-soap-from-as3-to-coldfusion-web)
P\.S 2: yes I am aware of duck typing\. But this is one of the techniques I am very skeptical\. Another post maybe\. 
