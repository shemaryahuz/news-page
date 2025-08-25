// functions to render the submit page with form to submit a new story

import { addHeader } from "./home.js";

export function renderSubmit(app) {
    console.log("rendering submit...");

    addHeader(app).innerText = "Submit new story";

}