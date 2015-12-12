function Bullet(e){for(var t=!1,n=0,i=0,o=0,r=10,s=e,a=s.getSprite(),d=s.getJson(),u={},h=0;h<d.length;h++){var l=d[h]
u[l.name]=l}var g=new Animation
g.setFrame(u.bullet_left,0,.1)
var c=new Animation
c.setFrame(u.bullet_right,0,.1)
var f=null,m=g.getFrame().width,x=g.getFrame().height,w=!1
this.Isdead=function(){return!t},this.getWidth=function(){return m},this.getHeight=function(){return x},this.clear=function(){n=0,i=0,o=0,t=!1},this.spawn=function(e,s,a){n=e,i=s,0>a?(w=!0,o=a-r):(w=!1,o=a+r),t=!0,f=w?g:c},this.update=function(e){n+=o,f.update(e)},this.render=function(e,o){if(null!==f){var r=gameheight-(i+x)
e.drawImage(a,f.getFrame().x,f.getFrame().y,m,x,n-o.getPos().x,r-o.getPos().y,m,x),n<o.getPos().x&&(t=!1),n>o.getPos().x+o.getWidth()&&(t=!1)}}}function CustomSound(e,t,n,i){var o,r=e,s=null,n=n+"?nocache="+Math.random(),a=!1
try{o=new XMLHttpRequest}catch(d){try{o=new ActiveXObject("Msxml2.XMLHTTP")}catch(d){try{o=new ActiveXObject("Microsoft.XMLHTTP")}catch(d){alert("Your browser cannot support ajax!")}}}o.onload=function(){null!=o.response&&(Soundcontext.decodeAudioData(o.response,function(e){DebugMode&&console.log("buffer: "+e),s=e},null),r())}
var u=!0
this.setloop=function(e){a=e},this.request=function(){o.open("GET",n,!0),o.responseType="arraybuffer",o.setRequestHeader("Cache-Control","no-cache"),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.send(null)},this.play=function(){if(!0===u&&null!=s){var e=Soundcontext.createBufferSource()
e.loop=a,e.buffer=s,e.connect(Soundcontext.destination),u=!1,e.start(0),e.onended=function(){u=!0,console.log("Your audio has finished playing")}}}}function Camera(e,t,n,i,o,r){var s={NONE:"none",HORIZONTAL:"horizontal",VERTICAL:"vertical",BOTH:"both"},e=e||0,t=t||0,a=0,d=0,u=n,h=i,l=s.BOTH,g=null,c={x:e,y:t,width:u,height:h},f={x:0,y:0,width:o,height:r}
this.setViewport=function(e,t,n,i){u=e,c.width=u,h=t,c.height=h,a=e/2,d=t/2,f.width=n,f.height=i},this.follow=function(e,t,n){g=e,a=u/2,d=h/2},this.getX=function(){return e},this.getY=function(){return t},this.getWidth=function(){return u},this.getPos=function(){return{x:e,y:t}},this.getDebug=function(){return{xdead:a,w:f.width}},this.update=function(){null!=g&&((l==s.HORIZONTAL||l==s.BOTH)&&(e=g.getX()-(u-a)),(l==s.VERTICAL||l==s.BOTH)&&(t=-g.getY()-(h-d))),c.x=e,c.y=t,c.x+c.width>f.x+f.width&&(e=f.x+f.width-c.width),(c.x<=f.x||c.width>f.width)&&(e=f.x),c.y+c.height>f.y+f.height&&(t=f.height-h),(c.y<=f.y||c.height>f.height)&&(t=f.y)}}function CustomSprite(e,t,n){var i=e,o=new Image
this.getSprite=function(){return o}
var n=n+"?nocache="+Math.random(),r=null
this.getJson=function(){return r}
var s=null
try{s=new XMLHttpRequest}catch(a){try{s=new ActiveXObject("Msxml2.XMLHTTP")}catch(a){try{s=new ActiveXObject("Microsoft.XMLHTTP")}catch(a){alert("Your browser cannot support ajax!")}}}s.onreadystatechange=function(){4==s.readyState&&null!=s.responseText&&(r=JSON.parse(s.responseText),null!=r?i():alert("your browser cannot support Json.parser"))},this.request=function(){s.open("GET",n,!0),s.setRequestHeader("Cache-Control","no-cache"),s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.send(null)}}function Animation(){var e={},t=0,n=0,i=0,o=0
this.setFrame=function(n,i,r){e[i]=n,o=r,t++},this.getFrame=function(){return e[i]},this.update=function(e){if(!(0>=o))for(n+=e;n>=o;)n-=o,i++,i>=t&&(i=0)}}function Monster(e){for(var t=e,n=t.getSprite(),i=t.getJson(),o={},r=0;r<i.length;r++){var s=i[r]
o[s.name]=s}var a=new Animation
a.setFrame(o["idle-left"],0,.1)
var d=new Animation
d.setFrame(o["idle-right"],0,.1)
var u=new Animation
u.setFrame(o["up-left"],0,.1)
var h=new Animation
h.setFrame(o["down-left"],0,.1)
var l=new Animation
l.setFrame(o["up-right"],0,.1)
var g=new Animation
g.setFrame(o["down-right"],0,.1)
var c=new Animation,f=new Animation
for(r=0;5>r;r++)c.setFrame(o["left-anim-0"+(r+2)],r,.1),f.setFrame(o["right-anim-0"+(r+2)],r,.1)
var m,x=null,w=a.getFrame().width,p=a.getFrame().height,y={IDLE:1,WALKING:2,JUMPING:3,DYING:4},v=y.IDLE,b=!1,A=0,M=0,I=0,L=10,R=10,E=.5,P=.1,k=!1,T=!1,F=!1,G=!1,A=0,C=!1
this.getX=function(){return m.x},this.setX=function(e){m.x=e},this.getY=function(){return m.y},this.setY=function(e){m.y=e},this.getWidth=function(){return w},this.getHeight=function(){return p},this.isJumping=function(){return y.JUMPING==v},this.isPerformingAction=function(){return F},this.isLeft=function(){return k},this.isRight=function(){return T},this.isFacingLeft=function(){return b},this.getState=function(){return v},this.getAccelerationX=function(){return M},this.getAccelerationY=function(){return I},this.getSpeedX=function(){return m.dx},this.getSpeedY=function(){return m.dy},this.setEntity=function(e){m=e},this.Isdead=function(){return m.killed},this.update=function(e,t){G=!G,G&&(A++,y.JUMPING!=v?(C=!0,A=0,v=y.JUMPING,m.dy=R,m.grounded=!1):C&&A>=L?C=!1:C&&(m.dy=R)),G||(C=!1),!0===m.grounded&&y.JUMPING===v&&(v=y.IDLE),I=m.gravity,M*=t,I*=t,m.dx+=M,m.dy+=I,0===M?(m.dx*=E,m.dx>0&&m.dx<P&&(m.dx=0),m.dx<0&&m.dx>-P&&(m.dx=0)):(m.dx>m.maxdx&&(m.dx=m.maxdx),m.dx<-m.maxdx&&(m.dx=-m.maxdx)),x=b?a:d,y.WALKING===v?x=b?c:f:y.JUMPING===v&&(x=m.dy>0?b?u:l:b?h:g),x.update(t)},this.render=function(e,t){if(null!==x){var i=gameheight-(m.y+m.height)
e.drawImage(n,x.getFrame().x,x.getFrame().y,w,p,m.x-t.getPos().x,i-t.getPos().y,w,p)}}}function Player(e){for(var t=e,n=t.getSprite(),i=t.getJson(),o={},r=0;r<i.length;r++){var s=i[r]
o[s.name]=s}var a=new Animation
a.setFrame(o["idle-left"],0,.1)
var d=new Animation
d.setFrame(o["idle-right"],0,.1)
var u=new Animation
u.setFrame(o["up-left"],0,.1)
var h=new Animation
h.setFrame(o["down-left"],0,.1)
var l=new Animation
l.setFrame(o["up-right"],0,.1)
var g=new Animation
g.setFrame(o["down-right"],0,.1)
var c=new Animation,f=new Animation
for(r=0;5>r;r++)c.setFrame(o["left-anim-0"+(r+2)],r,.1),f.setFrame(o["right-anim-0"+(r+2)],r,.1)
var m,x=null,w=a.getFrame().width,p=a.getFrame().height,y={IDLE:1,WALKING:2,JUMPING:3,DYING:4},v=y.IDLE,b=!1,A=0,M=!1,I=0,L=0,R=10,E=10,P=.5,k=.1,T=!1,F=!1,G=!1,C=!1,H=!0
this.getX=function(){return m.x},this.setX=function(e){m.x=e},this.getY=function(){return m.y},this.setY=function(e){m.y=e},this.getWidth=function(){return w},this.getHeight=function(){return p},this.isJumping=function(){return y.JUMPING==v},this.isPerformingAction=function(){return C},this.isLeft=function(){return T},this.isRight=function(){return F},this.isFacingLeft=function(){return b},this.getState=function(){return v},this.getAccelerationX=function(){return I},this.getAccelerationY=function(){return L},this.getSpeedX=function(){return m.dx},this.getSpeedY=function(){return m.dy},this.setEntity=function(e){m=e},this.Isdead=function(){return m.killed},this.getKillCpt=function(){return m.killCpt},this.update=function(e,t){T=!1,F=!1,G=!1,C=!1,8===(8&e)&&(G=!0,A++,y.JUMPING!=v&&m.grounded?(M=!0,A=0,v=y.JUMPING,m.dy=E,m.grounded=!1):M&&A>=R?M=!1:M&&(m.dy=E)),0===(8&e)&&(M=!1),4===(4&e)&&(H?(C=!0,H=!1):C=!1),0===(4&e)&&(H=!0),2===(2&e)?(T=!0,b=!0,y.JUMPING!=v&&(v=y.WALKING),I>0&&(m.dx=0),I=-m.accel):1===(1&e)?(F=!0,b=!1,y.JUMPING!=v&&(v=y.WALKING),0>I&&(m.dx=0),I=m.accel):(y.JUMPING!=v&&(v=y.IDLE),I=0),!0===m.grounded&&y.JUMPING===v&&(v=y.IDLE),L=m.gravity,I*=t,L*=t,m.dx+=I,m.dy+=L,0===I?(m.dx*=P,m.dx>0&&m.dx<k&&(m.dx=0),m.dx<0&&m.dx>-k&&(m.dx=0)):(m.dx>m.maxdx&&(m.dx=m.maxdx),m.dx<-m.maxdx&&(m.dx=-m.maxdx)),x=b?a:d,y.WALKING===v?x=b?c:f:y.JUMPING===v&&(x=m.dy>0?b?u:l:b?h:g),x.update(t)},this.render=function(e,t){if(null!==x){var i=gameheight-(m.y+m.height)
e.drawImage(n,x.getFrame().x,x.getFrame().y,w,p,m.x-t.getPos().x,i-t.getPos().y,w,p)}}}function Level(e){function t(e){var t={}
return t.monster="monster"==e.type,t.player="player"==e.type,t.treasure="treasure"==e.type,t.width=t.treasure?u:i.getWidth(),t.height=t.treasure?u:i.getHeight(),t.sprite=null,!0===t.monster&&(t.sprite=new Monster(n.imgs.monster)),t.x=e.x/e.width*u,t.y=d.th*u-e.y/e.height*u,t.dx=0,t.dy=0,t.gravity=METER*(e.properties.gravity||GRAVITY),t.maxdx=METER*(e.properties.maxdx||MAXDX),t.maxdy=METER*(e.properties.maxdy||MAXDY),t.impulse=METER*(e.properties.impulse||IMPULSE),t.accel=t.maxdx/(e.properties.accel||ACCEL),t.friction=t.maxdx/(e.properties.friction||FRICTION),t.killable=!0,t.killCpt=0,t.grounded=!1,t.left=e.properties.left,t.right=e.properties.right,t.start={x:t.x,y:t.y},t.bounds={x:t.x,y:t.y,width:t.width,height:t.height},t.killed=t.collected=0,t}var n=e,i=new Player(n.imgs.hero),o=n.imgs.lvl,r=o.getSprite(),s=o.getJson(),a=0,d={tw:s.width,th:s.height},u=20
METER=u,GRAVITY=-9.8/3,MAXDX=.5,MAXDY=60,ACCEL=1/15,FRICTION=1/6,IMPULSE=1500
var h=function(e){return e*u},l=function(e){return Math.floor(e/u)},g=function(e,t){return y[e+t*d.tw]},c=5,f={},m=[],x=[],p=[],y=[],v=[],b=[]
this.getHero=function(){return i},this.getWidth=function(){return d.tw*u},this.getHeight=function(){return d.th*u},this.getMonsterCpt=function(){return a}
var A,M,I,L=s.layers[0].data,R=s.layers[2].objects
for(A=0;A<R.length;A++)switch(M=R[A],I=t(M),M.type){case"player":f=I,i.setEntity(I),v.push(I)
break
case"monster":a++,m.push(I),I.sprite.setEntity(I),v.push(I)
break
case"treasure":p.push(I),b.push(I)}y=L
for(var E=0,P=d.th-1,k=0;k<L.length;k++){if(0!=L[k]){var T={}
T.renderdata=L[k],T.bounds={x:h(E),y:h(P),width:u,height:u},T.start={x:h(E),y:h(P)},T.killable=!1,b.push(T)}E++,E>=d.tw&&(E=0,P--)}for(var k=0;c>k;k++){var T={}
T.bullet=!0,T.sprite=new Bullet(n.imgs.bullet),T.width=T.sprite.getWidth(),T.height=T.sprite.getHeight(),T.x=0,T.y=0,T.dx=0,T.dy=0,T.killable=!0,T.killCpt=0,T.killed=T.collected=1,T.grounded=!1,T.start={x:T.x,y:T.y},T.bounds={x:T.x,y:T.y,width:T.width,height:T.height},x.push(T),v.push(T)}var F=new CollisionManager(b,v,u)
this.respawn=function(){for(var e=0;e<v.length;e++)v[e].x=v[e].start.x,v[e].y=v[e].start.y,v[e].dx=0,v[e].dy=0,v[e].killed=v[e].bullet?1:0,v[e].killCpt=0,v[e].grounded=!1
for(var e=0;e<b.length;e++)b[e].x=b[e].start.x,b[e].y=b[e].start.y,b[e].dx=0,b[e].dy=0,b[e].killed=0,b[e].killCpt=0,b[e].grounded=!1},this.update=function(e,t){for(i.update(e,t),w=0;w<m.length;w++)m[w].sprite.update(0,t)
for(w=0;w<x.length;w++)x[w].sprite.Isdead()||x[w].sprite.update(t)
if(i.isPerformingAction())for(w=0;w<x.length;w++)if(x[w].sprite.Isdead()){x[w].sprite.spawn(i.getX(),i.getY()+i.getHeight()/2,i.getSpeedX())
break}F.checkCollisionandUpdatePosition()},this.render=function(e,t){var n,o,a
for(o=0;o<d.th;o++)for(n=0;n<d.tw;n++)a=g(n,o),a&&e.drawImage(r,s.tilewidth*(a-1),0,s.tilewidth,s.tileheight,n*u-t.getPos().x,gameheight+(o-d.th)*u-t.getPos().y,u,u)
for(i.render(e,t),w=0;w<m.length;w++)m[w].sprite.render(e,t)
for(w=0;w<x.length;w++)x[w].sprite.Isdead()||x[w].sprite.render(e,t)}}function Background(e,t,n,i,o,r,s){var a=t,d=n,u=i,h=o,l=r,g=s,c=0,f=0,m=parseFloat((width/h).toFixed(1))+2,x=1
this.getThis=function(){return this},this.update=function(e){m=parseFloat((width/h).toFixed(1))+2,c=(-e.getPos().x*g).toFixed(1)%h,f=gameheight-e.getPos().y},this.render=function(e){var t=c>0?-1:0,n=f>0?-1:0
for(row=0;row<x;row++)for(col=0;col<m;col++)e.drawImage(a,d,u,h,l,c+(col+t)*h,f+(n+row)*l,h,l)}}function InputManager(){function e(e,t){return e>0&&e<width&&t>0&&t<gameheight/2?!0:!1}function t(e,t){return e>.25*width&&e<.75*width&&t>gameheight/2&&t<gameheight?!0:!1}function n(e,t){return e>0&&e<.25*width&&t>gameheight/2&&t<gameheight?!0:!1}function i(e,t){return e>.75*width&&e<width&&t>gameheight/2&&t<gameheight?!0:!1}var o=0,r=-1,s=-1,a=-1,d=-1
this.GetInput=function(){return o},this.handleKeyDown=function(e){var t=e.keyCode?e.keyCode:e.charCode
38===t&&(e.preventDefault(),o|=8),32===t&&(e.preventDefault(),o|=4),37===t&&(e.preventDefault(),o|=2),39===t&&(e.preventDefault(),o|=1)},this.handleKeyUp=function(e){var t=e.keyCode?e.keyCode:e.charCode
38===t&&(e.preventDefault(),o&=7),32===t&&(e.preventDefault(),o&=11),37===t&&(e.preventDefault(),o&=13),39===t&&(e.preventDefault(),o&=14)},this.handleStart=function(u){u.preventDefault(),DebugMode&&console.log("input : "+width+"-"+u.changedTouches[0].clientX+"-"+u.changedTouches[0].clientY)
var h=u.changedTouches[0].clientX-offsetX,l=u.changedTouches[0].clientY-offsetY
DebugMode&&console.log("input : "+width+"-"+h+"-"+l),e(h,l)&&(o|=8,r=u.changedTouches[0].identifier),t(h,l)&&(o|=4,d=u.changedTouches[0].identifier),n(h,l)&&(o|=2,s=u.changedTouches[0].identifier),i(h,l)&&(o|=1,a=u.changedTouches[0].identifier)},this.handleEnd=function(e){e.preventDefault(),r===e.changedTouches[0].identifier&&(o&=7),d===e.changedTouches[0].identifier&&(o&=11),s===e.changedTouches[0].identifier&&(o&=13),a===e.changedTouches[0].identifier&&(o&=14)}}function CollisionManager(e,t,n){function i(e,t){return!(e.x>t.x+t.width||e.x+e.width<t.x||e.y+e.height<t.y||e.y>t.y+t.height)}function o(e,t,n,i,o){if(a=[],1!==r[e].killed){for(index=0;index<s.length;++index)1!==s[index].killed&&s[index].start.x<t+d&&s[index].start.x>t-d&&a.push(s[index])
for(index=0;index<r.length;++index)1!==r[index].killed&&e!=index&&r[index].x<t+d&&r[index].x>t-d&&a.push(r[index])}}var r=t,s=e,a=[],d=2*n
this.checkCollisionandUpdatePosition=function(){for(var e=0;e<r.length;e++){r[e].bounds.x=r[e].x,r[e].bounds.y=r[e].y,collisionRect={x:r[e].bounds.x,y:r[e].bounds.y,width:r[e].bounds.width,height:r[e].bounds.height},r[e].dx<0?startX=endX=Math.floor(r[e].bounds.x+r[e].dx):startX=endX=Math.floor(r[e].bounds.x+r[e].bounds.width+r[e].dx),r[e].dy<0?startY=endY=Math.floor(r[e].bounds.y+r[e].dy):startY=endY=Math.floor(r[e].bounds.y+r[e].bounds.height+r[e].dy),o(e,startX,startY,endX,endY),collisionRect.x+=r[e].dx
var t=null
for(index=0;index<a.length;++index)if(t=a[index],null!==t&&i(collisionRect,t.bounds)===!0){r[e].dx=0
break}for(collisionRect.x=r[e].bounds.x,collisionRect.y+=r[e].dy,r[e].grounded=!1,index=0;index<a.length;++index)if(t=a[index],null!==t&&i(collisionRect,t.bounds)===!0){r[e].y>t.bounds.y&&(r[e].grounded=!0,r[e].dy=0,t.killable&&(r[e].killCpt+=1,t.killed=1,r[e].dy=10))
break}if(collisionRect.y=r[e].bounds.y,0!=r[e].dx&&0!=r[e].dy){collisionRect.x+=r[e].dx,collisionRect.y+=r[e].dy
var t=null
for(index=0;index<a.length;++index)if(t=a[index],null!==t&&i(collisionRect,t.bounds)===!0){r[e].dy=0
break}collisionRect.x=r[e].bounds.x,collisionRect.y=r[e].bounds.y}r[e].x+=r[e].dx,r[e].y+=r[e].dy,r[e].y<0-r[e].height&&(r[e].killed=1)}}}function AssetManager(){function e(e,t,n,i){DebugMode&&console.log("PreLoad IMAGE : "+e),r[e]=new Image,r[e].name=e,r[e].frameWidth=n,r[e].frameHeight=i,r[e].onload=o.AssetLoaded,r[e].src=t}function t(e,t,n){DebugMode&&console.log("PreLoad IMAGE : "+e),r[e]=new CustomSprite(o.AssetLoaded,e,n),r[e].getSprite().onload=o.AssetLoaded,r[e].getSprite().src=t,r[e].request()}function n(e,t,n){DebugMode&&console.log("PreLoad SOUND : "+e),s[e]=new CustomSound(o.AssetLoaded,e,t,n),!0===soundEnabled&&s[e].request()}var i=0,o=this,r={}
this.imgs=r
var s={}
this.sounds=s
var a=0,d=0,u=0,h=0
this.PreLoad=function(o){i=o,DebugMode&&console.log("enter PreLoad"),a=1,numSprite=5,d=2,u=!0===soundEnabled?a+2*numSprite+d:a+2*numSprite,h=0,e("bgs","assets/imgs/bgs.png",800,3*RefGameHeight),t("hero","assets/imgs/spritesheet.png","assets/imgs/spritesheet.json"),t("monster","assets/imgs/spritesheet2.png","assets/imgs/spritesheet.json"),t("explosion","assets/imgs/explosion.png","assets/imgs/explosion.json"),t("bullet","assets/imgs/bullet.png","assets/imgs/bullet.json"),t("lvl","assets/level/tiles.png","assets/level/level3.json"),n("laser","./assets/sounds/laser.wav",.5),n("background","./assets/sounds/background.mp3",.1),DebugMode&&console.log("PreLoad in progress...")},o.AssetLoaded=function(){h++,h===u&&(DebugMode&&console.log("AssetsLoaded"),i.start())}}function WorldRenderer(e){var t=e,n=new Level(t),o=new Camera(0,0,width,gameheight,n.getWidth(),n.getHeight())
o.follow(n.getHero(),width/2,gameheight/2)
var r=[]
r[0]=new Background(o,t.imgs.bgs,0,0,RefGameWidth,RefGameHeight,0),r[1]=new Background(o,t.imgs.bgs,0,RefGameHeight,RefGameWidth,RefGameHeight,.2),r[2]=new Background(o,t.imgs.bgs,0,2*RefGameHeight,RefGameWidth,RefGameHeight,.5),this.getCam=function(){return o},this.getLevel=function(){return n},this.update=function(e,t){for(n.update(e,t),o.update(),i=0;i<r.length;i++)r[i].update(o)
n.getHero().Isdead()>0&&game.gameOver(),n.getHero().getKillCpt()>=n.getMonsterCpt()&&game.win()},this.render=function(e){for(ctx.clearRect(0,0,width,gameheight),i=0;i<r.length;i++)r[i].render(ctx)
n.render(ctx,o),ctx.fillStyle="black",ctx.font="15px Arial",ctx.fillText("Press or touch",.1*width,.1*gameheight),1==n.getHero().isJumping()&&ctx.fillText("JUMP",.45*width,.25*gameheight),!0===n.getHero().isPerformingAction()&&ctx.fillText("ACTION",.45*width,.75*gameheight),!0===n.getHero().isLeft()&&ctx.fillText("LEFT",.1*width,.75*gameheight),!0===n.getHero().isRight()&&ctx.fillText("RIGHT",.8*width,.75*gameheight),!0===n.getHero().isPerformingAction()&&t.sounds.laser.play()}}function Game(){function e(e){e.style.display="none"}function t(e){e.style.display="block"}function n(){e(canvas),t(o)}game=this
var i,o=document.getElementById("menu-wrapper"),r=document.getElementById("game-over"),s=document.getElementById("game-win"),a=!1
canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),width=canvas.width,gameheight=canvas.height,RefGameHeight=600,RefGameWidth=800,offsetX=0,offsetY=0,lastLoop=new Date,soundEnabled=!1
try{window.AudioContext=window.AudioContext||window.webkitAudioContext,Soundcontext=new AudioContext,soundEnabled=!0}catch(d){soundEnabled=!1,alert("Web Audio API is not supported in this browser")}var u,h=60,l=1/h,g=new AssetManager,c=new InputManager
game.init=function(){DebugMode&&console.log("enter init"),game.resize(),g.PreLoad(game)},game.start=function(){DebugMode&&console.log("enter start"),u=new WorldRenderer(g),n(),DebugMode&&console.log("enter animate"),game.animate()},game.animate=function(){if(window.requestAnimFrame(game.animate),!0===a){var e=new Date
i=c.GetInput(),u.update(i,l),u.render(e-lastLoop),lastLoop=e}},game.resize=function(){for(DebugMode&&console.log("enter resize"),offsetX=0,offsetY=0,element=canvas;element;)offsetX+=element.offsetLeft,offsetY+=element.offsetTop,element=element.offsetParent
ctx.canvas.width=ctx.canvas.offsetWidth,ctx.canvas.height=ctx.canvas.offsetHeight,width=ctx.canvas.width,gameheight=ctx.canvas.height,null!=u&&u.getCam().setViewport(width,gameheight,u.getLevel().getWidth(),u.getLevel().getHeight())},game.gameOver=function(){t(r),a=!1},game.win=function(){t(s)},document.querySelectorAll(".play")[0].addEventListener("click",function(){e(o),t(canvas),game.resize(),g.sounds.background.setloop(!0),g.sounds.background.play(),a=!0}),document.querySelectorAll(".GOrestart")[0].addEventListener("click",function(){e(r),t(canvas),u.getLevel().respawn(),g.sounds.background.setloop(!0),g.sounds.background.play(),a=!0}),document.querySelectorAll(".WINrestart")[0].addEventListener("click",function(){e(s),t(canvas),u.getLevel().respawn(),g.sounds.background.setloop(!0),g.sounds.background.play(),a=!0}),window.addEventListener("resize",game.resize,!1),window.addEventListener("orientationchange",game.resize,!1),document.addEventListener("keydown",c.handleKeyDown,!1),document.addEventListener("keyup",c.handleKeyUp,!1),canvas.addEventListener("touchstart",c.handleStart,!1),canvas.addEventListener("touchend",c.handleEnd,!1),canvas.addEventListener("touchleave",c.handleEnd,!1),game.init()}DebugMode=!1,window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}(),PlatformerGame=new Game
