---
layout: post
title: ! 'Android Development: How the Spinner and PopupWindow finally clarify my
  misconception about Context'
date: '2012-10-28T00:43:00+08:00'
categories: ["Software Engineering"]
tags:
- android development
- android
- java
- Spinner
- PopupWindow
tumblr_url: http://gilbertinsoftware.tumblr.com/post/34422508526/android-development-how-the-spinner-and-popupwindow
---
In my recent development, I have received a requirement to put Spinner inside a PopupWindow. I expected an easy task. When the popupwindow is shown, there was no error whatsoever. But whenever I click on the spinner, the program F.O.R.C.E.D C.L.O.S.E.D. (On a side note, Forced Close should be replaced by a swear word). The logcat gives a BadTokenException and asked if my Activity is still running. You must be kidding me, I was calling the Spinner when the Activity is running, and of course it is in the UI thread. I am not able to pinpoint the problem, and Google doesn’t really help much this time. I was forced to use my brain at last. I was excited.

After a intense afternoon of detective game, I simply could not solve the problem. All I knew the problem has to be the misuse of Context. I have long loathed the ambiguity of Context in Android official document. I can rant all day how the description of the class is so vague and the class is so important in Android development. But this is helpless to the sitaution.

After identified the problem, I blindedly try different Context in the initialization of SpinnerAdapter. I have tried:

```java
getBaseContext()  
getApplicationContext()  
this  
ClassNameOfActivity.this  
mActiviy = this  
View.getContext()  
```

I was by that time certain that getBaseContext() will not work. And I am pretty sure the 3 - 5 is literally the same. I was then paying the price of blind programming previously.
I also tried to dig the Android source via Grepcode but nothing relevant seems to show up. All I have learned is that Spinner is actually a Custom Dialog with a ```OnClickListener``` fires to show it and a ```OnItemClickListener``` to show the selected item.

I am hopeless, and even the proud me seeks my colleagues’ help. Even my colleague didn’t expicitly help me, I was having a “ZING” moment after discussing with them. And I found that when I inflate the View of the PopupWindow, the Context is ```getApplicationContext()```! I immediately change that to Context of Activity.

ZING! PROBLEM SOLVED!!

Things seems to come into a full circle finally.

What I have learned so far

Context is the provider for Activity or Service to access other assets of the system can provide, such as databases, files, resource files…etc.
Context can be crudely divided into three types, Here is the list in increasing order of capabilities or memory usage.

```java
getBaseContext()
```

Almost never used in Activity, providing the most basic “Context” for the caller. Mostly used in Service.

```java
getApplicationContext()
```

For those which requires resources from Application level. It may be UI related but definitely not Activity related For example, Toast and PopupWindow.

```java
ClassNameForActivity.this
```

For those which requires resources from Activity level. For example, Dialog and of course our focal point - Spinner.

Lesson Learned

This is a typical ocassion that a developer not trying to fully understand the tools one is using and shoot his foot. Luckily it is a runtime error and can be spot immediately. What a problem.
