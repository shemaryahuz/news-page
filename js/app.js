// main script for manipulate the view on the page

import { renderHome, renderStory, renderSubmit } from "./views.js";

function router() {

    const hash = location.hash;
    console.log(`Location: ${hash || "#/home"}`);

    const app = document.getElementById("app");
    app.innerHTML = "";
    
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