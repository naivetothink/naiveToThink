var log=console.log.bind(console)
// if (!document.getElementByClassName) {alert("不存在")}
function textChange(obi,str){

	obi.onfocus=function () {
		if (this.value==str) {this.value=""}
			
		
	}

	obi.onblur=function () {
		if (this.value=="") {this.value=str}
		
	}
}
var otext1=document.getElementById('text1')
var otext2=document.getElementById('text2')
textChange(otext1,"Search website")
textChange(otext2,"Search website")

function sorte() {
	var sort=document.getElementById('sort')
	var sort_ul=sort.getElementsByTagName('ul')
	log(sort_ul.length)
	var sort_a=sort.getElementsByTagName('a')
	log(sort_a.length)
	for (var i = 0; i < sort_a.length; i++) {
		var a=sort_a[i]		
		a.onclick=function (num) {			
			return function () {
				var ul=sort_ul[num]
				var a=sort_a[num]				
				if (ul.style.display=="block") {
					ul.style.display="none"
					a.setAttribute("class","")
					//log(a.className)
				}else{
						ul.style.display="block"
						a.setAttribute("class","rotate_180")
						//log(a.className)
					}
				
			}
			
		} (i)        
		
		
	}

}

function ab() {		//所以li元素绝对定位，改变li元素的display。
	var ab=document.getElementById('ab'),
		lis=ab.getElementsByTagName('li'),
		index=0;		
	setTimeout(function se() {
		for (var i = 0; i < lis.length; i++) {
				var li= lis[i]
				li.style.display="none"
		}
		lis[index].style.display="block";
		index++;
		if (index==i) {
			index=0
		}
		setTimeout(se,2000)			
	},2000)
}



window.onload=function () {
	sorte()

	
}