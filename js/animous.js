let Dipper = document.querySelector('.Big_Dipper')
let bg = document.querySelector('.bg')
let bg2 = document.querySelector('.bg2')
// let canvas1 = document.getElementById('circle_group')
// let ctx1 = canvas1.getContext('2d')
// 下降
function animousa(obj, target, callback) {
	let num = 0
	obj.time = setInterval(() => {
		let height = obj.offsetHeight / 2
		let width = obj.offsetWidth / 2
		num += 0.5
		if (num == target) {
			clearInterval(obj.time)
			callback && callback()
		}
		obj.style.top = 'calc(' + num + '% - ' + height + 'px)'
	}, 30)
}
// 从左淡入
function animousb(obj, target, callback) {
	let num = 0
	obj.time = setInterval(() => {
		let width = obj.offsetWidth / 2
		num += 0.5
		if (num == target) {
			clearInterval(obj.time)
			callback && callback()
		}
		obj.style.left = 'calc(' + num + '% - ' + width + 'px)'
	}, 25)
}
// 欢迎
function animousc(obj, target, callback) {
	let num = 0
	obj.time = setInterval(() => {
		num += 0.1
		if (num == 1) {
			clearInterval(obj.time)
			callback && callback()
		}
		obj.style.opacity = num
	}, 250)
}
