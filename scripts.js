const red_1 = document.querySelector('.red1')
const red_2 = document.querySelector('.red2')
const red_3 = document.querySelector('.red3')
const red_5 = document.querySelector('.red5')
const modal_1 = document.querySelector('.modal_1')
const wau = document.querySelector('.wau')
const alice = document.querySelector('.alice')

red_1.onclick = function () {
	modal_1.className = 'modal modal_1 modal_1_active'
}

modal_1.onclick = function () {
	modal_1.className = 'modal'
}
red_2.onclick = function () {
	wau.play()
}
red_3.onclick = function () {
	red_3.className = 'sq sq1 red red3 red3_active'
}
red_5.onclick = function () {
	alice.play()
}
