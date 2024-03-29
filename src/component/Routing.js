import React, {Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './home';
import Artist from './artist'

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/artist/:artistid" component={Artist}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;
