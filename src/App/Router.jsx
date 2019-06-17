import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import PageOne from "../Routes/PageOne"
import PageTwo from "../Routes/PageTwo"

const Router = () => (
    <BrowserRouter>
        <Route component={PageOne} exact path="/"/>
        <Route component={PageTwo} path="/two"/>
    </BrowserRouter>
);

export default Router