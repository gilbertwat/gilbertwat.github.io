---
layout: post
title: ! 'Just Another Day in Android-land: Expandable TextView with Custom Ellipsis'
date: '2013-08-26T14:07:00+08:00'
category: "Software Engineering"
tags:
- Android Development
- Android
- software development
tumblr_url: http://gilbertinsoftware.tumblr.com/post/59373670269/just-another-day-in-android-land-expandable-textview
author: Gilbert Wat
---
After over 4 months of my first notorious “death march” our team can at last have life. I finally have time to write a custom component for my future use. It is a customized TextView with a few customization on the function that trim down excessive characters. Suppose the UI can only display a limited lines of characters by specifying android:maxLine attribute, The TextView can be clicked to show the whole text. Also the ellipsis (…) at the end of the text while trimmed, aka ellipsized, can be customized.

The custom component has the following requirements:

* The default view is a ellipsized TextView
* The ellipsis can be replaced by a different character.
* The TextView OnClickListener is override to only toggle between ellipsized TextView and normal TextView.
* I immediately started customizing TextView by overriding the android:maxLine implementation, add XML attributes for specifying ellipsis. Turns out there is a hidden requirement.

The TextView Ellipsis must support different text size. 
This is proven a tricky part as you all know, there is gazillion different screen size, View size … for the UI component, how can we measure the width of the UI component and width of the text and decide what text to show? After searching the help from the omnipotent of Android framework GrepCode, I found out some of the hidden gem of a utility class: TextUtils. The TextUtils can do ellipsize based on the TextPaint class. The TextPaint hold the display attribute, for example width and height of the text itself, this is a good example for separation of concern if your are new to OOP.

Also as TextView uses the private variable mMaxLine to hold the maximum number of line to be display, I must make use of Reflection API (again!) to change the value.

And the result is [here](https://gist.github.com/gilbertwat/6338414). Enjoy!
