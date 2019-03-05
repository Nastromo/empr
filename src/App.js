import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';


export class App extends Component {


    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

