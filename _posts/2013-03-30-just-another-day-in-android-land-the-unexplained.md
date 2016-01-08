---
layout: post
title: ! 'Just Another Day in Android-land: The unexplained Locale'
date: '2013-03-30T02:08:00+08:00'
tags:
- android
- software development
- software engineering
- locale
categories: ["Software Engineering"]
---

***Personally I think this is a very bad decision. But I have not tried hard enough to convince people it is a bad idea.***

Our development of Android application is entering a new phrase. There is a requirement from business analysts and user experience about the locale of the application. The user can choose the language of the application in the web portal. The application will follow the locale specify in the logged in state. If the application is not in the logged in state, the application will follow the locale of the system.

Before I did any development, I have written down a few test cases.

1. Logged in user -> open app -> (Expected)Locale set in our system.2
2. Non logged in user -> open app -> (Expected) Locale of the system.
3. Non logged in user -> open app -> log in -> (Expected)Locale set in our system.
4. Non logged in user -> open app -> log in ->(maybe changing locale)-> log out -> (Expected) Locale of the system.
5. Non logged in user -> open app -> log in -> call service to change locale in our system -> (Expected) the changed locale is used, even in the back stack

This is somehow working against the Android framework itself. In Android framework, there were 2 ways to get and set the locale of the application:

Method 1: 
```java
java.util.Locale
```

This is a originated from Java. The getter and the setter of the Locale objects specify the "preferred locale of user". What is that supposed to mean? The problem is that the Locale of the system is not available, The scenario 5 will not impossible to achieve as the system locale is not available in the app anymore. Moreover over the documentation states that the Locale.setDefault() should be avoided at all cost.

Method 2:
```java
getResources().getConfiguration().locale
```

The “proper” way to change the locale of the app. The Configuration instance stores the locale of the app in the sandbox and the resources will always be getting from the folder matching the Configuration. BUT if this is changed via code instead of system, the onConfigurationChanged of the Activity will not be called. The activity in the back stack will not be changed.

My Method: The mix of both with a twist.

The source: [GitHub](https://github.com/gilbertwat/locale-android-example) WARNING: IT MERELY COMPILED and only illustrating my logic, DO NOT USE IN PRODUCTION

Here you can see I have used Locale.getDefault() as a last resort to get the system locale. The locale of the Configuration instance is restored to system locale when the user log out. The locale of the account is stored in the SharedPreferences. The twist is that as mentioned before, our app is stack based in the Activity level. When the user press back after changing his locale, the original locale is checked against the current locale in Configuration, if they are different, the Activity start a copy of itself with a specific requestCode. When the copy is finished, the onActivityResult() will merely do: finish() itself and pass all the resultCode and data to the previous Activity.
