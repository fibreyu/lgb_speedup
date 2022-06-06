if(document.my_listener != null) {
	console.log("already speedup !")
} else {
	start_next()
	document.my_listener = setInterval(speed_up, 10000)
}

function speed_up() {
	let vedio = document.getElementsByTagName('video')[0]
	if(check_vedio() == "end") {
		start_next()
	} else if(check_vedio() == "paused") {
		vedio.play()
	}
}

function check_vedio() {
	let vedio = document.getElementsByTagName('video')[0]
	if (vedio.currentTime >= vedio.duration) {
		// console.log("vedio running")
		return "end"
	}
	if (vedio.paused) {
		return "paused"
	}
	return "on"
}


// 开始下一个视频
function start_next() {
	window.start_next_video = null
	let flag = 0
	let video_lists = document.getElementsByClassName('video-list')[0].getElementsByTagName('li')
	for(let video_list of video_lists) {
		transition_boxs = video_list.getElementsByClassName('transition-box')
		for(let transition_box of transition_boxs) {
			let record = transition_box.getElementsByClassName('record')[0].innerHTML
			if (record.indexOf("100%") == -1) {
				let title = transition_box.getElementsByClassName('right-content')[0].getElementsByTagName('p')[0].innerHTML
				console.log("start next video \"" + title + "\" !")
				transition_box.click()
				console.log("start_next")
				document.querySelector('video').play();
				flag = 1
				break
			}
		}
		if (flag == 1) break
	}
}



