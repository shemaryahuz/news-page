// functions to get article details as HTML elements

export function getImage(article) {
    const image = document.createElement("img");
    image.src = article.urlToImage;
    return image;
}

export function getTitle(article) {
    const title = document.createElement("h3");
    title.innerText = article.title;
    return title;
}

export function getTime(article) {
    const time = document.createElement("p");
    const date = new Date(article.publishedAt);
    const niceDate = date.toLocaleString();
    time.innerText = niceDate;
    return time;
}

export function getAuthor(article) {
    const author = document.createElement("p");
    author.classList = "author";
    author.innerText = article.author;
    return author;
}

export function getDescription(article) {
    const description = document.createElement("p");
    description.classList = "description";
    description.innerText = article.description;
    return description;
}


export function getContent(article) {
    const content = document.createElement("p");
    content.classList = "content";
    content.innerText = article.content;
    return content;
}