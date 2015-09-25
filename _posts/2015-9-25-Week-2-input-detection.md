---
layout: post
title: Week 2, Input detection
---

<!---
![excerpt picture](/images/posts/2015-9-25/excerpt.png "excerpt picture" =100x)
-->
<img src="/images/posts/2015-9-25/excerpt.png" alt="excerpt picture" style="width:100px;height:74px;">

Input detection is obviously the main half of the interface between the player and the game, the other half is the game interface itself which send the inputs from the game to the player.

A bad input detection is the main difference between a fun game and an unplayable game... 

How to do that in our [html5 game](http://givemehtml5.github.io) ? 
1. Decide how many inputs you need for the game (in our case, left/right up and action)
2. Decide which area will be touch sensitive for inputs
3. Listen to input events, by using`addEventListener`
4. Handling key inputs and also touch events as the html5 game is playable from mobile

```javascript
	document.addEventListener('keydown', inputManager.handleKeyDown, false);
	document.addEventListener('keyup',   inputManager.handleKeyUp, false);
	canvas.addEventListener("touchstart", inputManager.handleStart, false); 
	canvas.addEventListener("touchend", inputManager.handleEnd, false); 
	canvas.addEventListener("touchleave", inputManager.handleEnd, false); 
```

We add these listeners to the `document` for keyboard inputs and to the `<canvas>` for touch events. 
The inputManager will include functions to track on which key did the player press, or where did he touch the canvas.

## <a name="key_press"></a>Handling a keyboard input

The keyboard input handling function checks which key has been pressed.
This is related to the keyCode value. Although Firefox and opera use charCode instead of keyCode. That's why there is a short test at the beginning to take the right value.

```javascript
var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
if(38===keyCode) { e.preventDefault(); input |= 8;} //1000 JUMP (UP)
if(32===keyCode) { e.preventDefault(); input |= 4;} //0100 ACTION (SPACE)
if(37===keyCode) { e.preventDefault(); input |= 2;} //0010 LEFT
if(39===keyCode) { e.preventDefault(); input |= 1;} //0001 RIGHT
```

### Bitwising the key

As we want to keep only one value for all input states, the idea is to play with bit operator & and | to update the input value. 
Then we manage a unique variable instead of getting back an array of boolean. That also means only one value to send/read during online game.

the preventDefault function is there to prevent the key to fire the standard function associated with the key. 
The player doesn't want to go up the web page when he presses up, what he wants is just .. Jumping !


## <a name="screen_touch"></a>Handling a touch input

The touch input is more tricky as the players has multiple fingers (hopefully) and he can press together different areas, with different fingers.
We use the touchstart/touchend API which is working good except that the coordinates of the touch input is based on the full window...

That means we have to get the offset position of the canvas (remember we get touch inputs only inside the `<canvas>` element).
To do that I use this loop during the init and for all orientation changes.

```javascript
	//Recursive offset getter
	offsetX=0;
	offsetY=0;
	element = canvas;
	while (element) {
	offsetX += element.offsetLeft;
	offsetY += element.offsetTop;
	element = element.offsetParent;
	}
```

After the coordinates have been set-up, it's easy to check if the X/Y position of your finger is inside the correct sensitive area.

```javascript
	if (rectJumpcontains(touchX, touchY)) {
			input |= 8;//1000 JUMP 
	        jumpPointer=e.changedTouches[0].identifier; 
	}
```

As the player may have more than one finger (hopefully) the API provides us an identifier for each finger which is touching the screen.
This identifier must be stored as the identifier relative to an action.
Then when a finger is removed from the screen, we just have to check its identifier to know which input as to be released.

```javascript
	if (jumpPointer === e.changedTouches[0].identifier) {
			 input &= 7;			 
	}
```

We have now set-up the input management, you can see the result on the [html5 game page](http://givemehtml5.github.io)
Next step will be to manage the assets...

## Let's code!
