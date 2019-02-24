---
title: "1 function to call when setInterval has failed you"
---
From time to time, we have to check if something is finished, or a particular script has been loaded successfully in the browser, we would make use of the `setInterval()` function in the vanilla Javascript. This function can be traced all the way back when Javascript first came out. We should be all familiar, but seldom use the function due to the advancement of Javascript libraries and framework. The function is useful, but it has 1 problem. The problem is that in a low latency requirement, this function cannot meet the demand of periodically to run, as soon as possible. Even if you call like this,

```js
setInterval(function() { 
  //...impl
}, 1);
```
The function does not guarantee to run every 1ms.

<img class="center" src="/assets/images/2017-03-15-1-fx-replace-setinterval/nick.jpeg"/>

Hold up Nick, actually it is not confusing at all. All can be explained by the lowest design of how browsers are rendering webpages. Webpages is nothing different with the canvas in any game engines. In the canvas, all the rendering logic is put into an endless loop. The loop is something like:

```js
while(true) {
  //...
  render();
}
```
The loop is run everytime the 1/60 s at most. 1/60 s for one call equals 60fps. 60fps is also the refresh rate of the screen. But `setInterval()` DOES NOT guarantee to run on each refresh.
How about a function that guarantee to run in each refresh?
`requestAnimationFrame(fn)` is the new-ish function that can put fn into the refresh loop, so it is guarantee to run as much as possible. The refresh loop becomes:

```js
while(true) {
  //...
  fn();
  render();
}
```
Nothing runs as tight as the refresh loop in the context of browser so you got a win here.