import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteInstum } from "../store/actions/Instruments";



export class ChosenInstrums extends Component {
    deleteInstrument = (e) => {
        this.props.deleteInstum(e.target.id);
    }


    render() {
        return (
            <div className="instrumetns">
                {
                    this.props.instruments.map((inst, i) => {
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
    }
}

const mapStateToProps = (state) => ({
    instruments: state.instruments
})

const mapDispatchToProps = dispatch => ({
    deleteInstum: (title) => dispatch(deleteInstum(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChosenInstrums)
