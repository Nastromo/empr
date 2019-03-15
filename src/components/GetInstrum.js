import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { changeInstrument } from "../store/actions/Instruments";



export class GetInstrum extends Component {
    click = () => {
        if (this.props.instrument) this.props.changeInstrument(this.props.instrument, `add`);
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
    changeInstrument: (title, action) => dispatch(changeInstrument(title, action))
})

export default connect(mapStateToProps, mapDispatchToProps)(GetInstrum)
