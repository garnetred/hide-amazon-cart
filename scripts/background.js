chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    chrome.tabs.create({
      url: 'https://decemberdevelopment.com/hide-amazon-cart',
      active: true,
    });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    (changeInfo.status === 'complete' &&
      tabUrl &&
      tabUrl.includes('amazon.de')) ||
    tabUrl.includes('amazon.es') ||
    tabUrl.includes('amazon.fr') ||
    tabUrl.includes('amazon.in') ||
    tabUrl.includes('amazon.it') ||
    tabUrl.includes('amazon.co.uk') ||
    tabUrl.includes('amazon.ca') ||
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
