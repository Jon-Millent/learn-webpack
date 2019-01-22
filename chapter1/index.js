import moment from 'moment'


function getMyTime() {
	return moment().format('YYYY-MM-DD HH:mm:ss')
}

window.onload = ()=>{
	let timeElement = document.querySelector('#time')

	timeElement.innerHTML = getMyTime()

	setInterval(()=>{
		timeElement.innerHTML = getMyTime()
	}, 1000)
}