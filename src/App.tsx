import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
    return (
        <BrowserRouter basename={"/"}>
            <div className="app">
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
