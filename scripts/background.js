chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('amazon.com')
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ['css/global.css'],
    });
  }
});
