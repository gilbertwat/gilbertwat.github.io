---
layout: page
title: Getthingsdone - My journal in software development
tagline: a mortal who still trying to get things done and make what people need 
---
{% include JB/setup %}

This is where my technical journal as a techie. Currently I solve problem in Android most efficiently and expanding my horizon in iOS and Javascript.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


