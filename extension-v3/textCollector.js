// let collectedData = [];

// const relevantProperties = [
//   "font-family",
//   "font-size",
//   "font-weight",
//   "color",
//   "background-color",
//   "font-style",
//   "font-variant",
//   "line-height",
//   "letter-spacing",
//   "text-decoration",
//   "text-transform",
//   "text-align",
//   "text-indent",
//   "text-shadow",
//   "text-overflow",
//   "white-space",
//   "word-spacing",
// ];

// const excludedTags = [
//   'adbox',
//   'adfdb',
//   'aside',
//   'combx',
//   'configurator',
//   'comment',
//   'community',
//   'disqus',
//   'extra',
//   'font_size',
//   'foot',
//   'header',
//   'layer_txt_size',
//   'menu',
//   'remark',
//   'rss',
//   'scroll',
//   'shoutbox',
//   'sidebar',
//   'sponsor',
//   'ad-break',
//   'agegate',
//   'pagination',
//   'pager',
//   'poll_area',
//   'popup',
//   'ranking_list',
//   'read-more',
//   'reply_list',
//   'tweet',
//   'twitter',
//   'rmcplayer',
//   'u_rmcplayer',
//   'vod_player_wrap',
//   'video_area',
//   'slideshow',
//   'vdb_player',
//   'vemba_VideoJS',
//   'video_spinner',
//   'personalize_news',
//   'news_reply_area',
//   'jw-dock-button',
//   'titleFixedArea',
//   'whatsapp_share',
//   'wxnode_video_player',
//   'vjs-tracksetting',
//   'vjs-modal',
//   'caption',
//   'sticky-player',
//   'nav',
//   'video-js'
// ];


// function isElementExcluded(element) {
//   const tagName = element.tagName.toLowerCase();
//   const className = element.className;
//   return excludedTags.some(tag => tagName === tag || className.includes(tag));
// }

// let walker = document.createTreeWalker(
//   document.body,
//   NodeFilter.SHOW_TEXT,
//   {
//     acceptNode: (node) => {
//       // Only accept text nodes that have non-empty content
//       if (node.textContent.trim().length > 0) {
//         const parentElement = node.parentElement;
//         // Check if the parent element or any of its ancestors matches any of the excluded tags
//         if (!parentElement || !isElementExcluded(parentElement) && !isAncestorExcluded(parentElement)) {
//           const elementData = {
//             text: node.textContent.trim(),
//             css: {}
//           };

//           const computedStyle = window.getComputedStyle(parentElement);
//           for (const property of relevantProperties) {
//             const propertyValue = computedStyle.getPropertyValue(property);
//             if (propertyValue !== 'none') {
//               elementData.css[property] = propertyValue;
//             }
//           }

//           collectedData.push(elementData); // Store the text content and filtered CSS properties
//           return NodeFilter.FILTER_ACCEPT;
//         }
//         return NodeFilter.FILTER_REJECT; // Skip the subtree
//       } else {
//         return NodeFilter.FILTER_SKIP;
//       }
//     },
//   },
//   false
// );

// function isAncestorExcluded(element) {
//   let ancestor = element.parentElement;
//   while (ancestor) {
//     if (isElementExcluded(ancestor)) {
//       return true;
//     }
//     ancestor = ancestor.parentElement;
//   }
//   return false;
// }

// while (walker.nextNode()) {
//   // No need to store the text node itself, only store its content and filtered CSS properties
// }

// localStorage.setItem("collectedData", JSON.stringify(collectedData));















// document.addEventListener("DOMContentLoaded", () => {
  // function isElementExcluded(element) {
  //   const tagName = element.tagName.toLowerCase();
  //   const className = element.className;
  //   return excludedTags.some(tag => tagName === tag || className.includes(tag));
  // }

  // const relevantProperties = [
  //   "font-family",
  //   "font-size",
  //   "font-weight",
  //   "color",
  //   "background-color",
  //   "font-style",
  //   "font-variant",
  //   "line-height",
  //   "letter-spacing",
  //   "text-decoration",
  //   "text-transform",
  //   "text-align",
  //   "text-indent",
  //   "text-shadow",
  //   "text-overflow",
  //   "white-space",
  //   "word-spacing",
  // ];
  
  // const excludedTags = [
  //   'adbox',
  //   'adfdb',
  //   'aside',
  //   'combx',
  //   'configurator',
  //   'comment',
  //   'community',
  //   'disqus',
  //   'extra',
  //   'font_size',
  //   'foot',
  //   'header',
  //   'layer_txt_size',
  //   'menu',
  //   'remark',
  //   'rss',
  //   'scroll',
  //   'shoutbox',
  //   'sidebar',
  //   'sponsor',
  //   'ad-break',
  //   'agegate',
  //   'pagination',
  //   'pager',
  //   'poll_area',
  //   'popup',
  //   'ranking_list',
  //   'read-more',
  //   'reply_list',
  //   'tweet',
  //   'twitter',
  //   'rmcplayer',
  //   'u_rmcplayer',
  //   'vod_player_wrap',
  //   'video_area',
  //   'slideshow',
  //   'vdb_player',
  //   'vemba_VideoJS',
  //   'video_spinner',
  //   'personalize_news',
  //   'news_reply_area',
  //   'jw-dock-button',
  //   'titleFixedArea',
  //   'whatsapp_share',
  //   'wxnode_video_player',
  //   'vjs-tracksetting',
  //   'vjs-modal',
  //   'caption',
  //   'sticky-player',
  //   'nav',
  //   'video-js'
  // ];
  
  // console.log('Text-Collecter Script (from extension) started.');
  

  // let collectedData = [];

  // let walker = document.createTreeWalker(
  //   document.body,
  //   NodeFilter.SHOW_TEXT,
  //   {
  //     acceptNode: (node) => {
  //       // Only accept text nodes that have non-empty content
  //       if (node.textContent.trim().length > 0) {
  //         const parentElement = node.parentElement;
  //         // Check if the parent element or any of its ancestors matches any of the excluded tags
  //         if (!parentElement || !isElementExcluded(parentElement) && !isAncestorExcluded(parentElement)) {
  //           console.log('Node with text-content pushed');
  //           collectedData.push(node.textContent.trim()); // Store the text content
  //           return NodeFilter.FILTER_ACCEPT;
  //         }
  //         return NodeFilter.FILTER_REJECT; // Skip the subtree
  //       } else {
  //         return NodeFilter.FILTER_SKIP;
  //       }
  //     },
  //   },
  //   false
  // );

  // function isAncestorExcluded(element) {
  //   let ancestor = element.parentElement;
  //   while (ancestor) {
  //     if (isElementExcluded(ancestor)) {
  //       return true;
  //     }
  //     ancestor = ancestor.parentElement;
  //   }
  //   return false;
  // }

  // console.log('TreeWalker traversing nodes (from extension) started.');
  // while (walker.nextNode()) {
  //   // No need to store the text node itself, only store its content
  // }
  // console.log('TreeWalker traversing nodes (from extension) ended.');

  // localStorage.setItem("collectedData", JSON.stringify(collectedData));

  // console.log('Text-Collecter Script (from extension) ended.');
// });








chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "startTextCollection") {


    // Your text collection logic here

    function isElementExcluded(element) {
      const tagName = element.tagName.toLowerCase();
      const className = element.className;
      return excludedTags.some(tag => tagName === tag || className.includes(tag));
    }
  
    const relevantProperties = [
      "font-family",
      "font-size",
      "font-weight",
      "color",
      "background-color",
      "font-style",
      "font-variant",
      "line-height",
      "letter-spacing",
      "text-decoration",
      "text-transform",
      // "text-align",
      "text-indent",
      "text-shadow",
      "text-overflow",
      "white-space",
      "word-spacing",
    ];
    
    const excludedTags = [
      'adbox',
      'adfdb',
      'aside',
      'combx',
      'configurator',
      'comment',
      'community',
      'disqus',
      'extra',
      'font_size',
      'foot',
      'header',
      'layer_txt_size',
      'menu',
      'noscript',
      'remark',
      'rss',
      'script',
      'scroll',
      'shoutbox',
      'sidebar',
      'sponsor',
      'style',
      'ad-break',
      'agegate',
      'pagination',
      'pager',
      'poll_area',
      'popup',
      'ranking_list',
      'read-more',
      'reply_list',
      'tweet',
      'twitter',
      'rmcplayer',
      'u_rmcplayer',
      'vod_player_wrap',
      'video_area',
      'slideshow',
      'vdb_player',
      'vemba_VideoJS',
      'video_spinner',
      'personalize_news',
      'news_reply_area',
      'jw-dock-button',
      'titleFixedArea',
      'whatsapp_share',
      'wxnode_video_player',
      'vjs-tracksetting',
      'vjs-modal',
      'caption',
      'sticky-player',
      'nav',
      'video-js'
    ];
    
    console.log('Text-Collecter Script (from extension) started.');
    
  
    let collectedData = [];
  
    let walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          // Only accept text nodes that have non-empty content
          if (node.textContent.trim().length > 0) {
            const parentElement = node.parentElement;
            // Check if the parent element or any of its ancestors matches any of the excluded tags
            if (!parentElement || !isElementExcluded(parentElement) && !isAncestorExcluded(parentElement)) {
              console.log('Node with text-content & css pushed');
              const elementData = {
                text: node.textContent.trim(),
                css: {}
              };
    
              const computedStyle = window.getComputedStyle(parentElement);
              for (const property of relevantProperties) {
                const propertyValue = computedStyle.getPropertyValue(property);
                if (propertyValue !== 'none') {
                  elementData.css[property] = propertyValue;
                }
              }
    
              collectedData.push(elementData); // Store the text content and filtered CSS properties
              return NodeFilter.FILTER_ACCEPT;
            }
            return NodeFilter.FILTER_REJECT; // Skip the subtree
          } else {
            return NodeFilter.FILTER_SKIP;
          }
        },
      },
      false
    );
    
  
    function isAncestorExcluded(element) {
      let ancestor = element.parentElement;
      while (ancestor) {
        if (isElementExcluded(ancestor)) {
          return true;
        }
        ancestor = ancestor.parentElement;
      }
      return false;
    }
  
    console.log('TreeWalker traversing nodes (from extension) started.');
    while (walker.nextNode()) {
      // No need to store the text node itself, only store its content
    }
    console.log('TreeWalker traversing nodes (from extension) ended.');
  
    sendResponse({ collectedData }); // Send the collected data back to the background script
    // localStorage.setItem("collectedData", JSON.stringify(collectedData));
  
    console.log('Text-Collecter Script (from extension) ended.');


  }
});
