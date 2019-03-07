import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Qc extends Component {

    render() {
        return (
            <div>
                Привет! Я КуСи!
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Qc)
