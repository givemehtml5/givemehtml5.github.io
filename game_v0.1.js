function InputManager(){function e(e,t){return e>0&&e<width&&t>height-gameheight&&t<height-gameheight/2?!0:!1}function t(e,t){return e>.25*width&&e<.75*width&&t>height-gameheight/2&&t<height?!0:!1}function i(e,t){return e>0&&e<.25*width&&t>height-gameheight/2&&t<height?!0:!1}function n(e,t){return e>.75*width&&e<width&&t>height-gameheight/2&&t<height?!0:!1}var h=0,a=-1,c=-1,d=-1,g=-1
this.GetInput=function(){return h},this.handleKeyDown=function(e){var t=e.keyCode?e.keyCode:e.charCode
38===t&&(e.preventDefault(),h|=8),32===t&&(e.preventDefault(),h|=4),37===t&&(e.preventDefault(),h|=2),39===t&&(e.preventDefault(),h|=1)},this.handleKeyUp=function(e){var t=e.keyCode?e.keyCode:e.charCode
38===t&&(e.preventDefault(),h&=7),32===t&&(e.preventDefault(),h&=11),37===t&&(e.preventDefault(),h&=13),39===t&&(e.preventDefault(),h&=14)},this.handleStart=function(o){o.preventDefault(),DebugMode&&console.log("input : "+o.changedTouches[0].clientX+"-"+o.changedTouches[0].clientY),e(o.changedTouches[0].clientX,o.changedTouches[0].clientY)&&(h|=8,a=o.changedTouches[0].identifier),t(o.changedTouches[0].clientX,o.changedTouches[0].clientY)&&(h|=4,g=o.changedTouches[0].identifier),i(o.changedTouches[0].clientX,o.changedTouches[0].clientY)&&(h|=2,c=o.changedTouches[0].identifier),n(o.changedTouches[0].clientX,o.changedTouches[0].clientY)&&(h|=1,d=o.changedTouches[0].identifier)},this.handleEnd=function(e){e.preventDefault(),a===e.changedTouches[0].identifier&&(h&=7),g===e.changedTouches[0].identifier&&(h&=11),c===e.changedTouches[0].identifier&&(h&=13),d===e.changedTouches[0].identifier&&(h&=14)}}function WorldRenderer(){var e=!1,t=!1,i=!1,n=!1
this.update=function(h){e=!1,t=!1,i=!1,n=!1,8===(8&h)&&(i=!0),4===(4&h)&&(n=!0),2===(2&h)&&(e=!0),1===(1&h)&&(t=!0)},this.render=function(){ctx.clearRect(0,0,width,height),ctx.fillStyle="blue",ctx.fillRect(0,0,width,gameheight),ctx.fillStyle="red",ctx.strokeStyle="red",ctx.rect(0,height-gameheight,width,height-gameheight),ctx.stroke(),!0===i&&ctx.fillRect(0,height-gameheight,width,gameheight/2),!0===n&&ctx.fillRect(.25*width,height-gameheight/2,width/2,gameheight/2),!0===e&&ctx.fillRect(0,height-gameheight/2,width/4,gameheight/2),!0===t&&ctx.fillRect(.75*width,height-gameheight/2,width/4,gameheight/2),ctx.fillStyle="white",ctx.font="30px Arial",ctx.fillText("Press or touch",.45*width,.45*gameheight),!0===i&&ctx.fillText("JUMP",.45*width,.25*gameheight),!0===n&&ctx.fillText("ACTION",.45*width,.75*gameheight),!0===e&&ctx.fillText("LEFT",.1*width,.75*gameheight),!0===t&&ctx.fillText("RIGHT",.8*width,.75*gameheight)}}function Game(){var e,t=this
canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),width=canvas.width,height=canvas.height,gameheight=canvas.height
var i=new InputManager,n=new WorldRenderer
t.init=function(){DebugMode&&console.log("enter init"),t.resize(),t.start()},t.start=function(){DebugMode&&console.log("enter start"),t.animate()},t.animate=function(){window.requestAnimFrame(t.animate),e=i.GetInput(),n.update(e),n.render()},t.resize=function(){DebugMode&&console.log("enter resize"),ctx.canvas.width=ctx.canvas.offsetWidth,ctx.canvas.height=ctx.canvas.offsetHeight,width=ctx.canvas.width,height=ctx.canvas.height,gameheight=ctx.canvas.height,width<height&&(gameheight=height/2),DebugMode&&console.log("resize :  "+width+"-"+height+"-"+gameheight)},window.addEventListener("resize",t.resize,!1),window.addEventListener("orientationchange",t.resize,!1),document.addEventListener("keydown",i.handleKeyDown,!1),document.addEventListener("keyup",i.handleKeyUp,!1),canvas.addEventListener("touchstart",i.handleStart,!1),canvas.addEventListener("touchend",i.handleEnd,!1),canvas.addEventListener("touchleave",i.handleEnd,!1),t.init()}DebugMode=!1,window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),game=new Game
