---
layout: post
title: Week 9, Game mechanics, adding game over and respawn
---

<img src="/images/posts/2015-11-20/excerpt.png" alt="excerpt picture" style="width:150px;height:111px;">

This week, we are going to add life and death inside the [html5 game](http://givemehtml5.github.io).

1. Add a death condition
2. Popup a gameover screen
3. Respawn the player

## <a name="death_condition"></a>Add a death condition

The first death condition is obvisouly, if you fall in a hole, you are dead !

```javascript
//death condition 1
if (MovableEntities[x].y < 0-MovableEntities[x].height ) 
	MovableEntities[x].killed = 1;
```

Then we just need to check each loop if the hero is still alive :

```javascript
if(level.getHero().Isdead()>0) 
	game.gameOver();
```

## <a name="gameover_screen"></a>Popup a gameover screen

To popup the GameOver screen, we use the same method than for the main menu screen, it will be a CSS/Html div which is shown or hide

```javascript
game.gameOver= function () {
	  show(gameover);
	  GameStarted=false;
}
```

## <a name="respawn"></a>Respawn the player

If you click on try again button, then your hero will be respawn at his initial position

```javascript
hide(gameover);
show(canvas);
worldRenderer.getLevel().respawn();
GameStarted = true;
```
The Respawn function will loop on all entities and replace them at start position with no speed :

```javascript
for (var x = 0; x < MovableEntities.length; x++) {
			MovableEntities[x].x = MovableEntities[x].start.x;
			MovableEntities[x].y = MovableEntities[x].start.y;
			MovableEntities[x].dx = 0; MovableEntities[x].dy = 0;			
			MovableEntities[x].killed = 0;
}
```

And that's all, it's now easy to add other death conditions, there are no victory conditions so far as there are no enemy to kill.

Next week, I'm going to include the bad guys !

## Let's code!
