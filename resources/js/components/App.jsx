import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './views/common/NavBar';
import IndexUser from './views/users';
import Show from './views/users/Show';
import IndexTop from './views/tops';

const App = () => {
    return (
        <Router>
            <div className="container">
                <NavBar/>
                <Route exact path="/" component={IndexTop}/>
                <Route exact path="/users" component={IndexUser}/>
                <Route path="/users/:id" component={Show} />
            </div>
        </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
