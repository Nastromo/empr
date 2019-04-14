import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { changeComment, changeComment2 } from '../store/actions/ChangeComment';




export class StainSlides extends Component {
    constructor(props) {
        super(props);
        this.processor = [`T2000 #1`, `T2000 #2`];
        this.sliper = [`Manual Coverslipping`, `Sakura Tape Coverslipper`];
        this.goodBad = [`Good`, `Bad`];
        this.passFail = [`Pass`, `Fail`, `N/A`];
    }

    handleChange = (e) => {
        this.props.changeComment(e.target.value);
    }

    handleChange2 = (e) => {
        this.props.changeComment2(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="lex-drop">
                    <div>
                        <p>Processor</p>
                        <DropDown
                            option={this.props.processorOption}
                            status={this.props.processorStatus}
                            menu={this.processor}
                            id="processor" />
                    </div>

                    <div>
                        <p>Cover Slipper</p>
                        <DropDown
                            option={this.props.sliperOption}
                            status={this.props.sliperStatus}
                            menu={this.sliper}
                            id="sliper" />
                    </div>

                    <div>
                        <p>Nuclear</p>
                        <DropDown
                            option={this.props.nuclearOption}
                            status={this.props.nuclearStatus}
                            menu={this.goodBad}
                            id="nuclear" />
                    </div>

                    <div>
                        <p>Cytoplasmic</p>
                        <DropDown
                            option={this.props.cytopOption}
                            status={this.props.cytopStatus}
                            menu={this.goodBad}
                            id="cytop" />
                    </div>

                    <div>
                        <p>Prep Quality</p>
                        <DropDown
                            option={this.props.prepQualityOption}
                            status={this.props.prepQualityStatus}
                            menu={this.goodBad}
                            id="prepQuality" />
                    </div>

                    <div>
                        <p>Contamination</p>
                        <DropDown
                            option={this.props.contaminationOption}
                            status={this.props.contaminationStatus}
                            menu={this.passFail}
                            id="contamination" />
                    </div>

                    <div>
                        <p>QC Results</p>
                        <DropDown
                            option={this.props.qcResultsOption}
                            status={this.props.qcResultsStatus}
                            menu={this.passFail}
                            id="qcResults" />
                    </div>

                </div>
                <div>
                    <input className="sim-input" value={this.props.patient.slide1Comment || ``} onChange={this.handleChange} type="text" />
                </div>

                <div className="lex-drop">
                    <div>
                        <p>Processor</p>
                        <DropDown
                            option={this.props.processorOption2}
                            status={this.props.processorStatus2}
                            menu={this.processor}
                            id="processor2" />
                    </div>

                    <div>
                        <p>Cover Slipper</p>
                        <DropDown
                            option={this.props.sliperOption2}
                            status={this.props.sliperStatus2}
                            menu={this.sliper}
                            id="sliper2" />
                    </div>

                    <div>
                        <p>Nuclear</p>
                        <DropDown
                            option={this.props.nuclearOption2}
                            status={this.props.nuclearStatus2}
                            menu={this.goodBad}
                            id="nuclear2" />
                    </div>

                    <div>
                        <p>Cytoplasmic</p>
                        <DropDown
                            option={this.props.cytopOption2}
                            status={this.props.cytopStatus2}
                            menu={this.goodBad}
                            id="cytop2" />
                    </div>

                    <div>
                        <p>Prep Quality</p>
                        <DropDown
                            option={this.props.prepQualityOption2}
                            status={this.props.prepQualityStatus2}
                            menu={this.goodBad}
                            id="prepQuality2" />
                    </div>

                    <div>
                        <p>Contamination</p>
                        <DropDown
                            option={this.props.contaminationOption2}
                            status={this.props.contaminationStatus2}
                            menu={this.passFail}
                            id="contamination2" />
                    </div>

                    <div>
                        <p>QC Results</p>
                        <DropDown
                            option={this.props.qcResultsOption2}
                            status={this.props.qcResultsStatus2}
                            menu={this.passFail}
                            id="qcResults2" />
                    </div>

                </div>
                <div>
                    <input className="sim-input" value={this.props.patient.slide2Comment || ``} onChange={this.handleChange2} type="text" />
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    patient: state.patient,

    processorOption: state.patient.processorOption,
    processorStatus: state.dropDown.processorStatus,
    sliperOption: state.patient.sliperOption,
    sliperStatus: state.dropDown.sliperStatus,
    nuclearOption: state.patient.nuclearOption,
    nuclearStatus: state.dropDown.nuclearStatus,
    cytopOption: state.patient.cytopOption,
    cytopStatus: state.dropDown.cytopStatus,
    prepQualityOption: state.patient.prepQualityOption,
    prepQualityStatus: state.dropDown.prepQualityStatus,
    contaminationOption: state.patient.contaminationOption,
    contaminationStatus: state.dropDown.contaminationStatus,
    qcResultsOption: state.patient.qcResultsOption,
    qcResultsStatus: state.dropDown.qcResultsStatus,

    processorOption2: state.patient.processorOption2,
    processorStatus2: state.dropDown.processorStatus2,
    sliperOption2: state.patient.sliperOption2,
    sliperStatus2: state.dropDown.sliperStatus2,
    nuclearOption2: state.patient.nuclearOption2,
    nuclearStatus2: state.dropDown.nuclearStatus2,
    cytopOption2: state.patient.cytopOption2,
    cytopStatus2: state.dropDown.cytopStatus2,
    prepQualityOption2: state.patient.prepQualityOption2,
    prepQualityStatus2: state.dropDown.prepQualityStatus2,
    contaminationOption2: state.patient.contaminationOption2,
    contaminationStatus2: state.dropDown.contaminationStatus2,
    qcResultsOption2: state.patient.qcResultsOption2,
    qcResultsStatus2: state.dropDown.qcResultsStatus2,
})

const mapDispatchToProps = dispatch => ({
    changeComment: (text) => dispatch(changeComment(text)),
    changeComment2: (text) => dispatch(changeComment2(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(StainSlides)
