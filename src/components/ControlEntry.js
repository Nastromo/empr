import React, { Component } from 'react';
import { connect } from 'react-redux';
import BatchEntry from './BatchEntry';
import BatchSlides from './BatchSlides';




export class ControlEntry extends Component {


    render() {
        return (
            <div className="specimen-processing">
                <div className="top-section-title">CONTROL ENTRY</div>
                <BatchEntry />
                <BatchSlides />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ControlEntry)
