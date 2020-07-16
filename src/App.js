import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {


    render() {
        return (
            <Router>

                <div className="App">
                    <Route exact path='/' component={Home}/>
                </div>

            </Router>
        )
    }
}





export default App;

//        <Route exact path='/site' component={projectscontainer}/>