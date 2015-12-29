---
layout: post
title: ! 'Just another day in Android-land: DatePickerDialog that honor the app locale'
date: '2013-01-25T12:15:00+08:00'
categories: software-engineering
tags:
- Android Development
- android
- software engineering
- programming
tumblr_url: http://gilbertinsoftware.tumblr.com/post/41417090073/just-another-day-in-android-land-datepickerdialog-that
---
Recently our company needed to unify the whole app into one locale, we have faced obstacle in making the DatePickerDialog to use app locale instead of system locale. In case you don’t want to read my story of finding, you can directly [download it](https://gist.github.com/4631571). For the patience, here is the long story.

At first, I spent most of my time reading through the code to make sure we were not doing anything wrong. After reading everything and pretty sure that we were not the one to blame, I was forced to dig into the framework itself. It is the first time that I encountered weird features or bugs in the Android framework. I have spent 2 days or so just to read different versions of DatePicker implementation in [grepcode][1], The problem is that it obviously taking the App locale as its locale][2]. But after digging deeper into the code of the DatePicker class, the problem seems to be where the DatePicker get its list of shortened months. For instance, January is Jan and February is Feb in English locale and so on. In all version of DatePicker, the months are acquired via [DateUtils.getMonthString()][3]. Unfortunately System Locale is used by this functions. INCONSISTENCY.

Unfortunately the month array storing the displaying value, mShortMonths, is private, we have to use some of the “advanced” Java library to the rescue. Reflection API in Java enables developers to access some of the internal private methods and variable in an objects during runtime. By doing so, the developers can disregard the private accessor and fix some of the internal “bugs” or invoke some private methods.

Here is the class of the [DatePickerDialog](https://gist.github.com/4631571).

There is a few extra findings while reading Google’s code in Android and its evolution. The first and most impressive one is the reusing of code. If a piece of code should be in only one place, no one will bother abstracting it. Once the piece of code must appear in two places. The effort is then put into abstracting it.

Apart from when the abstraction effort is put, the publishing of API is also inspiring. Google seems to always make the API only for internal uses at first, once they are comfortable with the API they will move the class from internal to public, for example the NumberPicker class

[1]: http://grepcode.com/file/repository.grepcode.com/java/ext/com.google.android/android/4.1.1_r1/android/widget/DatePicker.java/

[2]: http://grepcode.com/file/repository.grepcode.com/java/ext/com.google.android/android/4.1.1_r1/android/widget/DatePicker.java/#152

[3]: http://grepcode.com/file/repository.grepcode.com/java/ext/com.google.android/android/4.1.1_r1/android/text/format/DateUtils.java#DateUtils.getMonthString%28int%2Cint%29

[4]: http://grepcode.com/file/repository.grepcode.com/java/ext/com.google.android/android/4.1.1_r1/android/widget/NumberPicker.java#NumberPicker
