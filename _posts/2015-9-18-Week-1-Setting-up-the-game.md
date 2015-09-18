---
layout: post
title: Week 1, The html part of the game
---

![excerpt picture](/images/posts/2015-9-18/excerpt.png "excerpt picture")

First things first, the main component we are going to use to integrate the game is the canvas element. This element is used to draw graphics on an html page.

Below is the code used to draw an empty canvas element :

```html
<canvas id="canvas" width="200" height="100" style="border:1px solid #000000;">
Your browser does not support the HTML5 canvas tag.
</canvas>
```

And here is the result on the html page : 

![canvas_example1](/images/posts/2015-9-18/1.PNG "canvas example 1") 
Easy...
Now we only have to connect to this canvas element from our js code and draw what we want inside. This will be done in js by using the code below :
```javascript
var canvas = document.getElementById( 'canvas');
```

This line will create a variable which contain our canvas element on the html page.
If we then get the context and write something we get :

![canvas_example2](/images/posts/2015-9-18/2.PNG "canvas example 2")

Hello World ! 99% of the job is done !! (Well, maybe less than that). 

Let's look at the code to understand what it did.

```javascript
<script type="text/javascript">
var canvas_ex1 = document.getElementById("canvas_ex1");
var ctx_ex1 = canvas_ex1.getContext("2d");
ctx_ex1.fillText("Hello World", canvas_ex1.width/4, canvas_ex1.height/2);
</script>
```

Just remember the script must be placed after the canvas closure tag.
If not, the getElementById will return "null" as the component has not been loaded.
You can also place the Javascript inside the <head> section and use the onload function. Now we can start looking at :

##The main loop
As I described it in the [previous post](http://givemehtml5.github.io/Day-0-A-long-journey/#game_engine), the main loop is the heart of the game.
In Javascript the main loop is done by calling the main_loop function repetitively, and this repetition can be done with 2 different techniques :
First technique is to call [set interval](http://www.w3schools.com/jsref/met_win_setinterval.asp) function. But I prefer using [request animation](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/) function which is described in Paul Irish blog.

This Polyfill allows the script to loop on the desired function. Below the result :

![canvas_example3](/images/posts/2015-9-18/3.PNG "canvas example 3")

Well... Not so good !
Of course if we talk about displaying assets or text each iteration of the loop, then we need to clear the screen at each step by adding :

```javascript
context.clearRect(0, 0, canvas.width, canvas.height);
```

And that works fine !! 

![canvas_example4](/images/posts/2015-9-18/4.PNG "canvas example 4")

We have now set-up the canvas element on the web page and the main loop of our game.
Next step will be to detect the player inputs...


## Let's code!
