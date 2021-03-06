chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	let url = tab.url
	// URL matches https://project.genesys.com/.../qualityassurance
	if(url.substring(0, 27) === 'https://project.genesys.com' &&
		url.substring(url.length - 16, url.length) == 'qualityassurance') {
		console.log('sending message')
		chrome.tabs.sendMessage(tab.id, {'message': 'reachQuality'})
		//chrome.tabs.sendMessage(activeTab.id, {"message": "test"});
	} else if(url.includes('jira.genesys.com/browse')) {
		chrome.tabs.sendMessage(tab.id, {'message': 'reachJIRA'})
	} else {
		chrome.tabs.sendMessage(tab.id, {'message': 'leaveQuality'})
	}
});