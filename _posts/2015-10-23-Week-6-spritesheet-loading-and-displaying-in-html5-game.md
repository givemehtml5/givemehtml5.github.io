---
layout: post
title: Week 6, Load and display sprites in html5 games
---


<img src="/images/posts/2015-10-23/excerpt.png" alt="excerpt picture" style="width:150px;height:111px;">

This week, I worked added the hero animation on the [html5 game](http://givemehtml5.github.io).
I followed five main steps to do that :

1. Create a spritesheet with associated Json sprite description
2. Preload both spritesheet image and Json file
3. Create player animation relative to certain parts of the spritesheet
4. Check input to detect which animation should be used
5. Render the right frame at the right time


## <a name="create_spritesheet"></a>Create the spritesheet

There are different ways to create a spritesheet. It's easy to google how to [create a spritesheet online](https://www.google.fr/?gws_rd=ssl#q=create%20sprite%20sheet%20online).
I won't explain what a sprite is as you can also find a lot of information by yourself.

The tricky part was to know what is the most effective way to manage mirrored sprites:
1. Get only 1-sided spritesheet and mirror images in application
2. Get a mirrored spritesheet

I tried idea 1 but the rendering time went to the sky, I don't have numbers but the game went laggy, not accepted !
Obviously idea 2 means double size of the spritesheet image, which is not a big issue yet as my spritesheet is only 2.5ko... But this can be an issue if you have big sprites with a lot more details.

There could be a third solution I didn't test, to load a 1-sided spritesheet and mirror it during preloading, so that win on both topics, downloading time and rendering time.

## <a name="preload_spritesheet"></a>Preload the spritesheet

During preloading, the game load both the spritesheet image, and the spritesheet description based on a Json file as below :

```javascript
[{"name":"down-left","x":0,"y":0,"width":32,"height":64},
{"name":"down-right","x":33,"y":0,"width":32,"height":64},
...
{"name":"up-right","x":165,"y":0,"width":32,"height":64}]
```

This file describes the areas of the spritesheet image where you can find the desired sprite.
We will see at the end of the article how to render the sprite.


## <a name="create_player_animation"></a>Create the player animation

For each movements, we create a new animation, then we add frames to this animation.

```javascript
var walk_Right=new Animation();
	for ( i = 0; i < 5; i++) {
		walk_Right.setFrame(TexRegion["right-anim-0" + i],i, 0.1 );	
	}
```

The game will then update the animation to display frame after frame and go back to initial frame.


## <a name="check_input"></a>Check input and animate

The player class contains different states for the player, and depending of the active state, the update loop will select the right animation to display.

```javascript
currentAnim = facingLeft ? PlayerIdleLeft : PlayerIdleRight;
if(PlayerState.WALKING===state) {
	currentAnim = facingLeft ? walkLeftAnimation : walkRightAnimation;
} else if (PlayerState.JUMPING===state) {
	if (speedY > 0) {
		currentAnim = facingLeft ? PlayerJumpLeft : PlayerJumpRight;
	} else {
		currentAnim = facingLeft ? PlayerFallLeft : PlayerFallRight;
	}
}
currentAnim.update(dt);
```

Then inside the `animation.update()` function, we update the `currentFrame` index depending of the update tick time.

```javascript
this.update = function(dt) {
	if(delay <= 0) return;
	time += dt;
	while(time >= delay) {
		time -= delay;
		currentFrame++;
		if(currentFrame >= ObjframesLength) {
			currentFrame = 0;
		}
	}
}
```

## <a name="render_sprite"></a>Render the frames

Rendering the sprite is actually rendering the full spritesheet, using clipping to select the frame to render and getting hero position X and Y to place the sprite.

This can be done with `drawImage` function, as below :

```javascript
this.render= function (context) {

	if(null === currentAnim) return;
			
	context.drawImage( player_img, currentAnim.getFrame().x , currentAnim.getFrame().y, Framewidth, Frameheight,
	PosX,PosY,Framewidth , Frameheight);
}
```

And that's all, you can now see the hero moving in the air in our [html5 game](http://givemehtml5.github.io).

Next week, I will add the tilemap, and together with collision and gravity, the hero will walk on the level !! 

## Let's code!
