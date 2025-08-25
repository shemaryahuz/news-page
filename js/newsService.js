// handling with the news api server

import { NEWS_API_KEY } from "./config.js";

const API_KEY = NEWS_API_KEY;
const NEWS_URL = `https://newsapi.org/v2/everything?q=news&sortBy=popularity&apiKey=${API_KEY}`;

async function loadNews() {
    const response = await fetch(NEWS_URL);
    const news = await response.json();
    console.log(news);
    localStorage.setItem("news", JSON.stringify(news));
}

// loadNews();

export async function getArticles() {
    const newsStr = localStorage.getItem("news");
    const articlesArray = JSON.parse(newsStr)["articles"];
    console.log(articlesArray);
    return articlesArray;
}