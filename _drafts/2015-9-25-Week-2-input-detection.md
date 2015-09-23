---
layout: post
title: Week 2, Input detection
---

![excerpt picture](/images/posts/2015-9-25/excerpt.png "excerpt picture")

Input detection is actualy the interface between the player and the game. It's one of the main difference between a fun game and a unplayable game... 

The game must listen to input events, that's why we add EventListener to the document :

```javascript
document.addEventListener('keydown', inputManager.handleKeyDown, false);
document.addEventListener('keyup',   inputManager.handleKeyUp, false);
worldRenderer.getCanvas().addEventListener("touchstart", inputManager.handleStart, false); 
worldRenderer.getCanvas().addEventListener("touchend", inputManager.handleEnd, false); 
worldRenderer.getCanvas().addEventListener("touchleave", inputManager.handleEnd, false);   
```

We add these listeners to the 
```javascript
document
``` 
for keyboard inputs and to the
```html
<canvas>
```
for touch events.

Then the inputManager will include these functions to track on which key did the player press, or where did he touch the canvas.

## <a name="key_press"></a>Keyboard input



## <a name="screen_touch"></a>Touch input






We have now set-up the input management. 
Next step will be to manage the assets...


## Let's code!
