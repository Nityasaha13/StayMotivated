const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const loaderElement = document.getElementById("loader");
const moreButton = document.getElementById("more");

// Fetch a new quote on every page load
window.addEventListener("load", fetchQuote);

// Fetch a new quote when the "More" button is clicked
moreButton.addEventListener("click", fetchQuote);

function fetchQuote() {
    // Show loader while fetching
    loaderElement.classList.remove("hidden");

    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quoteElement.textContent = `${data.content}`;
            authorElement.textContent = `by- ${data.author}`;
        })
        .catch(error => console.error("Error fetching :", error))
        .finally(() => {
            // Hide loader after fetching
            loaderElement.classList.add("hidden");
        });
}
