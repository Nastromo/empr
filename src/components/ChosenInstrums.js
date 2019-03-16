import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInstrument } from "../store/actions/Instruments";



export class ChosenInstrums extends Component {
    deleteFirst = (e) => {
        this.props.changeInstrument(e.target.id, `delete`, 1);
    }

    deleteSecond = (e) => {
        this.props.changeInstrument(e.target.id, `delete`, 2);
    }


    render() {
        if (this.props.instrumFirst && this.props.instrumSecond) {
            return (
                <div className="instrumetns">

                    <div className="flex-instr">
                        <p>{this.props.instrumFirst}</p>
                        <div className="delete" onClick={this.deleteFirst} id={this.props.instrumFirst}></div>
                    </div>

                    <div className="flex-instr">
                        <p>{this.props.instrumSecond}</p>
                        <div className="delete" onClick={this.deleteSecond} id={this.props.instrumSecond}></div>
                    </div>

                </div>
            )
        } else if (this.props.instrumFirst) {
            return (
                <div className="instrumetns">

                    <div className="flex-instr">
                        <p>{this.props.instrumFirst}</p>
                        <div className="delete" onClick={this.deleteFirst} id={this.props.instrumFirst}></div>
                    </div>

                </div>
            )
        } else if (this.props.instrumSecond) {
            return (
                <div className="instrumetns">

                    <div className="flex-instr">
                        <p>{this.props.instrumSecond}</p>
                        <div className="delete" onClick={this.deleteSecond} id={this.props.instrumSecond}></div>
                    </div>

                </div>
            )
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => ({
    access: state.patient.access,
    instrumFirst: state.patient.instrumFirst,
    instrumSecond: state.patient.instrumSecond
})

const mapDispatchToProps = dispatch => ({
    changeInstrument: (title, action, i) => dispatch(changeInstrument(title, action, i))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChosenInstrums)
