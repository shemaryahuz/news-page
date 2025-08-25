// functions to render the app views

import { getArticles } from "./newsService.js";

function addHeader(app) {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    header.appendChild(h1);
    app.appendChild(header);
    return h1;
}

function getCard(article, id) {

    const card = document.createElement("article");
    card.classList = "card";
    card.id = id;
    
    const img = document.createElement("img");
    img.src = article.urlToImage;
    card.appendChild(img);

    const title = document.createElement("section");
    title.innerText = article.title;
    card.appendChild(title);

    const time = document.createElement("section");
    const date = new Date(article.publishedAt);
    const niceDate = date.toLocaleString();
    time.innerText = niceDate;
    card.appendChild(time);

    const author = document.createElement("section");
    author.classList = "author";
    author.innerText = article.author;
    card.appendChild(author);

    const description = document.createElement("section");
    description.classList = "description";
    description.innerText = article.description;
    card.appendChild(description);

    return card;
}

function addNewsCards(feedContainer, articles) {
    for (let i = 0; i < articles.length; i++) {
        const card = getCard(articles[i], i);
        feedContainer.appendChild(card);
    }
}

export async function renderHome(app) {
    console.log("rendering home...");

    addHeader(app).innerText = "News Feed";

    const feedContainer = document.createElement("section");
    feedContainer.classList = "feedContainer";
    app.appendChild(feedContainer);

    const articles = await getArticles();
    addNewsCards(feedContainer, articles);

}

export function renderStory(app, id) {
    console.log("rendering story...");

    addHeader(app).innerText = `Story ${id}`;
}

export function renderSubmit(app) {
    console.log("rendering submit...");

    addHeader(app).innerText = "Submit new story";

}