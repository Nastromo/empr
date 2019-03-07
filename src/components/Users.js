import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {


    render() {
        return (
            <div>
                Привет! Я юзерс!
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
