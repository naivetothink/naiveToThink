log=console.log.bind(console);







function main(argument) {
	
var cycles=Cycles(2,"10%"); //取得圈的属性  可传入两个参数，border的尺寸和radiu 通过控制它的属性来控制生成的圈
var game=GuaGame();


var huatiao=document.getElementById('b_size')
	huatiao.addEventListener("input",function (event) {
		//log(event,event.target.value)
		cycles.size=event.target.value/10

	})
var huatiao2=document.getElementById('b_radius')
	huatiao2.addEventListener("input",function (event) {
		//log(event,event.target.value)
		cycles.radius=event.target.value/2+"%"
		log(cycles.radius)
	})


var btn =document.getElementById('btn')
	var text1=btn.childNodes[0]	//文本节点
	btn.onclick=function (argument) {
		if(text1.nodeValue=="选择手动"){
			text1.nodeValue="选择自动"
			
		}
			else{text1.nodeValue="选择手动"
				
		}
	}
addEventListener("mousedown",function () {
	if (text1.nodeValue=="选择自动"&&event.clientY>60) {
		cycles.enable=true;
	}				
})
addEventListener("mousemove",function () {
	if(cycles.enable){
		cycles.x=event.clientX-40
		cycles.y=event.clientY-40					
	}
})			
addEventListener("mouseup",function () {
	cycles.enable=false;				
})
var noSlect=document.getElementById('try')


	  
setInterval(function (argument) {
noSlect.style.width=cycles.w-20+"px";
noSlect.style.height=cycles.h-60+"px";		
		if(text1.nodeValue=="选择手动"){
			game.jian(cycles)
			cycles.change()
			//jian()	//调用生成并会消失的圈的函数
		}else{
			if(cycles.enable){
				game.jian(cycles)
				//jian()	
			}
		
		}		
},1000/30)

}
main()


function Cycles(sz,ra) {
	var w=document.documentElement.clientWidth;
	var h=document.documentElement.clientHeight;
	var body=document.getElementsByTagName('body')[0];	
	var W=80;
	var H=80;
	var size=5;
	var radius="50%"
	if(sz){var size=sz;}
	if(ra){var radius=ra}
	var o={
		body:body,		//
		w:w,
		h:h,
		x:Math.abs(Math.floor(Math.random()*w-W)),//用的是var那个w
		y:Math.abs(Math.floor(Math.random()*h-H)),//为防止出现在边界之外
		speedX:10,
		speedY:10,
		size:size,
		radius:radius,
		W:W,
		H:H,
		num:0,
		index:function (argument) {
			var n=o.num%o.color.length
			return n;
		},	//用于设置圈的颜色
		color:["red","blue","yellow","green","gray","white","black"],		
		change:function (argument) {
			if(o.x<0||o.x+o.W+o.speedX+o.size*2>o.w){o.speedX*=-1}	//*2是为了防止撞击时出现进度条
			if(o.y<0||o.y+o.H+o.speedY+o.size*2>o.h){o.speedY*=-1}
			o.x+=o.speedX
			o.y+=o.speedY
			
			
		},
		enable:false,
	}
return o;
}

function GuaGame(argument) {
	var o={}

		o.crt=function (cycles) {
					
					var cycle=document.createElement("div");
					cycles.num++;
					cycles.w=document.documentElement.clientWidth;
					cycles.h=document.documentElement.clientHeight;
					cycle.style.position="absolute"
					cycle.style.draggable=false;
					cycle.style.width=cycles.W+"px"
					cycle.style.height=cycles.H+"px"
					cycle.style.border=cycles.size+"px solid "+cycles.color[cycles.index()]
					cycle.style.borderRadius=cycles.radius
					cycle.style.left=cycles.x+"px"
					cycle.style.top=cycles.y+"px"
					cycles.body.appendChild(cycle);

					cycle.w=cycles.W;
					cycle.h=cycles.H;


					return cycle;
					

				}
		o.jian=function (cycles) {
					var cycle1=o.crt(cycles)	//没调用一次函数都会生成一个圈，圈自动消失并删除。

					
					// var cycle2=crt()
						cycle1.jiankuan=setTimeout(del,1000/30)

					function del() {
							if(cycle1.jiankuan){clearTimeout(cycle1.jiankuan)}
							cycle1.w-=2;
							cycle1.h-=2;
							//cycle1.h-=2;
							//log("cycle1.w")
							cycle1.style.width=cycle1.w+"px"
							cycle1.style.height=cycle1.h+"px"
							//log(jiankuan==true)
							
							if(cycle1.w<=0){
								cycles.body.removeChild(cycle1)	//	这一句没有独立
								//cycle1=""
								clearTimeout(cycle1.jiankuan)
								
								
							}else{cycle1.jiankuan=setTimeout(del,1000/30)}
							
					}	

				}

	


	return o;
}
//setInterval(crt,1000)



