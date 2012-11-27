chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == "getName") {
    sendResponse({ name: localStorage['name'] });
  }
});
