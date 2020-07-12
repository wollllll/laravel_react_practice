import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './views/common/NavBar';
import UserIndex from './views/users';
import Show from './views/users/Show';
import TopIndex from './views/tops';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Route exact path="/" component={TopIndex}/>
                <Route exact path="/user" component={UserIndex}/>
                <Route path="/user/:id" component={Show} />
            </div>
        </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
