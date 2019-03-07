import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Instruments extends Component {


    render() {
        return (
            <div>
                Привет! Я Инструментс!
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Instruments)
