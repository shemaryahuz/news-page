// functions to render the app views

export function renderHome(app) {
    console.log("rendering home...");
    const header = document.createElement("h1");
    app.appendChild(header);
    header.innerText = "Home";
}

export function renderStory(app) {
    console.log("rendering story...");
    const header = document.createElement("h1");
    app.appendChild(header);
    header.innerText = "Story";
}

export function renderSubmit(app) {
    console.log("rendering submit...");
    const header = document.createElement("h1");
    app.appendChild(header);
    header.innerText = "Submit";
}