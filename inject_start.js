window.addEventListener("blur", event=>event.stopImmediatePropagation(), { capture: true })
window.addEventListener("focus", event=>event.stopImmediatePropagation(), { capture: true })
document.addEventListener("visibilitychange", event=>event.stopImmediatePropagation(), { capture: true })

chrome.runtime.onMessage.addListener(function(request, sender, response) {
	if (request.tag == "user-set-speed") {
		console.log("set speed to " + request.data)
		document.querySelector('video').playbackRate = request.data;
		// document.querySelector('video').play();
	}
	
})


