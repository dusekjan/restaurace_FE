import "./css/index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import { store } from "./store";
import { UserProvider } from "./context/user"
import { GoogleOAuthProvider } from '@react-oauth/google';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <GoogleOAuthProvider clientId="266707545030-0gbhh4c061lum5goqboj4jti6ipm20l8.apps.googleusercontent.com">
        <Provider store={store}>
            <UserProvider>
                <App />
            </UserProvider>
        </Provider>
    </GoogleOAuthProvider>
);
