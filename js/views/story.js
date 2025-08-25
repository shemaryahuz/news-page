// functions to render the story page with news story that clicked

import { getArticles } from "../services/newsService.js";
import { addHeader } from "./home.js";

export async function renderStory(app, id) {
    console.log("rendering story...");

    const articles = await getArticles();
    const article = articles[Number(id)];
    addHeader(app).innerText = article.title;
}
