const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

quote

// New Quotes

function newQuote() {
    loading();
    // Pick a random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
    // Check if author field is empty 
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    }
    // Check the quote length for styling
    if (quoteText.length > 50) {
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }
    complete();
}

// Get quotes from API
async function getQuotes() {
    loading();
    const api = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(api);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch error
    }
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();