---
layout: post
title: Week 11, Game mechanics, kill them all to Win
---

<img src="/images/posts/2015-12-04/excerpt.png" alt="excerpt picture" style="width:150px;height:111px;">

This week, I first worked on improving the [last week's collision loop](http://givemehtml5.github.io/Week-10-Game-mechanics-adding-ennemy/#collision) to win some computation time.

I added a limit between position of the current entity and position of the collidable entities.
A new variable `COLLISION_TOL` is now equal to two times the Tile width value.

```javascript
for (index = 0; index < StaticEntities.length; ++index) {
	if(StaticEntities[index].start.x < startX + COLLISION_TOL && StaticEntities[index].start.x > startX - COLLISION_TOL ) {
		collidable.push(StaticEntities[index]);
	}
}
for (index = 0; index < MovableEntities.length; ++index) {
	if(EntityIndex!= index) {
		if(MovableEntities[index].x < startX + COLLISION_TOL && MovableEntities[index].x > startX - COLLISION_TOL ) {
			collidable.push(MovableEntities[index]);
		}
	}
}
```

The collidable array went down from roughly 350 entities to only 5, computation time for this function has been divided by 140 !!

## <a name="kill_them_all"></a>Killing a bad guy

The ennemy have, like all entities, a death variable which let the game knows if he is dead or not.
I added a `killable` parameter to prevent the hero to kill the Map... but that could be integrated in some gameplays.

Then we just have to check if the hero is dead, and if he killed all ennemies. 
```javascript
//check victory/condition
if(level.getHero().Isdead()>0) game.gameOver();
if(level.getHero().getKillCpt()>=level.getMonsterCpt()) game.win();
```

Next week, I will try to improve the collision management as it's still possible to stuck the hero inside the Map...
You can check the latest version of the [html5 game](http://givemehtml5.github.io).

## Let's code!
