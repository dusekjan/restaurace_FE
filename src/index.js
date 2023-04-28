import "./css/index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <App />
);

/*
* Poznámky:
* 1. pokud se nepoužívá "dangerouslySetInnerHTML":
    * By default, React DOM escapes any values embedded in JSX before rendering them.
    * Thus it ensures that you can never inject anything that’s not explicitly written in your application.
    * Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
    * https://legacy.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks
*
* 2.
    * Normally, the browser would render the HTML and, depending on the action,
    * automatically submit the data of the form based on each element's name attribute.
    * Although this default behavior still works in React.js,
    * it is highly advised to programmatically submit a form by supplying
    * your own custom controls on how data is processed by a component.
    * https://www.pluralsight.com/guides/form-submission-in-reactjs
*
* */



