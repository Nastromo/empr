import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCells, setChrome, setZero } from '../store/actions/Cells';




export class ClinicalInformation extends Component {
    handleCell = (e) => {
        this.props.setCells(e.target.value);
    }

    handleChrome = (e) => {
        this.props.setChrome(e.target.value);
    }

    handleZero = (e) => {
        this.props.setZero(e.target.value);
    }

    render() {
        return (
            <div>
                <p className="field-title marg-top-50">Clinical Information</p>
                <textarea
                    className="gross-other"
                    value={this.props.comment}
                    onChange={this.handleChange}
                ></textarea>

                <div className="felx-input-ng">
                    <p className="left-text-ng">Total number of cells counted:</p>
                    <input
                        className="simple-input"
                        value={this.props.numberCells}
                        onChange={this.handleCell}
                        type="number" />
                </div>

                <div className="felx-input-ng">
                    <p id="lastTextNg" className="left-text-ng">Number of cells showing gains for 2 or more chromosomes (3,7 or 17) in the same cell:</p>
                    <input
                        className="simple-input"
                        value={this.props.numberChroms}
                        onChange={this.handleChrome}
                        type="number" />
                </div>

                <div className="felx-input-ng">
                    <p className="left-text-ng">Number of cells showing zero 9p21 signals:</p>
                    <input
                        className="simple-input"
                        value={this.props.numberZero}
                        onChange={this.handleZero}
                        type="number" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    numberCells: state.patient.numberCells,
    numberChroms: state.patient.numberChroms,
    numberZero: state.patient.numberZero
})

const mapDispatchToProps = dispatch => ({
    setCells: (text) => dispatch(setCells(text)),
    setChrome: (text) => dispatch(setChrome(text)),
    setZero: (text) => dispatch(setZero(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClinicalInformation)
