const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

// Fetch a new quote on every page load
window.addEventListener("load", fetchQuote);

function fetchQuote() {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      quoteElement.textContent = `${data.content}`;
      authorElement.textContent = `by- ${data.author}`;
    })
    .catch(error => console.error("Error fetching :", error));
}
