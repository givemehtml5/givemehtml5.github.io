---
layout: post
title: Week 3, Create and manage assets
---


<img src="/images/posts/2015-10-02/excerpt.png" alt="excerpt picture" style="width:150px;height:111px;">

This week, we are going to start working with the assets. This part will take me more than 1 week, and the assets will continue to change until final release.

We will begin with the main steps below :
1. We will have to preload the assets before using them, as the [html5 game](http://givemehtml5.github.io) will need some time to load each media.
2. We need to organize the global game architecture to integrate the assets preloading


## <a name="assets_preloading"></a>Assets preloading

During assets preloading, we need to wait until all media have been successfully loaded.
That's why we will use the `onload` method, and we will pass to the preload function a way to callback the main function in order to continue the initialisation phase.

```javascript
asset.PreLoad(self);
```

Our [html5 game](http://givemehtml5.github.io) will obviously include picture assets for background, entities such as heroes and enemies, and it will also include music and sound effects.
The way to preload both pictures and sounds is a bit different.

### Image preloading

The image preloading uses the standard `new Image()` API to load the assets.

```javascript
imgs[name] = new Image();
imgs[name].name = name;
imgs[name].onload = AssetLoaded;
imgs[name].src = src;
```

The picture is asynchronously loaded and it fires `onload` method after loading.


### Sound and Music preloading

If we want to load sound or music, it's a bit different as there is no `onload` method.
That's why we use an `addEventListener('canplaythrough')` which fires when the media has been loaded.

```javascript
sounds[name] = new Audio();
sounds[name].name = name;
sounds[name].volume = .12;
sounds[name].addEventListener('canplaythrough', AssetLoaded, false);
sounds[name].src = src;
```

the `AssetLoaded` function only checks if the number of loaded contents fits the desired number of medias.


## <a name="game_architecture"></a>Organize the html5 game architecture

We already talked about the main loop in a [previous post: Week 1, The html part of the game](http://givemehtml5.github.io/Day-0-A-long-journey/#game_engine).
We updated it as below to include assets management :

<img src="/images/posts/2015-10-02/1.png" alt="main loop 1" style="width:150px;height:auto;">

There are four main modules so far (although the send/receive module does not exists yet).
The first one is done, you can read this previous [post about input detection](http://givemehtml5.github.io/Week-2-input-detection/).
The assets will change the third and fourth modules about updating the game state and also rendering the assets.

There is a lot to do next week to integrate these assets in the game loop...

## Let's code!
