import React, { Component } from 'react';
import { connect } from 'react-redux';

export class History extends Component {

    render() {
        return (
            <div>
                Привет! Я Хистори!
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(History)
