// main script for manipulate the view on the page

import { renderHome, renderStory, renderSubmit } from "./views.js";

function router() {

    const hash = location.hash;
    console.log(`Location: ${hash}`);

    const app = document.getElementById("app");
    app.innerHTML = "";
    
    if (hash === "#/home") {
        renderHome(app);
    }
    else if (hash === "#/submit") {
        renderSubmit(app);
    }
    else if (hash === "#/story") {
        renderStory(app);
    }
    else {
        renderHome(app);
    }
}

router();

window.addEventListener("hashchange", router);