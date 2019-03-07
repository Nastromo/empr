import React, { Component } from 'react';
import { connect } from 'react-redux';

export class StainQc extends Component {


    render() {
        return (
            <div>
                Привет! Я Стэйн КуСи!
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StainQc)
