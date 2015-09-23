---
layout: post
title: Week 2, Input detection
---

![excerpt picture](/images/posts/2015-9-25/excerpt.png "excerpt picture" =100x)
<img src="/images/posts/2015-9-25/excerpt.png" alt="excerpt picture" style="width:200px;height:148px;">

Input detection is actualy the interface between the player and the game. It's one of the main difference between a fun game and a unplayable game... 

The game must listen to input events, that's why we add EventListener to the document :

```javascript
document.addEventListener('keydown', inputManager.handleKeyDown, false);
document.addEventListener('keyup',   inputManager.handleKeyUp, false);
worldRenderer.getCanvas().addEventListener("touchstart", inputManager.handleStart, false); 
worldRenderer.getCanvas().addEventListener("touchend", inputManager.handleEnd, false); 
worldRenderer.getCanvas().addEventListener("touchleave", inputManager.handleEnd, false);   
```

We add these listeners to the `document` for keyboard inputs and to the `<canvas>` for touch events.

Then the inputManager will include these functions to track on which key did the player press, or where did he touch the canvas.

## <a name="key_press"></a>Keyboard input

The keyboard input must check which key has been pressed. This is related to the keyCode value. Although Firefox and opera use charCode instead of keyCode.

```javascript
var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
if(38===keyCode) { e.preventDefault(); input |= 8;} //1000 JUMP (UP)
if(32===keyCode) { e.preventDefault(); input |= 4;} //0100 ACTION (SPACE)
if(37===keyCode) { e.preventDefault(); input |= 2;} //0010 LEFT
if(39===keyCode) { e.preventDefault(); input |= 1;} //0001 RIGHT
```

### Bitwising the key

The idea is to play with bit operator & and | to update an input value. 
That allow us to return only one value instead of getting back an array of boolean everywhere.

the preventDefault function is there to prevent the key to fire the standard function. 
For example, the player doesn't want to go up the web page when he presses up, he just wants to jump !


## <a name="screen_touch"></a>Touch input

The touch input is more tricky as 




We have now set-up the input management. 
Next step will be to manage the assets...


## Let's code!
