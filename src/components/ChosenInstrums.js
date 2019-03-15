import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInstrument } from "../store/actions/Instruments";



export class ChosenInstrums extends Component {
    deleteInstrument = (e) => {
        this.props.changeInstrument(e.target.id, `delete`);
    }


    render() {
        if (this.props.instruments) {
            const obj = JSON.parse(this.props.instruments);
            const instruments = obj.array;
            return (
                <div className="instrumetns">
                    {
                        instruments.map((inst, i) => {
                            return (
                                <div className="flex-instr" key={i}>
                                    <p>{inst}</p>
                                    <div className="delete" onClick={this.deleteInstrument} id={inst}></div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => ({
    instruments: state.patient.instruments
})

const mapDispatchToProps = dispatch => ({
    changeInstrument: (title, action) => dispatch(changeInstrument(title, action))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChosenInstrums)
