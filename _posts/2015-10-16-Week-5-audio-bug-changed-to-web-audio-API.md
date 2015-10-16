---
layout: post
title: Week 5, Bug resolution, develop the game with the Web Audio API
---


<img src="/images/posts/2015-10-16/excerpt.png" alt="excerpt picture" style="width:150px;height:111px;">

A short article this week, as it has been a real nightmare to modify the Audio management which was not working on mobile devices.
That's why we changed to Web audio API instead of Audio API. 
The new Web Audio API is still not working with firefox which we don't understand why, although it works on chrome and IOS...

## <a name="updating_game_audio_api"></a>Updating the html5 game Audio API

The game is now working with music on many devices, you can check the [html5 game](http://givemehtml5.github.io) on your side with your hardware and let me know by leaving some comments.

We created a new class for the Audio management, based on an XHtmlRequest which get the audio file either .wav or .mp3.

```javascript
this.request = function() {

		xrq.open('GET', src, true);
		xrq.responseType = 'arraybuffer';
		
		// Decode asynchronously
		xrq.onload = function() {
				Soundcontext.decodeAudioData(xrq.response, function(buffer) {
				Soundbuffer = buffer;
				
				}, null);
				requestcallback();

		}		
		xrq.send();			
```

The Audio file is then loaded inside the Soundbuffer and it can be played during the game.

```javascript
this.play = function() {
				
				var source = Soundcontext.createBufferSource(); 
				source.buffer = Soundbuffer;                    
				source.connect(Soundcontext.destination);
      			source.start(0);                          											 
	}
```

We still need to work on the different sound customization that this API is able to do, the custom `Gain` for example to balance different sounds together.
We also have to understand why the `xhr` is not working on firefox, the response is permanently `null`..... 

## <a name="main_menu"></a>A Menu for the html5 game

The [html5 game](http://givemehtml5.github.io) must have an autoplay background music and that's not possible on mobile as the user has to interact with the game before starting music.
The idea is to get a short menu which force the user to press on play to start the game.


We will now have some rest and continue working on assets, especially on the hero sprite animation

## Let's code!
