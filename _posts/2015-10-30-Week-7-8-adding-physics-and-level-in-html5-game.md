---
layout: post
title: Week 7 and 8, Adding physics and render the level in html5 games
---

<img src="/images/posts/2015-10-30/excerpt.png" alt="excerpt picture" style="width:150px;height:111px;">

Two weeks have been necessary to add all these functionalities to the [html5 game](http://givemehtml5.github.io).

1. Add physics : done
2. Add tilemap rendering : done
3. Collision management : done
4. Rendering with different viewport dimensions: done

## <a name="adding_physics"></a>Adding physics

Adding physics was the first step, I added acceleration to the player, including gravity which is a negative y acceleration.
This follow the [block bunny tutorial](https://github.com/awwong1/BlockBunny) which was really well explained.
It was not so difficult to transform it to javascript as below :

```javascript
if(8===(input & 8)) {//1000 JUMP
		jumpPressedTime++;
		if (PlayerState.JUMPING!=state) {
			jumpingPressed = true;
			jumpPressedTime = 0;
			state = PlayerState.JUMPING;
			entity.dy = MAX_JUMP_SPEED;
			entity.grounded = false;
		} else {
			if (jumpingPressed && jumpPressedTime >= LONG_JUMP_PRESS) {
				jumpingPressed = false;
			} else {
				if (jumpingPressed) {
					entity.dy = MAX_JUMP_SPEED;
				}
			}
		}	
	
}
if(0===(input & 8)) {
	jumpingPressed = false;
}

if(4===(input & 4)) {//0100 ACTION (SPACE)
	action=true;
}

if(2===(input & 2)) {//0010 LEFT		
	facingLeft=true;
	if (PlayerState.JUMPING!=state) {
		state = PlayerState.WALKING;
	}
	accX = -entity.accel;
} else 	if(1===(input & 1)) {//0001 RIGHT
	// right is pressed
	facingLeft=false;
	if (PlayerState.JUMPING!=state) {
		state = PlayerState.WALKING;
	}
	accX = entity.accel;
} else {
	if (PlayerState.JUMPING!=state) {
		state = PlayerState.IDLE;
	}
	accX = 0;
}

//--------------UPDATE ACCELERATION -----------
// If entity is grounded then reset the state to IDLE 
if (true===entity.grounded && PlayerState.JUMPING===state) {
	state = PlayerState.IDLE;
}
// Setting initial vertical acceleration 
accY = entity.gravity ;

// Convert acceleration to frame time
accX*=dt;
accY*=dt;
	
// apply acceleration to change velocity
entity.dx += accX;
entity.dy += accY;

// apply damping to halt player nicely only if acceleration = 0 
if(accX === 0) {
	entity.dx *= DAMP;				
	//  apply damping to halt to MIN_VEL 
	if (entity.dx > 0 && entity.dx < MIN_VEL) {
		entity.dx = 0;
	}
	if (entity.dx < 0 && entity.dx > -MIN_VEL ) {
		entity.dx = 0;
	}	
}
else { //limit acceleration
	// ensure terminal velocity is not exceeded
	if (entity.dx > entity.maxdx ) {
		entity.dx = entity.maxdx ;
	}
	if (entity.dx < -entity.maxdx ) {
		entity.dx = -entity.maxdx ;
	}
}
```

This is it, the gravity and ths user inputs have been added in the player update loop.
 
## <a name="tilemap_rendering"></a>Adding tilemap rendering

Tilemap  was not a big deal to render, the difficulty was to adapt it to different viewports.
The Tilemap was done with Tiled software, and exported in JSON file description. The file was then loaded with an `XHtmlRequest` as we did for [adding audio](http://givemehtml5.github.io/Week-5-audio-bug-changed-to-web-audio-API/#updating_game_audio_api)

```javascript
for(y = 0 ; y < MAP.th ; y++) {
  for(x = 0 ; x < MAP.tw ; x++) {
	cell = tcell(x, y);
	if (cell) {
	  // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
		context.drawImage( lvl_img, lvl_json.tilewidth*(cell-1) , 0, lvl_json.tilewidth, lvl_json.tileheight, 
		(x*TILE-cam.getPos().x)*ScreenRatio,(RefGameHeight+(y-MAP.th)*TILE-cam.getPos().y)*ScreenRatio,TILE*ScreenRatio , TILE*ScreenRatio);
	
	}
  }
}
```

As you can see, the cells are rendered in a postiion which depend of the `ScreenRatio` value and also of the `cam.getPos()`.
All rendering is based on a camera class which represent a square around the player.

The camera claas tracks the player position to update its position, the dimensions of the camera are also related to `ScreenRatio` value... 


## <a name="collision_management"></a>Collision management

Collision has not yet been improved, yet it's basically a check of intersection between a boundary rectangle around the player, and a boundary rectangle around all other entities.

All entities have an associated rectangle :

```javascript
collisionRect= {
  x:   MovableEntities[x].bounds.x,
  y:    MovableEntities[x].bounds.y,
  width:  MovableEntities[x].bounds.width,
  height: MovableEntities[x].bounds.height
};
```

Then all rectangle checks if it intersects with others :

```javascript
function intersect(a, b) {
	return !(a.x > b.x+b.width || 
	a.x+a.width < b.x || 
	a.y+a.height < b.y ||
	a.y > b.y+b.height);
 }
``` 

It's a lot of calculation which can be reduced by not checking the intersections with the rectangles which obviously cannot collide with the player.


## <a name="rendering"></a>Rendering with different viewport dimensions

As JS stay a nightmare in terms of floating calculation, I decided to fix the ratio between the reference height and the user height.

```javascript
for(ratio = 0.1;ratio<2;ratio+=0.1) {
	if(gameheight>=RefGameHeight*ratio) 
		ScreenRatio=ratio.toFixed(2);
}
```

That helped a lot as all positions and dimensions for rendering are related to `ScreenRatio` value.

Next week, I'm going to include all the game mechanics like death, gameover, and reset so ...

## Let's code!
