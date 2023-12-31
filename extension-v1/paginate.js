// document.addEventListener("DOMContentLoaded", () => {
//   const contentDiv = document.getElementById('content');
//   const prevBtn = document.getElementById('prevBtn');
//   const nextBtn = document.getElementById('nextBtn');
//   const pageDisplay = document.getElementById('pageDisplay');
//   const container = document.querySelector('.container');
//   const windowHeight = window.innerHeight;
//   const containerHeight = windowHeight * 0.91;

//   // Retrieve the collected data from local storage
//   const collectedData = JSON.parse(localStorage.getItem("collectedData"));

//   // Check if the collectedData is an array of elements
//   if (Array.isArray(collectedData)) {
//     // Extract the text and css properties from the collected data
//     const collectedText = collectedData.map(data => data.text);
//     const collectedCSS = collectedData.map(data => data.css);

//     // Pagination state
//     let currentPage = 0;
//     let totalPages = 0;
//     let pages = [];

//     // Apply the stored text and CSS to the contentDiv
//     const storedText = localStorage.getItem('text');
//     const storedCSS = localStorage.getItem('css');
//     const parsedCSS = JSON.parse(storedCSS);
//     contentDiv.innerHTML = storedText; // Use innerHTML instead of textContent

//     // Apply the required styling to the contentDiv
//     for (const prop in parsedCSS) {
//       if (prop.includes('font') || prop.includes('color') || prop.includes('background')) {
//         contentDiv.style.setProperty(prop, parsedCSS[prop]);
//       }
//     }

//     prevBtn.addEventListener('click', () => {
//       if (currentPage > 0) {
//         currentPage--;
//         showPage(currentPage);
//       }
//     });

//     nextBtn.addEventListener('click', () => {
//       if (currentPage < totalPages - 1) {
//         currentPage++;
//         showPage(currentPage);
//       }
//     });

//     function paginateTextContent(textArray, cssArray) {
//       let currentPageContent = [];
//       let currentHeight = 0;
    
//       textArray.forEach((text, index) => {
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('injected-text');
//         itemElement.textContent = text;
    
//         // Apply the required styling to the itemElement
//         const cssProperties = cssArray[index];
//         for (const prop in cssProperties) {
//           itemElement.style.setProperty(prop, cssProperties[prop]);
//         }
    
//         currentPageContent.push(itemElement);
    
//         // Inject the itemElement into the container to calculate the containerHeight
//         contentDiv.appendChild(itemElement);
//         const itemHeight = itemElement.offsetHeight;
//         contentDiv.removeChild(itemElement);
    
//         if (currentHeight + itemHeight > containerHeight && currentPageContent.length > 1) {
//           pages.push(currentPageContent);
//           currentPageContent = [itemElement];
//           currentHeight = itemHeight;
//         } else {
//           currentHeight += itemHeight;
//         }
//       });
    
//       if (currentPageContent.length > 0) {
//         pages.push(currentPageContent);
//       }
    
//       totalPages = pages.length;
//       showPage(currentPage); // Show the initial page
//     }
    

//     function showPage(page) {
//       const currentPageContent = pages[page];

//       contentDiv.innerHTML = ''; // Clear the contentDiv

//       currentPageContent.forEach((itemElement) => {
//         contentDiv.appendChild(itemElement);
//       });

//       // Update pagination buttons and page display
//       prevBtn.disabled = page === 0;
//       nextBtn.disabled = page === totalPages - 1;
//       pageDisplay.textContent = `${page + 1}/${totalPages}`;
//     }

//     paginateTextContent(collectedText, collectedCSS);
//     container.style.height = `${containerHeight}px`; // Set the height of the container
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.querySelector('.container');
//   const prevBtn = document.getElementById('prevBtn');
//   const nextBtn = document.getElementById('nextBtn');

//   container.addEventListener('mousemove', (event) => {
//     const containerRect = container.getBoundingClientRect();
//     const containerWidth = containerRect.width;
//     const mouseX = event.clientX - containerRect.left;

//     if (mouseX <= 100) { // Adjust the value to set the hover region width from the left edge
//       prevBtn.style.visibility = 'visible';
//     } else if (mouseX >= containerWidth - 100) { // Adjust the value to set the hover region width from the right edge
//       nextBtn.style.visibility = 'visible';
//     } else {
//       prevBtn.style.visibility = 'hidden';
//       nextBtn.style.visibility = 'hidden';
//     }
//   });
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.querySelector('.container');

//   container.addEventListener('mousemove', (event) => {
//     const containerRect = container.getBoundingClientRect();
//     const containerWidth = containerRect.width;
//     const mouseX = event.clientX - containerRect.left;

//     if (mouseX <= 100) { // Adjust the value to set the hover region width from the left edge
//       container.scrollLeft -= 10; // Adjust the scroll speed if needed
//     } else if (mouseX >= containerWidth - 100) { // Adjust the value to set the hover region width from the right edge
//       container.scrollLeft += 10; // Adjust the scroll speed if needed
//     }
//   });
// });




// document.addEventListener("DOMContentLoaded", () => {
//   const contentDiv = document.getElementById('content');
//   const prevBtn = document.getElementById('prevBtn');
//   const nextBtn = document.getElementById('nextBtn');
//   const pageDisplay = document.getElementById('pageDisplay');
//   const container = document.querySelector('.container');
//   const windowHeight = window.innerHeight;
//   const containerHeight = windowHeight * 0.91;

//   // Retrieve the collected data from local storage
//   const collectedData = JSON.parse(localStorage.getItem("collectedData"));

//   // Check if the collectedData is an array
//   if (Array.isArray(collectedData)) {
//     // Extract the text from the collected data
//     const collectedText = collectedData;

//     // Pagination state
//     let currentPage = 0;
//     let totalPages = 0;
//     let pages = [];

//     prevBtn.addEventListener('click', () => {
//       if (currentPage > 0) {
//         currentPage--;
//         showPage(currentPage);
//       }
//     });

//     nextBtn.addEventListener('click', () => {
//       if (currentPage < totalPages - 1) {
//         currentPage++;
//         showPage(currentPage);
//       }
//     });

//     function paginateTextContent(textArray) {
//       let currentPageContent = [];
//       let currentHeight = 0;

//       textArray.forEach((text) => {
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('injected-text');
//         itemElement.textContent = text;

//         currentPageContent.push(itemElement);

//         // Inject the itemElement into the container to calculate the containerHeight
//         contentDiv.appendChild(itemElement);
//         const itemHeight = itemElement.offsetHeight;
//         contentDiv.removeChild(itemElement);

//         if (currentHeight + itemHeight > containerHeight && currentPageContent.length > 1) {
//           pages.push(currentPageContent);
//           currentPageContent = [itemElement];
//           currentHeight = itemHeight;
//         } else {
//           currentHeight += itemHeight;
//         }
//       });

//       if (currentPageContent.length > 0) {
//         pages.push(currentPageContent);
//       }

//       totalPages = pages.length;
//       showPage(currentPage); // Show the initial page
//     }

//     function showPage(page) {
//       const currentPageContent = pages[page];

//       contentDiv.innerHTML = ''; // Clear the contentDiv

//       currentPageContent.forEach((itemElement) => {
//         contentDiv.appendChild(itemElement);
//       });

//       // Update pagination buttons and page display
//       prevBtn.disabled = page === 0;
//       nextBtn.disabled = page === totalPages - 1;
//       pageDisplay.textContent = `${page + 1}/${totalPages}`;
//     }

//     paginateTextContent(collectedText);
//     container.style.height = `${containerHeight}px`; // Set the height of the container
//   }
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.querySelector('.container');
//   const prevBtn = document.getElementById('prevBtn');
//   const nextBtn = document.getElementById('nextBtn');

//   container.addEventListener('mousemove', (event) => {
//     const containerRect = container.getBoundingClientRect();
//     const containerWidth = containerRect.width;
//     const mouseX = event.clientX - containerRect.left;

//     if (mouseX <= 100) { // Adjust the value to set the hover region width from the left edge
//       prevBtn.style.visibility = 'visible';
//     } else if (mouseX >= containerWidth - 100) { // Adjust the value to set the hover region width from the right edge
//       nextBtn.style.visibility = 'visible';
//     } else {
//       prevBtn.style.visibility = 'hidden';
//       nextBtn.style.visibility = 'hidden';
//     }
//   });
// });





// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   if (message.action === "executePaginateScript") {
//     // Pagination script logic here

    
// });




document.addEventListener("DOMContentLoaded", () => {
  // const queryParams = new URLSearchParams(window.location.search);
  // const collectedData = decodeURIComponent(queryParams.get("data")).split("\n"); // Split the string into an array
  

  // Your pagination script logic here

  chrome.storage.local.get("collectedData", function(result) {
    const collectedData = result.collectedData.split("\n"); // Split the string into an array
    // Rest of your pagination script logic here

    
    const contentDiv = document.getElementById('content');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageDisplay = document.getElementById('pageDisplay');
    const container = document.querySelector('.container');
    const windowHeight = window.innerHeight;
    const containerHeight = windowHeight * 0.91;

    if (Array.isArray(collectedData)) {
      const collectedText = collectedData;

      let currentPage = 0;
      let totalPages = 0;
      let pages = [];

      prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
          currentPage--;
          showPage(currentPage);
        }
      });

      nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
          currentPage++;
          showPage(currentPage);
        }
      });

      function paginateTextContent(textArray) {
        let currentPageContent = [];
        let currentHeight = 0;

        textArray.forEach((text) => {
          const itemElement = document.createElement('div');
          itemElement.classList.add('injected-text');
          itemElement.textContent = text;

          currentPageContent.push(itemElement);

          contentDiv.appendChild(itemElement);
          const itemHeight = itemElement.offsetHeight;
          contentDiv.removeChild(itemElement);

          if (currentHeight + itemHeight > containerHeight && currentPageContent.length > 1) {
            pages.push(currentPageContent);
            currentPageContent = [itemElement];
            currentHeight = itemHeight;
          } else {
            currentHeight += itemHeight;
          }
        });

        if (currentPageContent.length > 0) {
          pages.push(currentPageContent);
        }

        totalPages = pages.length;
        showPage(currentPage);
      }

      function showPage(page) {
        const currentPageContent = pages[page];

        contentDiv.innerHTML = '';

        currentPageContent.forEach((itemElement) => {
          contentDiv.appendChild(itemElement);
        });

        prevBtn.disabled = page === 0;
        nextBtn.disabled = page === totalPages - 1;
        pageDisplay.textContent = `${page + 1}/${totalPages}`;
      }

      paginateTextContent(collectedText);
      container.style.height = `${containerHeight}px`;
    }

    container.addEventListener('mousemove', (event) => {
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const mouseX = event.clientX - containerRect.left;

      if (mouseX <= 100) {
        prevBtn.style.visibility = 'visible';
      } else if (mouseX >= containerWidth - 100) {
        nextBtn.style.visibility = 'visible';
      } else {
        prevBtn.style.visibility = 'hidden';
        nextBtn.style.visibility = 'hidden';
      }
    });

  });


});


