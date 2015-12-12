---
layout: post
title: Week 12, Collision improvement
---

<img src="/images/posts/2015-12-11/excerpt.png" alt="excerpt picture" style="width:150px;height:auto;">

This week, I tried to understand why it was still possible to stuck the player inside the map.
Especially when falling back to the ground with a 45° angle.

## <a name="collision_management_html5"></a>The collision management in html5 game

My current collision management is done in two different steps. 
1. Check collisions in x direction
2. Check collisions in y direction

Hey why did I not checked both together ?
Because then the entities cannot move anymore as there is always an acceleration in y direction, that's Gravity !

see below a the code which explains the different steps :

<img src="/images/posts/2015-12-11/1.png" alt="picture 1" style="width:100%;height:auto;">

```javascript
//store the current position
StoredcollisionRect.x = collisionRect.x;
//update the collision boundaries with the acceleration in x direction
collisionRect.x += MovableEntities[x].dx;
//check collision and if true, put the acceleration to 0, stops the movement
if(collision) MovableEntities[x].dx = 0;
```
<img src="/images/posts/2015-12-11/2.png" alt="picture 2" style="width:100%;height:auto;">

```javascript
//get back to current position
collisionRect.x = StoredcollisionRect.x;
//Then do exactly the same in y direction
//At the end, update player position only one time in both x and y direction
```

<img src="/images/posts/2015-12-11/3.png" alt="picture 3" style="width:100%;height:auto;">

## <a name="collision_management_45_degree"></a>The collision issue at 45 degree

The issue is that this collision detection algorithm cannot work if the player has a 45 degree angle.

<img src="/images/posts/2015-12-11/4.png" alt="picture 4" style="width:100%;height:auto;">

In that special case the collision detection is blind in x and in y direction, the following tick, the player will collide to the ground and stay blocked.

<img src="/images/posts/2015-12-11/5.png" alt="picture 5" style="width:100%;height:auto;">

To remove that potential issue, we will add a third check with both directions only when the first two collision checks failed.

```javascript
if(no_collision_in_x_or_y) {
	collisionRect.x += MovableEntities[x].dx;
	collisionRect.y += MovableEntities[x].dy;
	if(collision) MovableEntities[x].dy = 0; //priority to y direction 
}
```

In such case, I gave the priority to y direction, that will help the player not to die if he gets right on the side of a block

## <a name="bullet_management_html5_game"></a>Bonus.. bullets

I added this week some bullets when you press on action area or spacebar.
It's a specific Movable entity which can collide to everything but this has still to be coded. So far the bullet just go through the screen.


I will now work on AI management, it may takes some weeks before it works !
You can always try the latest version of the [html5 game](http://givemehtml5.github.io).

## Let's code!
