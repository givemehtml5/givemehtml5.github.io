---
layout: post
title: Week 4, Integrate assets into the html5 game loop
---


<img src="/images/posts/2015-10-09/excerpt.png" alt="excerpt picture" style="width:150px;height:111px;">

This is the second part of the assets management in our [html5 game](http://givemehtml5.github.io).

Now the assets have been preloaded (you can look at the previous [post about assets preloading](http://givemehtml5.github.io/Week-3-create-manage-assets/#assets_preloading) , we have to get them work together with the game loop.

We will first improve a bit the html5 game loop to integrate the modules needed, then we will focus on the parallax background.

## <a name="updating_game_loop"></a>Updating the html5 game loop

you can see below the main loop description a bit updated to integrate both init and loop phases.

<img src="/images/posts/2015-10-09/1.png" alt="main loop 1" style="width:50%;height:auto;">

The background stays a specific class as the others entities will. There will be a level class, a hero class and an enemy class.
There is a question which can be asked about inheritance.
There are plenty of information on [google](http://lmgtfy.com/?q=javascript+class+inheritance) and we didn't know yet if inheritance in our case can speed up and simplify our [html5 game](http://givemehtml5.github.io) development.

### A parallax background

The background is basically the first image which is rendered. All the other sprites are drawn above.
In a parallax background, there is obviously many backgrounds instead of one. In our case there are three [backgrounds in the html5 game](http://givemehtml5.github.io)

```javascript
var backgrounds = [];
backgrounds[0] = new Background(bgs,0,0,800,600, 0);
backgrounds[1] = new Background(bgs,0,600,800,600, .5);
backgrounds[2] = new Background(bgs,0,1200,800,600, 1);
```

The latest parameter is the speed of the backgrounds as they will move with a different speed to simulate the parallax effect.

You can see that the frame size look like 800,600 which is the baseline resolution of our game. 

that's why we have to get the ratio value between 800,600 and the current screen resolution.

<img src="/images/posts/2015-10-09/2.png" alt="main loop 1" style="width:50%;height:auto;">

Everything is integrated in javascript Draw API below :

```javascript
context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
```

Where `s` means source, and `d` means destination.


## <a name="music_maker"></a>Building your own song

The [html5 game](http://givemehtml5.github.io) must have a background music, and as we said in the [first post](http://givemehtml5.github.io/Day-0-A-long-journey/), the goal is to get a vintage platformer game.

That means a vintage music, made with 8 bits samples.
We use Milky tracker, again there are plenty of information on google.
You can now hear the first sounds of our [html5 game](http://givemehtml5.github.io).

Next week, we will continue working on assets, especially on the hero sprite animation

## Let's code!
