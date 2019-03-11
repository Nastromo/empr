import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import MyDatePicker from './MyDatePicker';



export class PapHistory extends Component {
    constructor(props) {
        super(props);
        this.previousPap = [`Not given`, `NILM`, `LSIL`, `ASC-US`, `HSIL`, `AGC`, `CA`, `AIS`, `Other`];
        this.specimenSource = [`Cervix`, `Cervix-Anterior`, `Cervix Left`, `Cervix Posterior`, `Cervix Right`, `Vaginal`, `Vaginal, Cervical`, `Cervical, Endocervical`, `Vaginal, Cervical, Endocervical, Genital`, `Vulva`, `Other`];
        this.specimenReceived = [`None`, `Conventional Smear`, `Thinprep Vial`, `Other`];
    }


    render() {
        return (
            <div className="padding15">
                <p className="field-title">PAP History</p>
                <div className="flex50">
                    <div className="max-width250">
                        <p className="field-title">Previous PAP Date</p>
                        <MyDatePicker />
                    </div>

                    <div className="max-width250">
                        <p className="field-title">Previous Pap Diagnosis</p>
                        <DropDown
                            option={this.props.previousPapOption}
                            status={this.props.previousPap}
                            menu={this.previousPap}
                            id="previousPap" />
                    </div>
                </div>
                <div className="flex50">
                    <div className="max-width250">
                        <p className="field-title">Specimen Source</p>
                        <DropDown
                            option={this.props.specimenSourceOption}
                            status={this.props.specimenSource}
                            menu={this.specimenSource}
                            id="specimenSource" />
                    </div>

                    <div className="max-width250">
                        <p className="field-title">Specimen Received</p>
                        <DropDown
                            option={this.props.specimenReceivedOption}
                            status={this.props.specimenReceived}
                            menu={this.specimenReceived}
                            id="specimenReceived" />
                    </div>
                </div>
                <div>
                    <p className="field-title">Other</p>
                    <textarea className="gross-other"
                        ref={el => this.otherGross = el}
                        placeholder="Enter other relevant grossing information here"
                    ></textarea>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    previousPap: state.dropDown.previousPap,
    specimenSource: state.dropDown.specimenSource,
    specimenReceived: state.dropDown.specimenReceived,
    previousPapOption: state.patientGYN.previousPap,
    specimenSourceOption: state.patientGYN.specimenSource,
    specimenReceivedOption: state.patientGYN.specimenReceived,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PapHistory)
