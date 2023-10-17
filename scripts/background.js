chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    (changeInfo.status === 'complete' &&
      tabUrl &&
      tabUrl.includes('amazon.de')) || //validated
    tabUrl.includes('amazon.es') || //validated
    tabUrl.includes('amazon.fr') || //validated
    tabUrl.includes('amazon.in') || // validated
    tabUrl.includes('amazon.it') || //validated
    tabUrl.includes('amazon.co.uk') || // validated
    tabUrl.includes('amazon.ca') || // validated
    tabUrl.includes('amazon.co.jp') ||
    tabUrl.includes('amazon.nl') ||
    tabUrl.includes('amazon.sa') ||
    tabUrl.includes('amazon.com.au') ||
    tabUrl.includes('amazon.com.mx') ||
    tabUrl.includes('amazon.com')
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ['css/global.css'],
    });
  }
});
