---
layout: post
title: Week 10, Game mechanics, adding ennemy
---

<img src="/images/posts/2015-11-27/excerpt.png" alt="excerpt picture" style="width:150px;height:111px;">

This week, we are going to add life and death inside the [html5 game](http://givemehtml5.github.io).

1. Creating and render the bad guy
2. Managing collisions


## <a name="creating_ennemy"></a>Creating the bad guy

To create the ennemy, we will need a new set of sprites for animation. 
In our case, ennemies will have a red shirt when the hero has a blue shirt...
Monsters are very close to the hero, but the inputs will be managed by the IA instead of being player inputs.

The monsters will be in the object layer of the Tiled level, parsed with other objects during the game preloading.

```javascript
var data    = lvl_json.layers[0].data,objects = lvl_json.layers[1].objects,	n, obj, entity;
for(n = 0 ; n < objects.length ; n++) {
  obj = objects[n];
  entity = setupEntity(obj);
  switch(obj.type) {
	case "player"   : 
	player = entity; 
	hero.setEntity(entity);
	MovableEntities.push(entity); //global movable entities array
	break;
  case "monster"  :		
	monsters.push(entity);
	entity.sprite.setEntity(entity);
	MovableEntities.push(entity); //global movable entities array
	break;
}
```


## <a name="collision"></a>Managing collisions

In order to collide, each Movable entities has now to collide with all Static entities and all other Movable entities.

That function is now pretty slow as all Movable entities check collisions with the whole level ... I will work on it next week to check collisions only in the area where the entity is. 


```javascript
collidable=[];
for (index = 0; index < StaticEntities.length; ++index) {
	collidable.push(StaticEntities[index]);
}
for (index = 0; index < MovableEntities.length; ++index) {
	if(EntityIndex!= index) collidable.push(MovableEntities[index]);
}
```

Next week, I will improve the collision management to reduce the cycle time of the [html5 game](http://givemehtml5.github.io).

## Let's code!
