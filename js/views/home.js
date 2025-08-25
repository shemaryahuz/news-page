// functions to render the home page with news feed

import { getArticles } from "../services/newsService.js";
import { getTitle, getImage, getAuthor, getTime } from "../services/articleService.js";

function getCard() {
    const card = document.createElement("article");
    card.classList = "news-card";
    return card;
}


function addNewsCards(feedContainer, articles) {

    articles.forEach((article, index) => {

        const card = getCard();
        card.id = index + 1;
        feedContainer.appendChild(card);

        const title = getTitle(article);
        card.appendChild(title);

        const image = getImage(article);
        card.appendChild(image);

        const author = getAuthor(article);
        card.appendChild(author);

        const time = getTime(article);
        card.appendChild(time);
    });
}

export async function renderHome(app) {
    console.log("rendering home...");

    // add header with page heading
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.innerText = "News Feed"
    header.appendChild(h1);
    app.appendChild(header);

    // add container for news cards
    const feedContainer = document.createElement("section");
    feedContainer.classList = "feedContainer";
    app.appendChild(feedContainer);

    // get articles and add to cards
    const articles = await getArticles();
    addNewsCards(feedContainer, articles);

    // listen to click events on cards
    feedContainer.addEventListener("click", (event) => {
        const id = event.target.closest(".news-card").id; // access to the id of the card that clicked
        location.hash = `#/story/${id}`;
    });

}