import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Pending from './components/Pending';
import Notification from './components/Notification';


export class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    <Notification/>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/pending" component={Pending} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

