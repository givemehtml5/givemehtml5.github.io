function CustomSound(e,t,n){var i=e,o=null,n=n+"?nocache="+Math.random(),a=!1,r=new XMLHttpRequest
r.onload=function(){null!=r.response&&(Soundcontext.decodeAudioData(r.response,function(e){DebugMode&&console.log("buffer: "+e),o=e},null),i())}
var s=!0
this.setloop=function(e){a=e},this.request=function(){r.open("GET",n,!0),r.responseType="arraybuffer",r.setRequestHeader("Cache-Control","no-cache"),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.send(null)},this.play=function(){if(!0===s&&null!=o){var e=Soundcontext.createBufferSource()
e.loop=a,e.buffer=o,e.connect(Soundcontext.destination),s=!1,e.start(0),e.onended=function(){s=!0,console.log("Your audio has finished playing")}}}}function CustomSprite(e,t,n){var i=e,o=new Image
this.getSprite=function(){return o}
var n=n+"?nocache="+Math.random(),a=null
this.getJson=function(){return a}
var r=new XMLHttpRequest
r.onload=function(){null!=r.response&&(a=r.response,i())},this.request=function(){r.open("GET",n,!0),r.responseType="json",r.setRequestHeader("Cache-Control","no-cache"),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.send(null)}}function Animation(){var e={},t=0,n=0,i=0,o=0
this.setFrame=function(n,i,a){e[i]=n,o=a,t++},this.getFrame=function(){return e[i]},this.update=function(e){if(!(0>=o))for(n+=e;n>=o;)n-=o,i++,i>=t&&(i=0)}}function Player(e){for(var t=e,n=t.getSprite(),i=t.getJson(),o={},a=0;a<i.length;a++){var r=i[a]
o[r.name]=r}var s=new Animation
s.setFrame(o["idle-left"],0,.1)
var u=new Animation
u.setFrame(o["idle-right"],0,.1)
var h=new Animation
h.setFrame(o["up-left"],0,.1)
var d=new Animation
d.setFrame(o["down-left"],0,.1)
var c=new Animation
c.setFrame(o["up-right"],0,.1)
var g=new Animation
g.setFrame(o["down-right"],0,.1)
var l=new Animation,f=new Animation
for(a=0;5>a;a++)l.setFrame(o["left-anim-0"+(a+2)],a,.1),f.setFrame(o["right-anim-0"+(a+2)],a,.1)
var m=null,w=s.getFrame().width,p=s.getFrame().height,v={IDLE:1,WALKING:2,JUMPING:3,DYING:4},A=v.IDLE,x=!1,L=0,b=0,R=0,S=0,D=0,y=50,F=!1,M=!1,T=!1,E=!1
this.getX=function(){return D},this.getY=function(){return y},this.isJumping=function(){return T},this.isPerformingAction=function(){return E},this.isLeft=function(){return F},this.isRight=function(){return M},this.isFacingLeft=function(){return x},this.getState=function(){return A},this.getAccelerationX=function(){return L},this.getAccelerationY=function(){return b},this.getSpeedX=function(){return R},this.getSpeedY=function(){return S},this.update=function(e,t){F=!1,M=!1,T=!1,E=!1,8===(8&e)&&(T=!0,A=v.JUMPING),4===(4&e)&&(E=!0,A=v.IDLE),2===(2&e)&&(F=!0,x=!0,A=v.WALKING,D-=1,-10>D&&(D=-10)),1===(1&e)&&(M=!0,x=!1,A=v.WALKING,D+=1,D>10&&(D=10)),m=x?s:u,v.WALKING===A?m=x?l:f:v.JUMPING===A&&(m=S>0?x?h:c:x?d:g),m.update(t)},this.render=function(e){null!==m&&e.drawImage(n,m.getFrame().x,m.getFrame().y,w,p,500,y,w*ScreenRatio,p*ScreenRatio)}}function Level(e){this.getThis=function(){return this},this.update=function(){},this.render=function(){}}function Background(e,t,n,i,o,a){var r=e,s=t,u=n,h=i,d=o,c=a,g=0,l=0,f=parseFloat((width/(h*ScreenRatio)).toFixed(1))+1,m=1
this.getThis=function(){return this},this.update=function(e){g=parseFloat((g-e*c).toFixed(1))%(h*ScreenRatio)},this.render=function(e){var t=g>0?-1:0,n=l>0?-1:0
for(row=0;row<m;row++)for(col=0;col<f;col++)e.drawImage(r,s,u,h,d,g+(col+t)*h*ScreenRatio,l+(n+row)*d*ScreenRatio,h*ScreenRatio,d*ScreenRatio)}}function InputManager(){function e(e,t){return e>0&&e<width&&t>height-gameheight&&t<height-gameheight/2?!0:!1}function t(e,t){return e>.25*width&&e<.75*width&&t>height-gameheight/2&&t<height?!0:!1}function n(e,t){return e>0&&e<.25*width&&t>height-gameheight/2&&t<height?!0:!1}function i(e,t){return e>.75*width&&e<width&&t>height-gameheight/2&&t<height?!0:!1}var o=0,a=-1,r=-1,s=-1,u=-1
this.GetInput=function(){return o},this.handleKeyDown=function(e){var t=e.keyCode?e.keyCode:e.charCode
38===t&&(e.preventDefault(),o|=8),32===t&&(e.preventDefault(),o|=4),37===t&&(e.preventDefault(),o|=2),39===t&&(e.preventDefault(),o|=1)},this.handleKeyUp=function(e){var t=e.keyCode?e.keyCode:e.charCode
38===t&&(e.preventDefault(),o&=7),32===t&&(e.preventDefault(),o&=11),37===t&&(e.preventDefault(),o&=13),39===t&&(e.preventDefault(),o&=14)},this.handleStart=function(h){h.preventDefault(),DebugMode&&console.log("input : "+width+"-"+h.changedTouches[0].clientX+"-"+h.changedTouches[0].clientY)
var d=h.changedTouches[0].clientX-offsetX,c=h.changedTouches[0].clientY-offsetY
DebugMode&&console.log("input : "+width+"-"+d+"-"+c),e(d,c)&&(o|=8,a=h.changedTouches[0].identifier),t(d,c)&&(o|=4,u=h.changedTouches[0].identifier),n(d,c)&&(o|=2,r=h.changedTouches[0].identifier),i(d,c)&&(o|=1,s=h.changedTouches[0].identifier)},this.handleEnd=function(e){e.preventDefault(),a===e.changedTouches[0].identifier&&(o&=7),u===e.changedTouches[0].identifier&&(o&=11),r===e.changedTouches[0].identifier&&(o&=13),s===e.changedTouches[0].identifier&&(o&=14)}}function AssetManager(){function e(e,t,n,i){DebugMode&&console.log("PreLoad IMAGE : "+e),a[e]=new Image,a[e].name=e,a[e].frameWidth=n,a[e].frameHeight=i,a[e].onload=o.AssetLoaded,a[e].src=t}function t(e,t,n){DebugMode&&console.log("PreLoad IMAGE : "+e),a[e]=new CustomSprite(o.AssetLoaded,e,n),a[e].getSprite().onload=o.AssetLoaded,a[e].getSprite().src=t,a[e].request()}function n(e,t,n){DebugMode&&console.log("PreLoad SOUND : "+e),r[e]=new CustomSound(o.AssetLoaded,e,t,n),!0===soundEnabled&&r[e].request()}var i=0,o=this,a={}
this.imgs=a
var r={}
this.sounds=r
var s=0,u=0,h=0,d=0
this.PreLoad=function(o){i=o,DebugMode&&console.log("enter PreLoad"),s=2,numSprite=1,u=2,h=!0===soundEnabled?s+2*numSprite+u:s+2*numSprite,d=0,e("bgs","assets/imgs/bgs.png",800,1800),e("ship","assets/imgs/ship.png",0,0),t("hero","assets/imgs/spritesheet.png","assets/imgs/spritesheet.json"),n("laser","./assets/sounds/laser.wav",.5),n("background","./assets/sounds/background.mp3",.1),DebugMode&&console.log("PreLoad in progress...")},o.AssetLoaded=function(){d++,d===h&&(DebugMode&&console.log("AssetsLoaded"),i.start())}}function WorldRenderer(e){var t=e,n=[]
n[0]=new Background(t.imgs.bgs,0,0,800,600,0),n[1]=new Background(t.imgs.bgs,0,600,800,600,.5),n[2]=new Background(t.imgs.bgs,0,1200,800,600,1)
var o=new Player(t.imgs.hero)
new Level(t)
this.update=function(e,t){for(o.update(e,t),i=0;i<n.length;i++)n[i].update(o.getX())},this.render=function(){for(ctx.clearRect(0,0,width,height),i=0;i<n.length;i++)n[i].render(ctx)
o.render(ctx),ctx.fillStyle="red",!0===o.isJumping()&&ctx.fillRect(0,height-gameheight,width,gameheight/2),!0===o.isPerformingAction()&&ctx.fillRect(.25*width,height-gameheight/2,width/2,gameheight/2),!0===o.isLeft()&&ctx.fillRect(0,height-gameheight/2,width/4,gameheight/2),!0===o.isRight()&&ctx.fillRect(.75*width,height-gameheight/2,width/4,gameheight/2),ctx.fillStyle="white",ctx.font="15px Arial",ctx.fillText("Press or touch",.45*width,.45*gameheight),1==o.isJumping()&&ctx.fillText("JUMP",.45*width,.25*gameheight),!0===o.isPerformingAction()&&ctx.fillText("ACTION",.45*width,.75*gameheight),!0===o.isLeft()&&ctx.fillText("LEFT",.1*width,.75*gameheight),!0===o.isRight()&&ctx.fillText("RIGHT",.8*width,.75*gameheight),!0===o.isPerformingAction()&&t.sounds.laser.play()}}function Game(){function e(e){e.style.display="none"}function t(e){e.style.display="block"}function n(){e(canvas),t(a)}var i,o=this,a=document.getElementById("menu-wrapper"),r=!1
canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),width=canvas.width,height=canvas.height,gameheight=canvas.height,offsetX=0,offsetY=0,ScreenRatio=1,soundEnabled=!1
try{window.AudioContext=window.AudioContext||window.webkitAudioContext,Soundcontext=new AudioContext,soundEnabled=!0}catch(s){soundEnabled=!1,alert("Web Audio API is not supported in this browser")}var u,h=60,d=1/h,c=new AssetManager,g=new InputManager;(new Date).getTime()
o.init=function(){DebugMode&&console.log("enter init"),o.resize(),c.PreLoad(o)},o.start=function(){DebugMode&&console.log("enter start"),u=new WorldRenderer(c),n(),DebugMode&&console.log("enter animate"),o.animate()},o.animate=function(){window.requestAnimFrame(o.animate),!0===r&&(i=g.GetInput(),u.update(i,d)),u.render()},o.resize=function(){for(DebugMode&&console.log("enter resize"),offsetX=0,offsetY=0,element=canvas;element;)offsetX+=element.offsetLeft,offsetY+=element.offsetTop,element=element.offsetParent
ctx.canvas.width=ctx.canvas.offsetWidth,ctx.canvas.height=ctx.canvas.offsetHeight,width=ctx.canvas.width,height=ctx.canvas.height,gameheight=ctx.canvas.height,width<height&&(gameheight=parseFloat((height/2).toFixed(1))),ScreenRatio=parseFloat((gameheight/600).toFixed(1)),DebugMode&&console.log("ratio : "+ScreenRatio)},document.querySelectorAll(".play")[0].addEventListener("click",function(){e(a),t(canvas),o.resize(),c.sounds.background.setloop(!0),c.sounds.background.play(),r=!0}),window.addEventListener("resize",o.resize,!1),window.addEventListener("orientationchange",o.resize,!1),document.addEventListener("keydown",g.handleKeyDown,!1),document.addEventListener("keyup",g.handleKeyUp,!1),canvas.addEventListener("touchstart",g.handleStart,!1),canvas.addEventListener("touchend",g.handleEnd,!1),canvas.addEventListener("touchleave",g.handleEnd,!1),o.init()}DebugMode=!1,window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),game=new Game
