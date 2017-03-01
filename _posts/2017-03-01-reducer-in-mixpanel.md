---
layout: post
title: Reducer in Mixpanel API is weird, but genius
author: Gilbert Wat
category: "Software Engineering"
image: "/assets/images/2017-03-01-reducer-in-mixpanle/wtd-jackie-chan.jpeg"
tags: ["Javascript", "Mixpanel", "Functional Programming"]
---

Mixpanel had been a crucial tool in my previous 2 startup jobs. We have to compile a lot of different views for our team to make decision based on the Mixpanel data. They can be very different and flexible. This flexibility is the key to mixpanel’s success. To leverage this, they need a very comprehensive query language for developers/marketers to perform complex queries on the data.

I was very confident that I was going to easily understand the API. The API was designed back in 2012 and I have supposed it would be iterative and straightforward. But something was not right. Something was complicated. Something was not understandable. At first sight, I was wondering if Mixpanel API designers were high when they design the API. Let’s take the reducer as an example. Normally I was familiar with the `_.reduce()` function of underscore / lodash, or vanilla Javascript `[].reduce()` function. They are having some similar signatures:

```javascript
//underscore version
_.reduce([1,2,3,4], function(sum, n) {
  return sum + n;
}); // -> 10
//vanilla js version
[1,2,3,4].reduce(function(acc, val) {
  return acc + val;
}); //-> 10
```

But for mixpanel, the signature is as follows,

```javascript
// Count events.
function main() {
  return Events({
    from_date: "2016-01-01",
    to_date: "2016-01-07"
  })
  .reduce(function(previous_counts, events) {
    var count = events.length;
    for (var i = 0; i < previous_counts.length; i++) {
        count += previous_counts[i];
    }
    return count;
  });
}
```

<img class="center" src="/assets/images/2017-03-01-reducer-in-mixpanel/wtf-jackie-chan.jpeg"/>

So as a developer, I was doing what I know to make sense of it. But I could neither put breakpoint, nor `console.log` the intermediate result in JQL panel. So I was stuck.

Then I asked my boss, what was his take on the API? He took a look, and said, ‘This is pretty amazing, I never thought of that.’ When a person with high standard in coding and very experienced in software engineering said so, you knew that you were the one who was not getting it.

I then asked him and Google about how is this API working and how brilliant it is. After some investigation, turns out the mechanism lies in parallelism and load balancing. A diagram can explain this clearly.

<img class="center" src="/assets/images/2017-03-01-reducer-in-mixpanel/reducer.png"/>

For the normal reducer, the function signature `function(sum,n)` always required the function to run on 1 core. In a single core environment, for example in the V8 runtime of browser, where it is always single thread, single process, this will not be a problem. Problem comes when the architecture is distributed. In a distributed environment, there are multiple cores, and we want to distribute the function into as many cores as possible. We need a different signature for this type of architecture.

Hence `function(prevCounts : int[], events : Events[])` is required, where `prevCounts` is the counts from results from different cores. First the system split the array of Events and assign them to different cores. Each cores count the `Events`, and return it. and those results will be passed into the following iteration of `function`, with or without new `Events` . The process will continue until there is no `Events` or `function` running in the system and return the result.

The reason behind is simple, we want the system to be fast, reliable and recover quickly. Imagine the first case, when the core running the sum function failed, we have to recalculate the whole sum function. But as the second case, when one of the core fails, all we need to do is recalculate that core. Also occupying single core for a long period of time is not good for load balancing.

And In the next week I will dive in a little bit on how this links to something as a frontend/fullstack developer never touched before - GPU programming.

### References:
1. [Mixpanel official doc](https://mixpanel.com/help/reference/jql/api-reference#api/transformations/reduce)
2. [Mixpanel community discussion](http://community.mixpanel.com/t/jql-api-confused-with-the-method-signature-of-the-reducer-function-passed-to-reduce/376)