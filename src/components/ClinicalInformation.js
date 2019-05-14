import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCells, setChrome, setZero } from '../store/actions/Cells';
import { setOption } from '../store/actions/DropDown';




export class ClinicalInformation extends Component {
    handleCell = (e) => {
        this.props.setCells(e.target.value);
        if (Number(e.target.value) < 25) {
            this.props.setOption({
                id: `interpretation`,
                option: `Unsatisfactory`,
            });
        } else {
            this.props.setOption({
                id: `interpretation`,
                option: ``,
            });
        }

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
                    <div>
                        <p id="fir-ng-t" className="left-text-ng">Total number of cells counted:</p>
                        <input
                            className="simple-input"
                            defaultValue={this.props.numberCells}
                            onChange={this.handleCell}
                            type="number" />
                    </div>
                    <div>
                        <p id="lastTextNg" className="left-text-ng">Number of cells showing gains for 2 or more chromosomes (3,7 or 17) in the same cell:</p>
                        <input
                            className="simple-input"
                            defaultValue={this.props.numberChroms}
                            onChange={this.handleChrome}
                            type="number" />
                    </div>
                    <div>
                        <p id="sec-ng-t" className="left-text-ng">Number of cells showing zero 9p21 signals:</p>
                        <input
                            className="simple-input"
                            defaultValue={this.props.numberZero}
                            onChange={this.handleZero}
                            type="number" />
                    </div>

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
    setZero: (text) => dispatch(setZero(text)),
    setOption: (obj) => dispatch(setOption(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClinicalInformation)
