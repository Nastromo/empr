import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import CheckBox from './CheckBox';
import MyDatePicker from './MyDatePicker';



export class Grossing extends Component {
    constructor(props) {
        super(props);
        this.patientHistory = [`Not given`, `LMP`, `Pregnant`, `Post Partum`, `Oral Contraceptives`, `Postmenopausal`, `TAH`, `Partial TAH`, `Supracervical Hysterectomy`];
    }

    transform = () => {
        if (this.props.isCollapsed) this.props.collapsePatient(false);
        else this.props.collapsePatient(true);
    }

    render() {
        return (
            <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                <div onClick={this.transform} className="section-title">Grossing</div>
                <div className="flex-vertical-start">
                    <div className="padding15">
                        <p className="field-title">Patient History</p>
                        <div className="flex50">

                            <div className="max-width250">
                                <DropDown menu={this.patientHistory} id="patientHistory" />
                            </div>

                            <div className="max-width250">
                                <MyDatePicker />
                            </div>

                        </div>
                        <CheckBox title={`Routine Screen`} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isCollapsed: state.grossingIsCollapsed,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Grossing)
