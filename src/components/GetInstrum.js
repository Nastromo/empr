import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { addInstrument } from "../store/actions/Instruments";



export class GetInstrum extends Component {
    click = () => {
        if (this.props.instrument) this.props.addInstrument(this.props.instrument);
    }

    render() {
        return (
            <div className="instr-btn">
                <SubmitButton onClick={this.click} status={this.props.status} text="Add" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    status: state.instrumSpinner,
    instrument: state.instrumOption,
})

const mapDispatchToProps = dispatch => ({
    addInstrument: (title) => dispatch(addInstrument(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(GetInstrum)
