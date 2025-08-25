// main script for manipulate the view on the page

import { renderHome, renderStory, renderSubmit } from "./views.js";

function getNav() {
    const nav = document.createElement("nav");

    const homeLink = document.createElement("a");
    homeLink.href = "#/home";
    homeLink.innerText = "Home"

    const submitLink = document.createElement("a");
    submitLink.href = "#/submit";
    submitLink.innerText = "Submit";

    nav.appendChild(homeLink);
    nav.appendChild(submitLink);

    return nav;
}

function router() {

    const hash = location.hash;
    console.log(`Location: ${hash || "#/home"}`);

    const app = document.getElementById("app");
    app.innerHTML = "";
    app.appendChild(getNav());
    
    if (hash === "#/home") {
        renderHome(app);
    }
    else if (hash === "#/submit") {
        renderSubmit(app);
    }
    else if (hash.startsWith("#/story")) {
        const id = hash.split("/")[2]; // get access to story's id like '#/story/1' etc.
        renderStory(app, id);
    }
    else {
        renderHome(app);
    }
}

router();

window.addEventListener("hashchange", router);