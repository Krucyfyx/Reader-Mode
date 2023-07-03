// content.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "executePaginateScript") {
      // Inject the paginate.js script into the web page context
      injectScript(chrome.runtime.getURL("paginate.js"));
    }
  });
  
  // Function to inject a script into the web page context
  function injectScript(scriptUrl) {
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.onload = function() {
      this.remove(); // Clean up the injected script element
    };
    (document.head || document.documentElement).appendChild(script);
  }
  