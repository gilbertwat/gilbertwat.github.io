---
layout: post
title: Android Back Stack Best Practice (without action bar)
date: '2012-11-11T17:31:01+08:00'
categories: software-engineering
tags:
- android
- development
- Activity management
---
One of the recurring problem of developing Android application is the notorious back stack. In our application, we firstly following the o’almighty advice of Google and following the advice religiously.

Unfortunately there is some problems in this model of back stack management. Let’s take a look 
in the following scenario:

The problem

![](/assets/images/problem1.png)

The initial version we do use all those flags, as suggested by Android developer resource.

![](/assets/images/problem2.png)

After the initial implementation, one can immediately find the problem of such practice.

To begin with, there is no way for user to back navigate from PaymentConfirmActivity to ItemDetailActivity. This is really annoying and the buying process should be as expected and flawless as one can.

Another point worth noticing is that in developer perspective, there are much context burden and switching while developing, The developer must bear in mind the flag of many Activity at once while developing. And this is very error prone.

Last and THE most seriously problem is, if the user enter the Application in the ItemDetailActivity, If the user navigate towards HomeActivity, the application will be force closed! This is unacceptable. But if the flag is not added, the user maybe able to be navigate back to the PaymentConfirmActivity, this is not a desirable, and can have disasterous effect(the user may be charged twice!)

Our solution
We currently ignore all the flag Android framework provide. Instead, we have well defined requestCode and resultCode. We are constraint to use startActivityForResult and always override onActivityResult. This is a bit tedious, but until the FLAGs are fully understands…Bear in mind, average Gilbert is programming and you need to get the most out of him!
