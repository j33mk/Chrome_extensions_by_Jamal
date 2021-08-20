chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    console.log(changeInfo);

    if (changeInfo.status == 'complete') {
        alert(tab.url);
    }
  })