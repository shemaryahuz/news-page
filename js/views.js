// functions to render the app views

export function renderHome(app) {
    console.log("rendering home...");

    const header = document.createElement("h1");
    app.appendChild(header);
    header.innerText = "News Site";
}

export function renderStory(app, id) {
    console.log("rendering story...");
    const header = document.createElement("h1");
    app.appendChild(header);
    header.innerText = `Story ${id}`;
}

export function renderSubmit(app) {
    console.log("rendering submit...");
    const header = document.createElement("h1");
    app.appendChild(header);
    header.innerText = "Submit";
}