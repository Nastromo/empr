import React, { Component } from 'react';
import { connect } from 'react-redux';

export class MyDatePicker extends Component {


    render() {
        return (
            <div className="date-picker">1</div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MyDatePicker)
