
// chrome.action.onClicked.addListener(function(tab) {
//     chrome.tabs.create({ url: "displayText.html" }, function(tab) {
//       chrome.tabs.executeScript(tab.id, { file: "paginate.js" });
//     });
//   });






  
// chrome.action.onClicked.addListener(function(tab) {
//   chrome.tabs.sendMessage(tab.id, { action: "startTextCollection" });
// });


// chrome.action.onClicked.addListener(function(tab) {
//   chrome.tabs.sendMessage(tab.id, { action: "startTextCollection" }, function(response) {
//     const collectedData = response.collectedData;
//     const url = chrome.runtime.getURL(`displayText.html?data=${encodeURIComponent(JSON.stringify(collectedData))}`);
//     chrome.tabs.create({ url });
//   });
// });






// chrome.action.onClicked.addListener(function(tab) {
//   chrome.tabs.sendMessage(tab.id, { action: "startTextCollection" }, function(response) {
//     const collectedData = response.collectedData;
//     const url = chrome.runtime.getURL(`displayText.html?data=${encodeURIComponent(JSON.stringify(collectedData))}`);
//     chrome.tabs.create({ url });
//   });
// });

// chrome.action.onClicked.addListener(function(tab) {
//   chrome.tabs.sendMessage(tab.id, { action: "startTextCollection" }, function(response) {
//     const collectedData = response.collectedData.join("\n"); // Convert the array to a string
//     const url = chrome.runtime.getURL(`displayText.html?data=${encodeURIComponent(collectedData)}`);
//     chrome.tabs.create({ url });
//   });
// });

chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, { action: "startTextCollection" }, function(response) {
    const collectedData = response.collectedData.join("\n"); // Convert the array to a string

    // Store the collected data in chrome.storage
    chrome.storage.local.set({ "collectedData": collectedData }, function() {
      // Retrieve the stored data to ensure it is stored correctly
      chrome.storage.local.get("collectedData", function(result) {
        const storedData = result.collectedData;

        if (storedData) {
          const url = chrome.runtime.getURL("displayText.html");
          chrome.tabs.create({ url });
        } else {
          console.error("Failed to store collected data in chrome.storage.");
        }
      });
    });
  });
});
