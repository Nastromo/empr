import React, { Component } from 'react';
import { connect } from 'react-redux';

export class StainMaintenance extends Component {


    render() {
        return (
            <div>
                Привет! Я СтэйнМэйнтенс!
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StainMaintenance)
