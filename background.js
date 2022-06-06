
chrome.runtime.onInstalled.addListener(function() {
  let rule1 = {
    conditions: [
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { urlContains: 'pc.lgb360.com', schemes: ['https'] },
      })
    ],
    actions: [ new chrome.declarativeContent.ShowAction() ]
  }

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([rule1]);
  })
})


chrome.runtime.onMessage.addListener(function(request, sender, response) {
  if(request.tag == "user-set-speed") {
    chrome.tabs.query({active: true}, function(tabs) {
      chrome.tabs.sendMessage(
          tabs[0].id,
          request
      )
    })
  }
})