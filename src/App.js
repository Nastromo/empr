import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Notification from './components/Notification';
// import PopUpLimit from './components/PopUpLimit';



export class App extends Component {
    // <PopUpLimit isShown={this.props.popupStatus} />
    render() { 
        return (
            <Router>
                <div className="App">
                    
                    <Notification />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/account" component={PrivateRoute} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    popupStatus: state.popupStatus
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

