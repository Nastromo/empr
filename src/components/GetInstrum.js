import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { changeInstrument } from '../store/actions/Instruments';
import { showNotification } from '../store/actions/Notification';



export class GetInstrum extends Component {
    click = () => {
        if (this.props.instrumFirst && this.props.instrumSecond) {
            this.props.showNotification(`You can't chose more than 2 instruments`, `notification-show`)
        } else if (this.props.instrumFirst) {
            if (this.props.instrument) this.props.changeInstrument(this.props.access, this.props.instrument, `add`, 2);
        } else {
            if (this.props.instrument) this.props.changeInstrument(this.props.access, this.props.instrument, `add`, 1);
        }
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
    access: state.patient.access,
    instrumFirst: state.patient.instrumFirst,
    instrumSecond: state.patient.instrumSecond,
    status: state.instrumSpinner,
    instrument: state.instrumOption,
})

const mapDispatchToProps = dispatch => ({
    changeInstrument: (access, title, action, i) => dispatch(changeInstrument(access, title, action, i)),
    showNotification: (text, css) => dispatch(showNotification(text, css))
})

export default connect(mapStateToProps, mapDispatchToProps)(GetInstrum)
