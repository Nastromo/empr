import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CyInfo extends Component {


    render() {
        return (
            <div className="flex-part">

                <div className="flex-side">
                    <p className="field-title">Info</p>
                    <p className="inst-text">{`Test Code:  ${this.props.testCode}`}</p>
                    <p className="inst-text">{`Test Description:  ${this.props.testDescription}`}</p>
                </div>

                <div className="flex-side">
                    <p className="field-title">No. of Slides:</p>
                    <input className="simple-input width100" type="number" />
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    testCode: "GYN",
    testDescription: "GYN CYTOLOGY",
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CyInfo)
