---
layout: post
title: The first day !
---

## This is the first day of a long journey: learning JavaScript by developing an html5 game.

I heard a lot about html5 and I told myself: Hey! This html5 is the new C++, fantastic!
The point is, that html5 game is not written in html ... but in JavaScript ... Arghh!
What is JavaScript? I thought it was only used to get some text changing color...

I used to develop games in java but the way JavaScript is working seems different, I will try to build a game with the rules below, and I will update this blog following the development of the game.

Here are the rules I will follow for the game:

## Game type: Vintage 2D multiplayer platformer
I love platformers since I started to play games.
2D platformers always keep this vintage feeling combined with short-timing actions (if you don't want to die of course) and easy scenario, maybe too easy sometimes... 

## CrossPlatform: Yes!!
HTML5 is cross-platform (hopefully) and I prefer learning JS instead of working on java, objective C and flash in parallel. The tricky part will be to adapt the page to get a full-screen game whatever the platform is.

## Map design: Vintage assets, scrolling background, tiles, and awesome sprites!!  
As I said, I like the game experience of vintage platformers, that's why the game will include these items which are the main visual components of a good game.
Unfortunately I'm not an artist... That's why I may use some arts from people who know how to draw a hero! 

## Multiplayer server: Node.js
I already experienced multiplayer game development on node.js servers and it works fine and with enough speed for platformer games.

## Game engine: My own 
I think this kind of game is easy enough to use my own game engine. 
I don't want to be stuck with an existing game engine or with a physic engine as it will become really handy when I will start developing real-time multiplayer module.

The game engine will be the heart of the game mechanics. 
It will be composed of 2 different modules, first module will load all assets to the game, and that must be done only once.

Second module will be the main loop. This loop will be repeated while the user is playing the game.
It can be summarize with the diagram below :
 ![main-loop](https://github.com/givemehtml5/givemehtml5.github.io/blob/master/images/posts/2015-9-11/main_loop.png)

This was just theory and there are lots of additional features that will be added during the development of this game like how will the menu be managed, how to handle the update step timing in real-time games, or the enemy IA..... a long journey.... But I'll start at the beginning:

## Let's code!
