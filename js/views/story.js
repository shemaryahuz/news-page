// functions to render the story page with news story that clicked

import { getArticles } from "../services/newsService.js";
import { getTitle, getImage, getAuthor, getTime, getDescription, getContent } from "../services/articleService.js";

export async function renderStory(app, id) {
    console.log("rendering story...");


    const storyContainer = document.createElement("section");
    storyContainer.classList = "storyContainer";
    app.appendChild(storyContainer);

    const articles = await getArticles();
    const article = articles[Number(id) - 1];
    console.log(article);

    const title = getTitle(article);
    storyContainer.appendChild(title);

    const description = getDescription(article);
    storyContainer.appendChild(description);

    const image = getImage(article);
    storyContainer.appendChild(image);

    const content = getContent(article);
    storyContainer.appendChild(content);

    const author = getAuthor(article);
    storyContainer.appendChild(author);

    const time = getTime(article);
    storyContainer.appendChild(time);
}
