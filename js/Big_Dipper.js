// 鼠标悬浮停止旋转
var lis = document.querySelectorAll('div>a')
for (let i = 0; i < lis.length; i++) {
	let big = document.querySelector('.Big_Dipper')
	let divs = document.querySelectorAll('.Big_Dipper>div')
	lis[i].onmouseover = function() {
		big.style.animationPlayState = 'paused'
		for (let j = 0; j < divs.length; j++) {
			divs[j].style.animationPlayState = 'paused'
		}
	}
	lis[i].onmouseout = function() {
		big.style.animationPlayState = 'running'
		for (let j = 0; j < divs.length; j++) {
			divs[j].style.animationPlayState = 'running'
		}
	}
}
// 七星动画效果

// 右上角切换中英文简介
var eg = document.querySelector('.eg')
var eg_1 = document.querySelector('.eg_1')
var eg_2 = document.querySelector('.eg_2')
let flag = true
eg.onmouseover = function() {
	if (flag == false) {
		eg_2.style.display = 'none'
		eg_1.style.display = 'block'
		flag = true
	} else {
		eg_1.style.display = 'none'
		eg_2.style.display = 'block'
		flag = false
	}
}
eg.onmouseout = function() {
	// setInterval(function(){
	eg_1.style.display = 'none'
	eg_2.style.display = 'none'
	// },1000)
}
// 文字出现效果
setTimeout(() => {
	animousb(bg, 50)
	animousc(bg2, 50)
}, 500)
// 七星下降
setTimeout(() => {
	animousa(Dipper, 60, () => {
	})
}, 3000)
