// functions to render the story page with news story that clicked

import { getArticles } from "../services/newsService.js";

export async function renderStory(app, id) {
    console.log("rendering story...");


    const storyContainer = document.createElement("section");
    storyContainer.classList = "storyContainer";
    app.appendChild(storyContainer);

    const articles = await getArticles();
    const article = articles[Number(id)];
    console.log(article);
    


}
