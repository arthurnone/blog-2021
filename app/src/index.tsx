import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"

import "github-markdown-css/github-markdown.css"
import "@/index.css"
import "@/i18n"
import Main from "@/views/Main"

ReactDOM.render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
