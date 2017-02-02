---
layout: post
title: The time Meteor Blaze data context screw me up
category: "Software Engineering"
tags: Javascript MeteorJS
author: Gilbert Wat
---
***Originally posted in [Medium](https://medium.com/@gilbertwat/the-time-meteor-blaze-data-context-screw-me-up-6eb84abb6f6#.p6dm57cjw)***

Consider this two templates,
{% highlight html %}
<template name='a'>
  {% raw %}
  {{> b }}
  {% endraw %}
</template>
<template name='b'>
  {% raw %}
  <b class="{{if not data }}hide{{/if}}">{{ data context of b }}</b>
  {% endraw %}
</template>
{% endhighlight %}
Here is another template,
{% highlight html %}
<template name='a'>
  {% raw %}
  {{> b }}
  {% endraw %}
</template>
<template name='b'>
  {% raw %}
  {{if}}<b>{{?? what is the data context here ??}}</b> {{/if}}
  {% endraw %}
</template>
{% endhighlight %}
You would guess the data context will be the data context of template “b”.

Nope.

The data context is “a”

***WTF?!***
