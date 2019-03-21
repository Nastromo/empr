import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { changeOther } from '../store/actions/GrossComment';
import { changeMl } from '../store/actions/SpecMl';
import Description from './Description';



export class Fluid extends Component {
    constructor(props) {
        super(props);
        this.specimenSource = [`Select`, `Urine`, `Rectal`, `Anal`, `Anal/Rectal`, `Left Breast`, `Right Breast`, `Left Thyroid`, `Right Thyroid`, `Esophagus`, `Vaginal`, `Vulva`, `Abdominal`, `Thoracic`, `Spinal`, `Neck`, `Other`];
        this.received = [`Select`, `Specimen Cup`, `Specimen Tube`, `Specimen Jar`, `ThinPrep Vial`, `Other`];
        this.turbidity = [`Select`, `Clear`, `Cloudy`, `Dark`, `Hazy`, `Turbid`, `Other`];
        this.color = [`Select`, `Yellow`, `Light Yellow`, `Colorless`, `Amber`, `Straw`, `White`, `Red`, `Brown`, `Green`, `Other`];
        this.specType = [`Select`, `Fine Needle Aspirate`, `Fluid Aspirate`, `Fluid`, `Fluid with Brush tip`, `Brushing`, `Other`];
        this.fixative = [`Select`, `Alcohol`, `Spray Fixative`, `TP PreservCyt`, `TP CytoLyt`, `Unspecified`, `Other`];
        this.slideType = [`Select`, `ThinPrep`, `Conventional Smear`, `Other`];
    }

    handleChange = (e) => {
        this.props.changeOther(e.target.value);
    }

    handleMl = (e) => {
        this.props.changeMl(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="spec-drops">
                    <div>
                        <p className="field-title">Specimen Source</p>
                        <DropDown
                            option={this.props.sourceOption}
                            status={this.props.sourceStatus}
                            menu={this.specimenSource}
                            id="source" />
                    </div>
                    <div>
                        <p className="field-title">Received</p>
                        <DropDown
                            option={this.props.receivedOption}
                            status={this.props.receivedStatus}
                            menu={this.received}
                            id="receivedSource" />
                    </div>
                    <div>
                        <p className="field-title">Quantity(mL)</p>
                        <input className="simple-input width100" value={this.props.ml || ``} onChange={this.handleMl} type="number"/>
                    </div>
                    <div>
                        <p className="field-title">Turbidity</p>
                        <DropDown
                            option={this.props.turbidityOption}
                            status={this.props.turbidityStatus}
                            menu={this.turbidity}
                            id="turbidity" />
                    </div>
                </div>
                <div className="spec-drops">
                    <div>
                        <p className="field-title">Color</p>
                        <DropDown
                            option={this.props.colorOption}
                            status={this.props.colorStatus}
                            menu={this.color}
                            id="color" />
                    </div>
                    <div>
                        <p className="field-title">Specimen Type</p>
                        <DropDown
                            option={this.props.specTypeOption}
                            status={this.props.specTypeStatus}
                            menu={this.specType}
                            id="specType" />
                    </div>
                    <div>
                        <p className="field-title">Fixative</p>
                        <DropDown
                            option={this.props.fixativeOption}
                            status={this.props.fixativeStatus}
                            menu={this.fixative}
                            id="fixative" />
                    </div>
                    <div>
                        <p className="field-title">Prepared Slide Type</p>
                        <DropDown
                            option={this.props.slideTypeOption}
                            status={this.props.slideTypeStatus}
                            menu={this.slideType}
                            id="slideType" />
                    </div>
                </div>
                <Description />
                <div className="description">
                    <p className="field-title">Other</p>
                    <textarea
                        className="gross-other"
                        ref={el => this.other = el}
                        value={this.props.grossOther}
                        onChange={this.handleChange}
                    ></textarea>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ml: state.patient.ml,
    grossOther: state.patient.grossOther,
    sourceOption: state.patient.source,
    sourceStatus: state.dropDown.source,
    receivedOption: state.patient.receivedSource,
    receivedStatus: state.dropDown.receivedSource,
    turbidityOption: state.patient.turbidity,
    turbidityStatus: state.dropDown.turbidity,
    colorOption: state.patient.color,
    colorStatus: state.dropDown.color,
    specTypeOption: state.patient.specType,
    specTypeStatus: state.dropDown.specType,
    fixativeOption: state.patient.fixative,
    fixativeStatus: state.dropDown.fixative,
    slideTypeOption: state.patient.slideType,
    slideTypeStatus: state.dropDown.slideType,
})

const mapDispatchToProps = dispatch => ({
    changeOther: (text) => dispatch(changeOther(text)),
    changeMl: (ml) => dispatch(changeMl(ml)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Fluid)
