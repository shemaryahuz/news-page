// functions to render the home page with news feed

import { getArticles } from "../services/newsService.js";

export function addHeader(app) {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    header.appendChild(h1);
    app.appendChild(header);
    return h1;
}

function getCard(article, id) {

    const card = document.createElement("article");
    card.classList = "news-card";
    card.id = id;
    
    const img = document.createElement("img");
    img.src = article.urlToImage;
    card.appendChild(img);

    const title = document.createElement("h3");
    title.innerText = article.title;
    card.appendChild(title);

    const time = document.createElement("p");
    const date = new Date(article.publishedAt);
    const niceDate = date.toLocaleString();
    time.innerText = niceDate;
    card.appendChild(time);

    const author = document.createElement("p");
    author.classList = "author";
    author.innerText = article.author;
    card.appendChild(author);

    const description = document.createElement("p");
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

    feedContainer.addEventListener("click", (event) => {
        console.log(event.target.id);
        const id = event.target.id;
        location.hash = `#/story/${id}`;
    });

}