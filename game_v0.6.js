function CustomSound(e,t,n,i){var o,r=e,a=null,n=n+"?nocache="+Math.random(),s=!1
try{o=new XMLHttpRequest}catch(d){try{o=new ActiveXObject("Msxml2.XMLHTTP")}catch(d){try{o=new ActiveXObject("Microsoft.XMLHTTP")}catch(d){alert("Your browser cannot support ajax!")}}}o.onload=function(){null!=o.response&&(Soundcontext.decodeAudioData(o.response,function(e){DebugMode&&console.log("buffer: "+e),a=e},null),r())}
var u=!0
this.setloop=function(e){s=e},this.request=function(){o.open("GET",n,!0),o.responseType="arraybuffer",o.setRequestHeader("Cache-Control","no-cache"),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.send(null)},this.play=function(){if(!0===u&&null!=a){var e=Soundcontext.createBufferSource()
e.loop=s,e.buffer=a,e.connect(Soundcontext.destination),u=!1,e.start(0),e.onended=function(){u=!0,console.log("Your audio has finished playing")}}}}function Camera(e,t,n,i,o,r){var a={NONE:"none",HORIZONTAL:"horizontal",VERTICAL:"vertical",BOTH:"both"},e=e||0,t=t||0,s=0,d=0,u=n,h=i,c=a.BOTH,g=null,l={x:e,y:t,width:u,height:h},f={x:0,y:0,width:o,height:r}
this.setViewport=function(e,t,n,i){u=e,l.width=u,h=t,l.height=h,s=e/2,d=t/2,f.width=n,f.height=i},this.follow=function(e,t,n){g=e,s=u/2,d=h/2},this.getX=function(){return e},this.getY=function(){return t},this.getPos=function(){return{x:e,y:t}},this.getDebug=function(){return{xdead:s,w:f.width}},this.update=function(){null!=g&&((c==a.HORIZONTAL||c==a.BOTH)&&(e=g.getX()-(u-s)),(c==a.VERTICAL||c==a.BOTH)&&(t=-g.getY()-(h-d))),l.x=e,l.y=t,l.x+l.width>f.x+f.width&&(e=f.x+f.width-l.width),(l.x<=f.x||l.width>f.width)&&(e=f.x),l.y+l.height>f.y+f.height&&(t=f.height-h),(l.y<=f.y||l.height>f.height)&&(t=f.y)}}function CustomSprite(e,t,n){var i=e,o=new Image
this.getSprite=function(){return o}
var n=n+"?nocache="+Math.random(),r=null
this.getJson=function(){return r}
var a=null
try{a=new XMLHttpRequest}catch(s){try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(s){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(s){alert("Your browser cannot support ajax!")}}}a.onreadystatechange=function(){4==a.readyState&&null!=a.responseText&&(r=JSON.parse(a.responseText),null!=r?i():alert("your browser cannot support Json.parser"))},this.request=function(){a.open("GET",n,!0),a.setRequestHeader("Cache-Control","no-cache"),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.send(null)}}function Animation(){var e={},t=0,n=0,i=0,o=0
this.setFrame=function(n,i,r){e[i]=n,o=r,t++},this.getFrame=function(){return e[i]},this.update=function(e){if(!(0>=o))for(n+=e;n>=o;)n-=o,i++,i>=t&&(i=0)}}function Monster(e){for(var t=e,n=t.getSprite(),i=t.getJson(),o={},r=0;r<i.length;r++){var a=i[r]
o[a.name]=a}var s=new Animation
s.setFrame(o["idle-left"],0,.1)
var d=new Animation
d.setFrame(o["idle-right"],0,.1)
var u=new Animation
u.setFrame(o["up-left"],0,.1)
var h=new Animation
h.setFrame(o["down-left"],0,.1)
var c=new Animation
c.setFrame(o["up-right"],0,.1)
var g=new Animation
g.setFrame(o["down-right"],0,.1)
var l=new Animation,f=new Animation
for(r=0;5>r;r++)l.setFrame(o["left-anim-0"+(r+2)],r,.1),f.setFrame(o["right-anim-0"+(r+2)],r,.1)
var m,x=null,w=s.getFrame().width,p=s.getFrame().height,y={IDLE:1,WALKING:2,JUMPING:3,DYING:4},v=y.IDLE,b=!1,A=0,M=0,L=.5,I=.1,E=!1,P=!1,T=!1
this.getX=function(){return m.x},this.setX=function(e){m.x=e},this.getY=function(){return m.y},this.setY=function(e){m.y=e},this.getWidth=function(){return w},this.getHeight=function(){return p},this.isJumping=function(){return y.JUMPING==v},this.isPerformingAction=function(){return T},this.isLeft=function(){return E},this.isRight=function(){return P},this.isFacingLeft=function(){return b},this.getState=function(){return v},this.getAccelerationX=function(){return A},this.getAccelerationY=function(){return M},this.getSpeedX=function(){return m.dx},this.getSpeedY=function(){return m.dy},this.setEntity=function(e){m=e},this.Isdead=function(){return m.killed},this.update=function(e,t){!0===m.grounded&&y.JUMPING===v&&(v=y.IDLE),M=m.gravity,A*=t,M*=t,m.dx+=A,m.dy+=M,0===A?(m.dx*=L,m.dx>0&&m.dx<I&&(m.dx=0),m.dx<0&&m.dx>-I&&(m.dx=0)):(m.dx>m.maxdx&&(m.dx=m.maxdx),m.dx<-m.maxdx&&(m.dx=-m.maxdx)),x=b?s:d,y.WALKING===v?x=b?l:f:y.JUMPING===v&&(x=m.dy>0?b?u:c:b?h:g),x.update(t)},this.render=function(e,t){if(null!==x){var i=gameheight-(m.y+m.height)
e.drawImage(n,x.getFrame().x,x.getFrame().y,w,p,m.x-t.getPos().x,i-t.getPos().y,w,p)}}}function Player(e){for(var t=e,n=t.getSprite(),i=t.getJson(),o={},r=0;r<i.length;r++){var a=i[r]
o[a.name]=a}var s=new Animation
s.setFrame(o["idle-left"],0,.1)
var d=new Animation
d.setFrame(o["idle-right"],0,.1)
var u=new Animation
u.setFrame(o["up-left"],0,.1)
var h=new Animation
h.setFrame(o["down-left"],0,.1)
var c=new Animation
c.setFrame(o["up-right"],0,.1)
var g=new Animation
g.setFrame(o["down-right"],0,.1)
var l=new Animation,f=new Animation
for(r=0;5>r;r++)l.setFrame(o["left-anim-0"+(r+2)],r,.1),f.setFrame(o["right-anim-0"+(r+2)],r,.1)
var m,x=null,w=s.getFrame().width,p=s.getFrame().height,y={IDLE:1,WALKING:2,JUMPING:3,DYING:4},v=y.IDLE,b=!1,A=0,M=0,L=0,I=10,E=10,P=.5,T=.1,R=!1,G=!1,F=!1,D=!1
this.getX=function(){return m.x},this.setX=function(e){m.x=e},this.getY=function(){return m.y},this.setY=function(e){m.y=e},this.getWidth=function(){return w},this.getHeight=function(){return p},this.isJumping=function(){return y.JUMPING==v},this.isPerformingAction=function(){return D},this.isLeft=function(){return R},this.isRight=function(){return G},this.isFacingLeft=function(){return b},this.getState=function(){return v},this.getAccelerationX=function(){return M},this.getAccelerationY=function(){return L},this.getSpeedX=function(){return m.dx},this.getSpeedY=function(){return m.dy},this.setEntity=function(e){m=e},this.Isdead=function(){return m.killed},this.update=function(e,t){R=!1,G=!1,F=!1,D=!1,8===(8&e)&&(F=!0,A++,y.JUMPING!=v?(jumpingPressed=!0,A=0,v=y.JUMPING,m.dy=E,m.grounded=!1):jumpingPressed&&A>=I?jumpingPressed=!1:jumpingPressed&&(m.dy=E)),0===(8&e)&&(jumpingPressed=!1),4===(4&e)&&(D=!0),2===(2&e)?(R=!0,b=!0,y.JUMPING!=v&&(v=y.WALKING),M>0&&(m.dx=0),M=-m.accel):1===(1&e)?(G=!0,b=!1,y.JUMPING!=v&&(v=y.WALKING),0>M&&(m.dx=0),M=m.accel):(y.JUMPING!=v&&(v=y.IDLE),M=0),!0===m.grounded&&y.JUMPING===v&&(v=y.IDLE),L=m.gravity,M*=t,L*=t,m.dx+=M,m.dy+=L,0===M?(m.dx*=P,m.dx>0&&m.dx<T&&(m.dx=0),m.dx<0&&m.dx>-T&&(m.dx=0)):(m.dx>m.maxdx&&(m.dx=m.maxdx),m.dx<-m.maxdx&&(m.dx=-m.maxdx)),x=b?s:d,y.WALKING===v?x=b?l:f:y.JUMPING===v&&(x=m.dy>0?b?u:c:b?h:g),x.update(t)},this.render=function(e,t){if(null!==x){var i=gameheight-(m.y+m.height)
e.drawImage(n,x.getFrame().x,x.getFrame().y,w,p,m.x-t.getPos().x,i-t.getPos().y,w,p)}}}function Level(e){function t(e){var t={}
return t.monster="monster"==e.type,t.player="player"==e.type,t.treasure="treasure"==e.type,t.width=t.treasure?d:i.getWidth(),t.height=t.treasure?d:i.getHeight(),t.sprite=null,!0===t.monster&&(t.sprite=new Monster(n.imgs.monster)),t.x=e.x/e.width*d,t.y=s.th*d-e.y/e.height*d,t.dx=0,t.dy=0,t.gravity=METER*(e.properties.gravity||GRAVITY),t.maxdx=METER*(e.properties.maxdx||MAXDX),t.maxdy=METER*(e.properties.maxdy||MAXDY),t.impulse=METER*(e.properties.impulse||IMPULSE),t.accel=t.maxdx/(e.properties.accel||ACCEL),t.friction=t.maxdx/(e.properties.friction||FRICTION),t.grounded=!1,t.left=e.properties.left,t.right=e.properties.right,t.start={x:t.x,y:t.y},t.bounds={x:t.x,y:t.y,width:t.width,height:t.height},t.killed=t.collected=0,t}var n=e,i=new Player(n.imgs.hero),o=n.imgs.lvl,r=o.getSprite(),a=o.getJson(),s={tw:a.width,th:a.height},d=20
METER=d,GRAVITY=-9.8/3,MAXDX=.5,MAXDY=60,ACCEL=1/15,FRICTION=1/6,IMPULSE=1500
var u=function(e){return e*d},h=function(e){return Math.floor(e/d)},c=function(e,t){return m[e+t*s.tw]},g={},l=[],f=[],m=[],x=[],p=[]
this.getHero=function(){return i},this.getWidth=function(){return s.tw*d},this.getHeight=function(){return s.th*d}
var y,v,b,A=a.layers[0].data,M=a.layers[1].objects
for(y=0;y<M.length;y++)switch(v=M[y],b=t(v),v.type){case"player":g=b,i.setEntity(b),x.push(b)
break
case"monster":l.push(b),b.sprite.setEntity(b),x.push(b)
break
case"treasure":f.push(b),p.push(b)}m=A
for(var L=0,I=s.th-1,E=0;E<A.length;E++){if(0!=A[E]){var P={}
P.renderdata=A[E],P.bounds={x:u(L),y:u(I),width:d,height:d},P.start={x:u(L),y:u(I)},p.push(P)}L++,L>=s.tw&&(L=0,I--)}var T=new CollisionManager(p,x)
this.respawn=function(){for(var e=0;e<x.length;e++)x[e].x=x[e].start.x,x[e].y=x[e].start.y,x[e].dx=0,x[e].dy=0,x[e].killed=0,x[e].grounded=!1
for(var e=0;e<p.length;e++)p[e].x=p[e].start.x,p[e].y=p[e].start.y,p[e].dx=0,p[e].dy=0,p[e].killed=0,p[e].grounded=!1},this.update=function(e,t){for(i.update(e,t),w=0;w<l.length;w++)l[w].sprite.update(0,t)
T.checkCollisionandUpdatePosition()},this.render=function(e,t){var n,o,u
for(o=0;o<s.th;o++)for(n=0;n<s.tw;n++)u=c(n,o),u&&e.drawImage(r,a.tilewidth*(u-1),0,a.tilewidth,a.tileheight,n*d-t.getPos().x,gameheight+(o-s.th)*d-t.getPos().y,d,d)
for(i.render(e,t),w=0;w<l.length;w++)l[w].sprite.render(e,t)}}function Background(e,t,n,i,o,r,a){var s=t,d=n,u=i,h=o,c=r,g=a,l=0,f=0,m=parseFloat((width/h).toFixed(1))+2,x=1
this.getThis=function(){return this},this.update=function(e){m=parseFloat((width/h).toFixed(1))+2,l=(-e.getPos().x*g).toFixed(1)%h,f=gameheight-e.getPos().y},this.render=function(e){var t=l>0?-1:0,n=f>0?-1:0
for(row=0;row<x;row++)for(col=0;col<m;col++)e.drawImage(s,d,u,h,c,l+(col+t)*h,f+(n+row)*c,h,c)}}function InputManager(){function e(e,t){return e>0&&e<width&&t>0&&t<gameheight/2?!0:!1}function t(e,t){return e>.25*width&&e<.75*width&&t>gameheight/2&&t<gameheight?!0:!1}function n(e,t){return e>0&&e<.25*width&&t>gameheight/2&&t<gameheight?!0:!1}function i(e,t){return e>.75*width&&e<width&&t>gameheight/2&&t<gameheight?!0:!1}var o=0,r=-1,a=-1,s=-1,d=-1
this.GetInput=function(){return o},this.handleKeyDown=function(e){var t=e.keyCode?e.keyCode:e.charCode
38===t&&(e.preventDefault(),o|=8),32===t&&(e.preventDefault(),o|=4),37===t&&(e.preventDefault(),o|=2),39===t&&(e.preventDefault(),o|=1)},this.handleKeyUp=function(e){var t=e.keyCode?e.keyCode:e.charCode
38===t&&(e.preventDefault(),o&=7),32===t&&(e.preventDefault(),o&=11),37===t&&(e.preventDefault(),o&=13),39===t&&(e.preventDefault(),o&=14)},this.handleStart=function(u){u.preventDefault(),DebugMode&&console.log("input : "+width+"-"+u.changedTouches[0].clientX+"-"+u.changedTouches[0].clientY)
var h=u.changedTouches[0].clientX-offsetX,c=u.changedTouches[0].clientY-offsetY
DebugMode&&console.log("input : "+width+"-"+h+"-"+c),e(h,c)&&(o|=8,r=u.changedTouches[0].identifier),t(h,c)&&(o|=4,d=u.changedTouches[0].identifier),n(h,c)&&(o|=2,a=u.changedTouches[0].identifier),i(h,c)&&(o|=1,s=u.changedTouches[0].identifier)},this.handleEnd=function(e){e.preventDefault(),r===e.changedTouches[0].identifier&&(o&=7),d===e.changedTouches[0].identifier&&(o&=11),a===e.changedTouches[0].identifier&&(o&=13),s===e.changedTouches[0].identifier&&(o&=14)}}function CollisionManager(e,t){function n(e,t){return!(e.x>t.x+t.width||e.x+e.width<t.x||e.y+e.height<t.y||e.y>t.y+t.height)}function i(e,t,n,i,s){for(a=[],index=0;index<r.length;++index)a.push(r[index])
for(index=0;index<o.length;++index)e!=index&&a.push(o[index])}var o=t,r=e,a=[]
this.checkCollisionandUpdatePosition=function(){for(var e=0;e<o.length;e++){o[e].bounds.x=o[e].x,o[e].bounds.y=o[e].y,collisionRect={x:o[e].bounds.x,y:o[e].bounds.y,width:o[e].bounds.width,height:o[e].bounds.height}
var t,r,s=o[e].bounds.y,d=o[e].bounds.y+o[e].bounds.height
t=r=o[e].dx<0?Math.floor(o[e].bounds.x+o[e].dx):Math.floor(o[e].bounds.x+o[e].bounds.width+o[e].dx),i(e,t,s,r,d),collisionRect.x+=o[e].dx
var u=null
for(index=0;index<a.length;++index)if(u=a[index],null!==u&&n(collisionRect,u.bounds)===!0){o[e].dx=0
break}for(collisionRect.x=o[e].bounds.x,t=o[e].bounds.x,r=o[e].bounds.x+o[e].bounds.width,s=d=o[e].dy<0?Math.floor(o[e].bounds.y+o[e].dy):Math.floor(o[e].bounds.y+o[e].bounds.height+o[e].dy),i(e,t,s,r,d),collisionRect.y+=o[e].dy,index=0;index<a.length;++index)if(u=a[index],null!==u&&n(collisionRect,u.bounds)===!0){o[e].dy<0&&(o[e].grounded=!0),o[e].dy=0
break}collisionRect.y=o[e].bounds.y,o[e].x+=o[e].dx,o[e].y+=o[e].dy,o[e].y<0-o[e].height&&(o[e].killed=1)}}}function AssetManager(){function e(e,t,n,i){DebugMode&&console.log("PreLoad IMAGE : "+e),r[e]=new Image,r[e].name=e,r[e].frameWidth=n,r[e].frameHeight=i,r[e].onload=o.AssetLoaded,r[e].src=t}function t(e,t,n){DebugMode&&console.log("PreLoad IMAGE : "+e),r[e]=new CustomSprite(o.AssetLoaded,e,n),r[e].getSprite().onload=o.AssetLoaded,r[e].getSprite().src=t,r[e].request()}function n(e,t,n){DebugMode&&console.log("PreLoad SOUND : "+e),a[e]=new CustomSound(o.AssetLoaded,e,t,n),!0===soundEnabled&&a[e].request()}var i=0,o=this,r={}
this.imgs=r
var a={}
this.sounds=a
var s=0,d=0,u=0,h=0
this.PreLoad=function(o){i=o,DebugMode&&console.log("enter PreLoad"),s=2,numSprite=3,d=2,u=!0===soundEnabled?s+2*numSprite+d:s+2*numSprite,h=0,e("bgs","assets/imgs/bgs.png",800,3*RefGameHeight),e("ship","assets/imgs/ship.png",0,0),t("hero","assets/imgs/spritesheet.png","assets/imgs/spritesheet.json"),t("monster","assets/imgs/spritesheet2.png","assets/imgs/spritesheet.json"),t("lvl","assets/level/tiles.png","assets/level/level2.json"),n("laser","./assets/sounds/laser.wav",.5),n("background","./assets/sounds/background.mp3",.1),DebugMode&&console.log("PreLoad in progress...")},o.AssetLoaded=function(){h++,h===u&&(DebugMode&&console.log("AssetsLoaded"),i.start())}}function WorldRenderer(e){var t=e,n=new Level(t),o=new Camera(0,0,width,gameheight,n.getWidth(),n.getHeight())
o.follow(n.getHero(),width/2,gameheight/2)
var r=[]
r[0]=new Background(o,t.imgs.bgs,0,0,RefGameWidth,RefGameHeight,0),r[1]=new Background(o,t.imgs.bgs,0,RefGameHeight,RefGameWidth,RefGameHeight,.2),r[2]=new Background(o,t.imgs.bgs,0,2*RefGameHeight,RefGameWidth,RefGameHeight,.5),this.getCam=function(){return o},this.getLevel=function(){return n},this.update=function(e,t){for(n.update(e,t),o.update(),i=0;i<r.length;i++)r[i].update(o)
n.getHero().Isdead()>0&&game.gameOver()},this.render=function(){for(ctx.clearRect(0,0,width,gameheight),i=0;i<r.length;i++)r[i].render(ctx)
n.render(ctx,o),ctx.fillStyle="black",ctx.font="15px Arial",ctx.fillText("Press or touch",.1*width,.1*gameheight),1==n.getHero().isJumping()&&ctx.fillText("JUMP",.45*width,.25*gameheight),!0===n.getHero().isPerformingAction()&&ctx.fillText("ACTION",.45*width,.75*gameheight),!0===n.getHero().isLeft()&&ctx.fillText("LEFT",.1*width,.75*gameheight),!0===n.getHero().isRight()&&ctx.fillText("RIGHT",.8*width,.75*gameheight),!0===n.getHero().isPerformingAction()&&t.sounds.laser.play()}}function Game(){function e(e){e.style.display="none"}function t(e){e.style.display="block"}function n(){e(canvas),t(o)}game=this
var i,o=document.getElementById("menu-wrapper"),r=document.getElementById("game-over"),a=!1
canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),width=canvas.width,gameheight=canvas.height,RefGameHeight=600,RefGameWidth=800,offsetX=0,offsetY=0,soundEnabled=!1
try{window.AudioContext=window.AudioContext||window.webkitAudioContext,Soundcontext=new AudioContext,soundEnabled=!0}catch(s){soundEnabled=!1,alert("Web Audio API is not supported in this browser")}var d,u=60,h=1/u,c=new AssetManager,g=new InputManager
game.init=function(){DebugMode&&console.log("enter init"),game.resize(),c.PreLoad(game)},game.start=function(){DebugMode&&console.log("enter start"),d=new WorldRenderer(c),n(),DebugMode&&console.log("enter animate"),game.animate()},game.animate=function(){window.requestAnimFrame(game.animate),!0===a&&(i=g.GetInput(),d.update(i,h),d.render())},game.resize=function(){for(DebugMode&&console.log("enter resize"),offsetX=0,offsetY=0,element=canvas;element;)offsetX+=element.offsetLeft,offsetY+=element.offsetTop,element=element.offsetParent
ctx.canvas.width=ctx.canvas.offsetWidth,ctx.canvas.height=ctx.canvas.offsetHeight,width=ctx.canvas.width,gameheight=ctx.canvas.height,null!=d&&d.getCam().setViewport(width,gameheight,d.getLevel().getWidth(),d.getLevel().getHeight())},game.gameOver=function(){t(r),a=!1},document.querySelectorAll(".play")[0].addEventListener("click",function(){e(o),t(canvas),game.resize(),c.sounds.background.setloop(!0),c.sounds.background.play(),a=!0}),document.querySelectorAll(".restart")[0].addEventListener("click",function(){e(r),t(canvas),d.getLevel().respawn(),c.sounds.background.setloop(!0),c.sounds.background.play(),a=!0}),window.addEventListener("resize",game.resize,!1),window.addEventListener("orientationchange",game.resize,!1),document.addEventListener("keydown",g.handleKeyDown,!1),document.addEventListener("keyup",g.handleKeyUp,!1),canvas.addEventListener("touchstart",g.handleStart,!1),canvas.addEventListener("touchend",g.handleEnd,!1),canvas.addEventListener("touchleave",g.handleEnd,!1),game.init()}DebugMode=!1,window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}(),PlatformerGame=new Game
