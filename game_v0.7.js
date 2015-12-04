function Bullet(e){for(var t=!1,n=0,i=0,o=0,r=10,a=e,s=a.getSprite(),d=a.getJson(),u={},h=0;h<d.length;h++){var g=d[h]
u[g.name]=g}var c=new Animation
c.setFrame(u.bullet_left,0,.1)
var l=new Animation
l.setFrame(u.bullet_right,0,.1)
var f=null,m=c.getFrame().width,x=c.getFrame().height,p=!1
this.Isdead=function(){return!t},this.clear=function(){n=0,i=0,o=0,t=!1},this.spawn=function(e,a,s){n=e,i=a,0>s?(p=!0,o=s-r):(p=!1,o=s+r),t=!0,f=p?c:l},this.update=function(e){n+=o,f.update(e)},this.render=function(e,t){if(null!==f){var o=gameheight-(i+x)
return e.drawImage(s,f.getFrame().x,f.getFrame().y,m,x,n-t.getPos().x,o-t.getPos().y,m,x),n<t.getPos().x?!0:n>t.getWidth()?!0:void 0}}}function CustomSound(e,t,n,i){var o,r=e,a=null,n=n+"?nocache="+Math.random(),s=!1
try{o=new XMLHttpRequest}catch(d){try{o=new ActiveXObject("Msxml2.XMLHTTP")}catch(d){try{o=new ActiveXObject("Microsoft.XMLHTTP")}catch(d){alert("Your browser cannot support ajax!")}}}o.onload=function(){null!=o.response&&(Soundcontext.decodeAudioData(o.response,function(e){DebugMode&&console.log("buffer: "+e),a=e},null),r())}
var u=!0
this.setloop=function(e){s=e},this.request=function(){o.open("GET",n,!0),o.responseType="arraybuffer",o.setRequestHeader("Cache-Control","no-cache"),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.send(null)},this.play=function(){if(!0===u&&null!=a){var e=Soundcontext.createBufferSource()
e.loop=s,e.buffer=a,e.connect(Soundcontext.destination),u=!1,e.start(0),e.onended=function(){u=!0,console.log("Your audio has finished playing")}}}}function Camera(e,t,n,i,o,r){var a={NONE:"none",HORIZONTAL:"horizontal",VERTICAL:"vertical",BOTH:"both"},e=e||0,t=t||0,s=0,d=0,u=n,h=i,g=a.BOTH,c=null,l={x:e,y:t,width:u,height:h},f={x:0,y:0,width:o,height:r}
this.setViewport=function(e,t,n,i){u=e,l.width=u,h=t,l.height=h,s=e/2,d=t/2,f.width=n,f.height=i},this.follow=function(e,t,n){c=e,s=u/2,d=h/2},this.getX=function(){return e},this.getY=function(){return t},this.getWidth=function(){return u},this.getPos=function(){return{x:e,y:t}},this.getDebug=function(){return{xdead:s,w:f.width}},this.update=function(){null!=c&&((g==a.HORIZONTAL||g==a.BOTH)&&(e=c.getX()-(u-s)),(g==a.VERTICAL||g==a.BOTH)&&(t=-c.getY()-(h-d))),l.x=e,l.y=t,l.x+l.width>f.x+f.width&&(e=f.x+f.width-l.width),(l.x<=f.x||l.width>f.width)&&(e=f.x),l.y+l.height>f.y+f.height&&(t=f.height-h),(l.y<=f.y||l.height>f.height)&&(t=f.y)}}function CustomSprite(e,t,n){var i=e,o=new Image
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
var g=new Animation
g.setFrame(o["up-right"],0,.1)
var c=new Animation
c.setFrame(o["down-right"],0,.1)
var l=new Animation,f=new Animation
for(r=0;5>r;r++)l.setFrame(o["left-anim-0"+(r+2)],r,.1),f.setFrame(o["right-anim-0"+(r+2)],r,.1)
var m,x=null,p=s.getFrame().width,w=s.getFrame().height,y={IDLE:1,WALKING:2,JUMPING:3,DYING:4},v=y.IDLE,b=!1,A=0,M=0,I=0,L=10,E=10,P=.5,T=.1,R=!1,k=!1,F=!1,G=!1,A=0,C=!1
this.getX=function(){return m.x},this.setX=function(e){m.x=e},this.getY=function(){return m.y},this.setY=function(e){m.y=e},this.getWidth=function(){return p},this.getHeight=function(){return w},this.isJumping=function(){return y.JUMPING==v},this.isPerformingAction=function(){return F},this.isLeft=function(){return R},this.isRight=function(){return k},this.isFacingLeft=function(){return b},this.getState=function(){return v},this.getAccelerationX=function(){return M},this.getAccelerationY=function(){return I},this.getSpeedX=function(){return m.dx},this.getSpeedY=function(){return m.dy},this.setEntity=function(e){m=e},this.Isdead=function(){return m.killed},this.update=function(e,t){G=!G,G&&(A++,y.JUMPING!=v?(C=!0,A=0,v=y.JUMPING,m.dy=E,m.grounded=!1):C&&A>=L?C=!1:C&&(m.dy=E)),G||(C=!1),!0===m.grounded&&y.JUMPING===v&&(v=y.IDLE),I=m.gravity,M*=t,I*=t,m.dx+=M,m.dy+=I,0===M?(m.dx*=P,m.dx>0&&m.dx<T&&(m.dx=0),m.dx<0&&m.dx>-T&&(m.dx=0)):(m.dx>m.maxdx&&(m.dx=m.maxdx),m.dx<-m.maxdx&&(m.dx=-m.maxdx)),x=b?s:d,y.WALKING===v?x=b?l:f:y.JUMPING===v&&(x=m.dy>0?b?u:g:b?h:c),x.update(t)},this.render=function(e,t){if(null!==x){var i=gameheight-(m.y+m.height)
e.drawImage(n,x.getFrame().x,x.getFrame().y,p,w,m.x-t.getPos().x,i-t.getPos().y,p,w)}}}function Player(e){for(var t=e,n=t.getSprite(),i=t.getJson(),o={},r=0;r<i.length;r++){var a=i[r]
o[a.name]=a}var s=new Animation
s.setFrame(o["idle-left"],0,.1)
var d=new Animation
d.setFrame(o["idle-right"],0,.1)
var u=new Animation
u.setFrame(o["up-left"],0,.1)
var h=new Animation
h.setFrame(o["down-left"],0,.1)
var g=new Animation
g.setFrame(o["up-right"],0,.1)
var c=new Animation
c.setFrame(o["down-right"],0,.1)
var l=new Animation,f=new Animation
for(r=0;5>r;r++)l.setFrame(o["left-anim-0"+(r+2)],r,.1),f.setFrame(o["right-anim-0"+(r+2)],r,.1)
var m,x=null,p=s.getFrame().width,w=s.getFrame().height,y={IDLE:1,WALKING:2,JUMPING:3,DYING:4},v=y.IDLE,b=!1,A=0,M=!1,I=0,L=0,E=10,P=10,T=.5,R=.1,k=!1,F=!1,G=!1,C=!1,D=!0
this.getX=function(){return m.x},this.setX=function(e){m.x=e},this.getY=function(){return m.y},this.setY=function(e){m.y=e},this.getWidth=function(){return p},this.getHeight=function(){return w},this.isJumping=function(){return y.JUMPING==v},this.isPerformingAction=function(){return C},this.isLeft=function(){return k},this.isRight=function(){return F},this.isFacingLeft=function(){return b},this.getState=function(){return v},this.getAccelerationX=function(){return I},this.getAccelerationY=function(){return L},this.getSpeedX=function(){return m.dx},this.getSpeedY=function(){return m.dy},this.setEntity=function(e){m=e},this.Isdead=function(){return m.killed},this.getKillCpt=function(){return m.killCpt},this.update=function(e,t){k=!1,F=!1,G=!1,C=!1,8===(8&e)&&(G=!0,A++,y.JUMPING!=v?(M=!0,A=0,v=y.JUMPING,m.dy=P,m.grounded=!1):M&&A>=E?M=!1:M&&(m.dy=P)),0===(8&e)&&(M=!1),4===(4&e)&&(D?(C=!0,D=!1):C=!1),0===(4&e)&&(D=!0),2===(2&e)?(k=!0,b=!0,y.JUMPING!=v&&(v=y.WALKING),I>0&&(m.dx=0),I=-m.accel):1===(1&e)?(F=!0,b=!1,y.JUMPING!=v&&(v=y.WALKING),0>I&&(m.dx=0),I=m.accel):(y.JUMPING!=v&&(v=y.IDLE),I=0),!0===m.grounded&&y.JUMPING===v&&(v=y.IDLE),L=m.gravity,I*=t,L*=t,m.dx+=I,m.dy+=L,0===I?(m.dx*=T,m.dx>0&&m.dx<R&&(m.dx=0),m.dx<0&&m.dx>-R&&(m.dx=0)):(m.dx>m.maxdx&&(m.dx=m.maxdx),m.dx<-m.maxdx&&(m.dx=-m.maxdx)),x=b?s:d,y.WALKING===v?x=b?l:f:y.JUMPING===v&&(x=m.dy>0?b?u:g:b?h:c),x.update(t)},this.render=function(e,t){if(null!==x){var i=gameheight-(m.y+m.height)
e.drawImage(n,x.getFrame().x,x.getFrame().y,p,w,m.x-t.getPos().x,i-t.getPos().y,p,w)}}}function Level(e){function t(e){var t={}
return t.monster="monster"==e.type,t.player="player"==e.type,t.treasure="treasure"==e.type,t.width=t.treasure?u:i.getWidth(),t.height=t.treasure?u:i.getHeight(),t.sprite=null,!0===t.monster&&(t.sprite=new Monster(n.imgs.monster)),t.x=e.x/e.width*u,t.y=d.th*u-e.y/e.height*u,t.dx=0,t.dy=0,t.gravity=METER*(e.properties.gravity||GRAVITY),t.maxdx=METER*(e.properties.maxdx||MAXDX),t.maxdy=METER*(e.properties.maxdy||MAXDY),t.impulse=METER*(e.properties.impulse||IMPULSE),t.accel=t.maxdx/(e.properties.accel||ACCEL),t.friction=t.maxdx/(e.properties.friction||FRICTION),t.killable=!0,t.killCpt=0,t.grounded=!1,t.left=e.properties.left,t.right=e.properties.right,t.start={x:t.x,y:t.y},t.bounds={x:t.x,y:t.y,width:t.width,height:t.height},t.killed=t.collected=0,t}var n=e,i=new Player(n.imgs.hero),o=n.imgs.lvl,r=o.getSprite(),a=o.getJson(),s=0,d={tw:a.width,th:a.height},u=20
METER=u,GRAVITY=-9.8/3,MAXDX=.5,MAXDY=60,ACCEL=1/15,FRICTION=1/6,IMPULSE=1500
var h=function(e){return e*u},g=function(e){return Math.floor(e/u)},c=function(e,t){return x[e+t*d.tw]},l={},f=[],m=[],x=[],p=[],y=[]
this.getHero=function(){return i},this.getWidth=function(){return d.tw*u},this.getHeight=function(){return d.th*u},this.getMonsterCpt=function(){return s}
var v,b,A,M=a.layers[0].data,I=a.layers[1].objects
for(v=0;v<I.length;v++)switch(b=I[v],A=t(b),b.type){case"player":l=A,i.setEntity(A),p.push(A)
break
case"monster":s++,f.push(A),A.sprite.setEntity(A),p.push(A)
break
case"treasure":m.push(A),y.push(A)}x=M
for(var L=0,E=d.th-1,P=0;P<M.length;P++){if(0!=M[P]){var T={}
T.renderdata=M[P],T.bounds={x:h(L),y:h(E),width:u,height:u},T.start={x:h(L),y:h(E)},T.killable=!1,y.push(T)}L++,L>=d.tw&&(L=0,E--)}var R=new CollisionManager(y,p,u)
this.respawn=function(){for(var e=0;e<p.length;e++)p[e].x=p[e].start.x,p[e].y=p[e].start.y,p[e].dx=0,p[e].dy=0,p[e].killed=0,p[e].killCpt=0,p[e].grounded=!1
for(var e=0;e<y.length;e++)y[e].x=y[e].start.x,y[e].y=y[e].start.y,y[e].dx=0,y[e].dy=0,y[e].killed=0,y[e].killCpt=0,y[e].grounded=!1},this.update=function(e,t){for(i.update(e,t),w=0;w<f.length;w++)f[w].sprite.update(0,t)
R.checkCollisionandUpdatePosition()},this.render=function(e,t){var n,o,s
for(o=0;o<d.th;o++)for(n=0;n<d.tw;n++)s=c(n,o),s&&e.drawImage(r,a.tilewidth*(s-1),0,a.tilewidth,a.tileheight,n*u-t.getPos().x,gameheight+(o-d.th)*u-t.getPos().y,u,u)
for(i.render(e,t),w=0;w<f.length;w++)f[w].sprite.render(e,t)}}function Background(e,t,n,i,o,r,a){var s=t,d=n,u=i,h=o,g=r,c=a,l=0,f=0,m=parseFloat((width/h).toFixed(1))+2,x=1
this.getThis=function(){return this},this.update=function(e){m=parseFloat((width/h).toFixed(1))+2,l=(-e.getPos().x*c).toFixed(1)%h,f=gameheight-e.getPos().y},this.render=function(e){var t=l>0?-1:0,n=f>0?-1:0
for(row=0;row<x;row++)for(col=0;col<m;col++)e.drawImage(s,d,u,h,g,l+(col+t)*h,f+(n+row)*g,h,g)}}function BulletPool(e,t){var n=t,i=e,o=[]
for(x=0;x<i;x++)o[x]=new Bullet(n)
this.get=function(e,t,n){o[i-1].Isdead()&&(o[i-1].spawn(e,t,n),o.unshift(o.pop()))},this.update=function(e,t){for(var n=0;i>n&&!o[n].Isdead();n++)o[n].update(t)},this.render=function(e,t){for(var n=0;i>n&&!o[n].Isdead();n++)o[n].render(e,t)&&(o[n].clear(),o.push(o.splice(n,1)[0]))}}function InputManager(){function e(e,t){return e>0&&e<width&&t>0&&t<gameheight/2?!0:!1}function t(e,t){return e>.25*width&&e<.75*width&&t>gameheight/2&&t<gameheight?!0:!1}function n(e,t){return e>0&&e<.25*width&&t>gameheight/2&&t<gameheight?!0:!1}function i(e,t){return e>.75*width&&e<width&&t>gameheight/2&&t<gameheight?!0:!1}var o=0,r=-1,a=-1,s=-1,d=-1
this.GetInput=function(){return o},this.handleKeyDown=function(e){var t=e.keyCode?e.keyCode:e.charCode
38===t&&(e.preventDefault(),o|=8),32===t&&(e.preventDefault(),o|=4),37===t&&(e.preventDefault(),o|=2),39===t&&(e.preventDefault(),o|=1)},this.handleKeyUp=function(e){var t=e.keyCode?e.keyCode:e.charCode
38===t&&(e.preventDefault(),o&=7),32===t&&(e.preventDefault(),o&=11),37===t&&(e.preventDefault(),o&=13),39===t&&(e.preventDefault(),o&=14)},this.handleStart=function(u){u.preventDefault(),DebugMode&&console.log("input : "+width+"-"+u.changedTouches[0].clientX+"-"+u.changedTouches[0].clientY)
var h=u.changedTouches[0].clientX-offsetX,g=u.changedTouches[0].clientY-offsetY
DebugMode&&console.log("input : "+width+"-"+h+"-"+g),e(h,g)&&(o|=8,r=u.changedTouches[0].identifier),t(h,g)&&(o|=4,d=u.changedTouches[0].identifier),n(h,g)&&(o|=2,a=u.changedTouches[0].identifier),i(h,g)&&(o|=1,s=u.changedTouches[0].identifier)},this.handleEnd=function(e){e.preventDefault(),r===e.changedTouches[0].identifier&&(o&=7),d===e.changedTouches[0].identifier&&(o&=11),a===e.changedTouches[0].identifier&&(o&=13),s===e.changedTouches[0].identifier&&(o&=14)}}function CollisionManager(e,t,n){function i(e,t){return!(e.x>t.x+t.width||e.x+e.width<t.x||e.y+e.height<t.y||e.y>t.y+t.height)}function o(e,t,n,i,o){if(s=[],1!==r[e].killed){for(index=0;index<a.length;++index)1!==a[index].killed&&a[index].start.x<t+d&&a[index].start.x>t-d&&s.push(a[index])
for(index=0;index<r.length;++index)1!==r[index].killed&&e!=index&&r[index].x<t+d&&r[index].x>t-d&&s.push(r[index])}}var r=t,a=e,s=[],d=2*n
this.checkCollisionandUpdatePosition=function(){for(var e=0;e<r.length;e++){r[e].bounds.x=r[e].x,r[e].bounds.y=r[e].y,collisionRect={x:r[e].bounds.x,y:r[e].bounds.y,width:r[e].bounds.width,height:r[e].bounds.height}
var t,n,a=r[e].bounds.y,d=r[e].bounds.y+r[e].bounds.height
t=n=r[e].dx<0?Math.floor(r[e].bounds.x+r[e].dx):Math.floor(r[e].bounds.x+r[e].bounds.width+r[e].dx),o(e,t,a,n,d),collisionRect.x+=r[e].dx
var u=null
for(index=0;index<s.length;++index)if(u=s[index],null!==u&&i(collisionRect,u.bounds)===!0){r[e].dx=0
break}for(collisionRect.x=r[e].bounds.x,t=r[e].bounds.x,n=r[e].bounds.x+r[e].bounds.width,a=d=r[e].dy<0?Math.floor(r[e].bounds.y+r[e].dy):Math.floor(r[e].bounds.y+r[e].bounds.height+r[e].dy),o(e,t,a,n,d),collisionRect.y+=r[e].dy,index=0;index<s.length;++index)if(u=s[index],null!==u&&i(collisionRect,u.bounds)===!0){r[e].y>u.bounds.y&&(r[e].grounded=!0,r[e].dy=0,u.killable&&(r[e].killCpt+=1,u.killed=1,r[e].dy=10))
break}collisionRect.y=r[e].bounds.y,r[e].x+=r[e].dx,r[e].y+=r[e].dy,r[e].y<0-r[e].height&&(r[e].killed=1)}}}function AssetManager(){function e(e,t,n,i){DebugMode&&console.log("PreLoad IMAGE : "+e),r[e]=new Image,r[e].name=e,r[e].frameWidth=n,r[e].frameHeight=i,r[e].onload=o.AssetLoaded,r[e].src=t}function t(e,t,n){DebugMode&&console.log("PreLoad IMAGE : "+e),r[e]=new CustomSprite(o.AssetLoaded,e,n),r[e].getSprite().onload=o.AssetLoaded,r[e].getSprite().src=t,r[e].request()}function n(e,t,n){DebugMode&&console.log("PreLoad SOUND : "+e),a[e]=new CustomSound(o.AssetLoaded,e,t,n),!0===soundEnabled&&a[e].request()}var i=0,o=this,r={}
this.imgs=r
var a={}
this.sounds=a
var s=0,d=0,u=0,h=0
this.PreLoad=function(o){i=o,DebugMode&&console.log("enter PreLoad"),s=1,numSprite=5,d=2,u=!0===soundEnabled?s+2*numSprite+d:s+2*numSprite,h=0,e("bgs","assets/imgs/bgs.png",800,3*RefGameHeight),e("bullet","assets/imgs/bullet.png",0,0),t("hero","assets/imgs/spritesheet.png","assets/imgs/spritesheet.json"),t("monster","assets/imgs/spritesheet2.png","assets/imgs/spritesheet.json"),t("explosion","assets/imgs/explosion.png","assets/imgs/explosion.json"),t("bullet","assets/imgs/bullet.png","assets/imgs/bullet.json"),t("lvl","assets/level/tiles.png","assets/level/level2.json"),n("laser","./assets/sounds/laser.wav",.5),n("background","./assets/sounds/background.mp3",.1),DebugMode&&console.log("PreLoad in progress...")},o.AssetLoaded=function(){h++,h===u&&(DebugMode&&console.log("AssetsLoaded"),i.start())}}function WorldRenderer(e){var t=e,n=new Level(t),o=new Camera(0,0,width,gameheight,n.getWidth(),n.getHeight())
o.follow(n.getHero(),width/2,gameheight/2)
var r=[]
r[0]=new Background(o,t.imgs.bgs,0,0,RefGameWidth,RefGameHeight,0),r[1]=new Background(o,t.imgs.bgs,0,RefGameHeight,RefGameWidth,RefGameHeight,.2),r[2]=new Background(o,t.imgs.bgs,0,2*RefGameHeight,RefGameWidth,RefGameHeight,.5),this.getCam=function(){return o},this.getLevel=function(){return n},this.update=function(e,t){for(n.update(e,t),o.update(),i=0;i<r.length;i++)r[i].update(o)
n.getHero().Isdead()>0&&game.gameOver(),n.getHero().getKillCpt()>=n.getMonsterCpt()&&game.win()},this.render=function(e){for(ctx.clearRect(0,0,width,gameheight),i=0;i<r.length;i++)r[i].render(ctx)
n.render(ctx,o),ctx.fillStyle="black",ctx.font="15px Arial",ctx.fillText("Press or touch",.1*width,.1*gameheight),1==n.getHero().isJumping()&&ctx.fillText("JUMP",.45*width,.25*gameheight),!0===n.getHero().isPerformingAction()&&ctx.fillText("ACTION",.45*width,.75*gameheight),!0===n.getHero().isLeft()&&ctx.fillText("LEFT",.1*width,.75*gameheight),!0===n.getHero().isRight()&&ctx.fillText("RIGHT",.8*width,.75*gameheight),!0===n.getHero().isPerformingAction()&&t.sounds.laser.play()}}function Game(){function e(e){e.style.display="none"}function t(e){e.style.display="block"}function n(){e(canvas),t(o)}game=this
var i,o=document.getElementById("menu-wrapper"),r=document.getElementById("game-over"),a=document.getElementById("game-win"),s=!1
canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),width=canvas.width,gameheight=canvas.height,RefGameHeight=600,RefGameWidth=800,offsetX=0,offsetY=0,lastLoop=new Date,soundEnabled=!1
try{window.AudioContext=window.AudioContext||window.webkitAudioContext,Soundcontext=new AudioContext,soundEnabled=!0}catch(d){soundEnabled=!1,alert("Web Audio API is not supported in this browser")}var u,h=60,g=1/h,c=new AssetManager,l=new InputManager
game.init=function(){DebugMode&&console.log("enter init"),game.resize(),c.PreLoad(game)},game.start=function(){DebugMode&&console.log("enter start"),u=new WorldRenderer(c),n(),DebugMode&&console.log("enter animate"),game.animate()},game.animate=function(){if(window.requestAnimFrame(game.animate),!0===s){var e=new Date
i=l.GetInput(),u.update(i,g),u.render(e-lastLoop),lastLoop=e}},game.resize=function(){for(DebugMode&&console.log("enter resize"),offsetX=0,offsetY=0,element=canvas;element;)offsetX+=element.offsetLeft,offsetY+=element.offsetTop,element=element.offsetParent
ctx.canvas.width=ctx.canvas.offsetWidth,ctx.canvas.height=ctx.canvas.offsetHeight,width=ctx.canvas.width,gameheight=ctx.canvas.height,null!=u&&u.getCam().setViewport(width,gameheight,u.getLevel().getWidth(),u.getLevel().getHeight())},game.gameOver=function(){t(r),s=!1},game.win=function(){t(a)},document.querySelectorAll(".play")[0].addEventListener("click",function(){e(o),t(canvas),game.resize(),c.sounds.background.setloop(!0),c.sounds.background.play(),s=!0}),document.querySelectorAll(".GOrestart")[0].addEventListener("click",function(){e(r),t(canvas),u.getLevel().respawn(),c.sounds.background.setloop(!0),c.sounds.background.play(),s=!0}),document.querySelectorAll(".WINrestart")[0].addEventListener("click",function(){e(a),t(canvas),u.getLevel().respawn(),c.sounds.background.setloop(!0),c.sounds.background.play(),s=!0}),window.addEventListener("resize",game.resize,!1),window.addEventListener("orientationchange",game.resize,!1),document.addEventListener("keydown",l.handleKeyDown,!1),document.addEventListener("keyup",l.handleKeyUp,!1),canvas.addEventListener("touchstart",l.handleStart,!1),canvas.addEventListener("touchend",l.handleEnd,!1),canvas.addEventListener("touchleave",l.handleEnd,!1),game.init()}DebugMode=!1,window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}(),PlatformerGame=new Game
