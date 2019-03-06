import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PrivateRoute extends Component {


    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
