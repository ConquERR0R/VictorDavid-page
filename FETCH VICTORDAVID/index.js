const API_URL = 'https://dummyjson.com/quotes';
const quotesContainer = document.getElementById('quotesContainer');

async function fetchQuotes() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayQuotes(data.quotes);
    } catch (error) {
        console.error('Error fetching quotes:', error);
        quotesContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                Failed to load Quotes. Please try again later.
            </div>
        `;
    }
}

function createQuoteElement(quoteData) {
    const quote = document.createElement('div');
    quote.className = 'quote-card';

    const quoteText = document.createElement('p');
    quoteText.className = 'quote-text';
    quoteText.textContent = `"${quoteData.quote}"`;

    const author = document.createElement('p');
    author.className = 'quote-author';
    author.textContent = `— ${quoteData.author}`;

    quote.appendChild(quoteText);
    quote.appendChild(author);

    return quote;
}

function displayQuotes(quotes) {
    quotesContainer.innerHTML = '';
    quotes.forEach(quote => {
        const quoteElement = createQuoteElement(quote);
        quotesContainer.appendChild(quoteElement);
    });
}
