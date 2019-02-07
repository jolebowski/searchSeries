
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Movies from "../../containers/Movies";
import MoviesOnly from "../../containers/MoviesOnly";

const Main = props =>(
    <Switch>
        <Route exact path="/" component={Movies}/>
        <Route path="/movies/:id" component ={MoviesOnly}/>
    </Switch>
);

export default Main;