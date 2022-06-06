
let button = document.getElementById("end_button");
button.addEventListener('click', function() {
    injectScript()
    changeSpeed()
}, false)

function changeSpeed() {
    let speed = document.getElementById('speed').value
    chrome.runtime.sendMessage(
        {
            "tag": "user-set-speed",
            "data": speed
        }
    )
}

async function injectScript() {
    injected = true
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.scripting.executeScript({
	    target: { tabId: tab.id },
	    files: ['inject_program.js']
    });
}

let info = document.getElementById("info")
info.addEventListener('click', function() {
    alert("速度为:[0-16]\n加速有风险\n如果出现视频页面闪退,就是被检测到作弊\n清空浏览器历史记录重启电脑再试")
},false)


