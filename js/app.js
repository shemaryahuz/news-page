// main script for manipulate the view on the page

import { renderHome } from "./views/home.js";
import { renderStory } from "./views/story.js";
import { renderSubmit } from "./views/submit.js";

function getNav() {
    const nav = document.createElement("nav");

    const homeLink = document.createElement("a");
    homeLink.classList = "navLink";
    homeLink.href = "#/home";
    homeLink.innerText = "Home"

    const submitLink = document.createElement("a");
    submitLink.classList = "navLink";
    submitLink.href = "#/submit";
    submitLink.innerText = "Submit";

    nav.appendChild(homeLink);
    nav.appendChild(submitLink);

    return nav;
}

async function router() {

    const hash = location.hash;
    console.log(`Location: ${hash || "#/home"}`);

    const app = document.getElementById("app");
    app.innerHTML = "";
    app.appendChild(getNav());

    if (hash === "#/home") {
        await renderHome(app);
    }
    else if (hash === "#/submit") {
        renderSubmit(app);
    }
    else if (hash.startsWith("#/story")) {
        const id = hash.split("/")[2]; // get access to story's id like '#/story/1' etc.
        await renderStory(app, id);
    }
    else {
        await renderHome(app);
    }
}

async function main() {
    await router();

    window.addEventListener("hashchange", router);
}

main();