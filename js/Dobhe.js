let person = document.querySelector('.person')
let skill = document.querySelector('.skill')
for (let i = 0; i < skill.children.length; i++) {
	skill.children[i].style.color = '#' + parseInt(Math.random() * 0xffffff).toString(16)
}
// 绘制图形
let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')
// 圆形
			function animouarc(x, y, r, to, angle, width, color1, color2, order, callback) {
				let deg = Math.PI * 2 / 360
				to = to * deg
				angle = angle * deg
				c.beginPath()
				c.arc(x, y, r, to, angle, order)
				c.strokeStyle = color1
				c.fillStyle = color2
				c.lineWidth = width
				c.fill()
				c.stroke()
				callback && callback()
				c.closePath()
			}
			// 椭圆(中心点x,y 半径xr,yr 起始结果角度 旋转角度)
			function animouellipse(x, y, xr, yr, startAngle, endAngle, rotation, color1, color2, width) {
				c.beginPath()
				c.ellipse(x, y, xr, yr, startAngle, endAngle, rotation)
				c.lineWidth = width
				c.fillStyle = color2
				c.strokeStyle = color1
				c.fill()
				c.stroke()
				c.closePath()
			}
			// 头
			animouarc(343, 229, 200, 0, 360, 2, 'black', '#83c5fe', true)
			animouellipse(343, 250, 180, 185, 0, 0, Math.PI * 2, 'black', 'white', 2)
			// 左眼
			animouellipse(314, 72, 40, 27, 250, 0, Math.PI * 2, 'black', 'white', 2)
			animouellipse(325, 58, 15, 10, 250, 0, Math.PI * 2, 'black', 'black', 2)
			animouellipse(324, 52, 6, 4, 250, 0, Math.PI * 2, 'white', 'white', 1)
			animouellipse(320, 64, 2, 2, 250, 0, Math.PI * 2, 'white', 'white', 1)
			animouellipse(328, 64, 3, 3, 250, 0, Math.PI * 2, 'white', 'white', 1)
			// 右眼
			animouellipse(372, 72, 40, 27, -250, 0, Math.PI * 2, 'black', 'white', 2)
			animouellipse(361, 58, 15, 10, -250, 0, Math.PI * 2, 'black', 'black', 2)
			animouellipse(359, 52, 6, 4, -250, 0, Math.PI * 2, 'white', 'white', 1)
			animouellipse(358, 64, 2, 2, -250, 0, Math.PI * 2, 'white', 'white', 1)
			animouellipse(366, 64, 3, 3, -250, 0, Math.PI * 2, 'white', 'white', 1)
			// 鼻子
			animouarc(343, 115, 20, 0, 360, 2, 'black', '#e55b5d', true)
			animouellipse(345, 110, 4, 4, 250, 0, Math.PI * 2, 'white', 'white', 1)
			c.beginPath()
			c.moveTo(343, 135)
			c.lineTo(343, 230)
			c.lineWidth = 3
			c.strokeStyle = 'black'
			c.stroke()
			c.closePath()
			// 嘴巴
			c.beginPath()
			c.moveTo(243,200)
			c.quadraticCurveTo(343,256,443,200)
			c.strokeStyle = 'black'
			c.stroke()
			c.closePath()