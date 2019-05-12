import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import MyDatePicker from './MyDatePicker';
import { changeOther } from '../store/actions/Other';



export class PapHistory extends Component {
    constructor(props) {
        super(props);
        this.previousPap = [`Not given`, `NILM`, `LSIL`, `ASC-US`, `HSIL`, `AGC`, `CA`, `AIS`, `Other`];
        this.specimenSource = [`Cervix`, `Cervix-Anterior`, `Cervix Left`, `Cervix Posterior`, `Cervix Right`, `Vaginal`, `Vaginal, Cervical`, `Cervical, Endocervical`, `Vaginal, Cervical, Endocervical, Genital`, `Vulva`, `Other`];
        this.specimenReceived = [`None`, `Conventional Smear`, `Thinprep Vial`, `Other`];
    }

    handleChange = (e) => {
        this.props.changeOther(e.target.value);
    }

    render() {
        return (
            <div className="padding15">
                <p className="field-title">PAP History</p>
                <div className="flex50">
                    <div className="max-width300">
                        <p className="field-title">Previous PAP Date</p>
                        <MyDatePicker id="previousPapDate" date={this.props.patient.previousPapDate} />
                    </div>

                    <div className="max-width300">
                        <p className="field-title">Previous Pap Diagnosis</p>
                        <DropDown
                            option={this.props.previousPapOption}
                            status={this.props.previousPap}
                            menu={this.previousPap}
                            id="previousPap" />
                    </div>
                </div>
                <div className="flex50">
                    <div className="max-width300">
                        <p className="field-title">Specimen Source</p>
                        <DropDown
                            option={this.props.specimenSourceOption}
                            status={this.props.specimenSource}
                            menu={this.specimenSource}
                            id="specimenSource" />
                    </div>

                    <div className="max-width300">
                        <p className="field-title">Specimen Received</p>
                        <DropDown
                            option={this.props.specimenReceivedOption}
                            status={this.props.specimenReceived}
                            menu={this.specimenReceived}
                            id="specimenReceived" />
                    </div>
                </div>
                <div className="fle-com">
                    <div id="marg-rig" className="basis-gg">
                        <p className="field-title">Source Other</p>
                        <textarea
                            className="gross-other"
                            ref={el => this.otherGross = el}
                            placeholder="Enter other relevant grossing information here"
                            value={this.props.patient.other}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div className="basis-gg">
                        <p className="field-title">Received Other</p>
                        <textarea
                            className="gross-other"
                            ref={el => this.otherGross = el}
                            placeholder="Enter other relevant grossing information here"
                            value={this.props.patient.receivedOther}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    patient: state.patient,
    previousPap: state.dropDown.previousPap,
    specimenSource: state.dropDown.specimenSource,
    specimenReceived: state.dropDown.specimenReceived,
    previousPapOption: state.patient.previousPapDiagnosis,
    specimenSourceOption: state.patient.specimenSource,
    specimenReceivedOption: state.patient.specimenReceived,
})

const mapDispatchToProps = dispath => ({
    changeOther: (text) => dispath(changeOther(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(PapHistory)
