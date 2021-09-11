// Create fake API response
const fakeAPIResponse = [
    {
        title: "Home Equity Line of Credit (HELOC) Card: What is It?",
        summary: "Are you looking to free up some cash? If so, you have probably thought about getting a second mortgage in..."
    },
    {
        title: "Home Equity Line of Credit (HELOC) Card: How it Works",
        summary: "Now that you understand what a HELOC Card is, let’s dive into how it works. This article also explains...",
    }
];

/**
 * a fake fetching API with promises. It imitates the Fetch API.
 * @param {string} url url (Is not actually used for fake fetch)
 * @returns promise of "fetching" raw data
 */
const fakeFetch = function(url) {
    // promise for fetching at the URL
    return new Promise((fetchResolve, fetchReject) => {
        // "fake" conversion of data to json
        const json = function() {
            // promise for turning the response into json
            return new Promise((dataResolve, dataReject) => {
                // provide the data in the promise resolve
                dataResolve(fakeAPIResponse);
            });
        }
        // provide the function to get the data in json format in the resolve
        fetchResolve({json});
    });
} 

/**
 * Creates an article with all of the provided details,
 * setting any important attributes such as classes.
 * @param {string} title Title of the article
 * @param {string} summary Summary for the article
 * @param {object} image Image details
 * @param {string} image.imageSrc Source of the image
 * @param {string} image.imageAlt Alternate text for the image
 * @returns HTMLElement to append to another node for articles
 */
const makeArticle = function(title, summary, {imageSrc, imageAlt}) {
    // create main article w/ attributes
    const article = document.createElement('article');
    article.setAttribute('class', 'education-article');

    // create image
    const image = document.createElement('img');
    image.setAttribute('class', 'article-image');
    image.setAttribute('src', imageSrc);
    image.setAttribute('alt', imageAlt);

    // create the content, which will contain the title and summary
    const content = document.createElement('div');
    content.setAttribute('class', 'article-content');

    // create title
    const titleElement = document.createElement('h2');
    titleElement.setAttribute('class', 'article-title');
    const titleTextNode = document.createTextNode(title);
    titleElement.append(titleTextNode);

    // create summary
    const summaryElement = document.createElement('p');
    summaryElement.setAttribute('class', 'article-summary');
    const summaryTextNode = document.createTextNode(summary);
    summaryElement.append(summaryTextNode);

    // start putting everything together
    content.append(titleElement);
    content.append(summaryElement);
    article.append(image);
    article.append(content);

    // return the article
    return article;
}

/**
 * Appends an article to the #articles element
 * @param {HTMLElement} article article to append
 */
const appendArticle = function(article) {
    document.getElementById('articles').append(article);
}

// When the window loads, load in the article data
window.onload = function() {
    fakeFetch('API URL goes here').then((response) => {
        return response.json(); // get the data
    })
    .then((data) => {
        // We will be retrieving the built in images. If the API
        // ... included image URLs, I would have used that instead.
        const imageSources = ['images/ArticleImage1.jpg', 'images/ArticleImage2.jpg'];
        const imageAlts = ['Two people looking at a laptop', 'A two-story house with a nice lawn'];
        // Go through each article
        data.forEach((element, index) => {
            const image = {
                imageSrc: imageSources[index],
                imageAlt: imageAlts[index],
            };
            appendArticle(makeArticle(element.title, element.summary, image))
        })
    });
}
