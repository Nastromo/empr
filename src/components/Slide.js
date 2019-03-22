import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import SubmitButton from './SubmitButton';
import { changeSlideList } from '../store/actions/SlideList';



export class Slide extends Component {
    constructor(props) {
        super(props);
        this.source = [`Select`, `Urine`, `Rectal`, `Anal`, `Anal/Rectal`, `Left Breast`, `Right Breast`, `Left Thyroid`, `Right Thyroid`, `Esophagus`, `Vaginal`, `Vulva`, `Abdominal`, `Thoracic`, `Spinal`, `Neck`, `Other`,];
        this.stain = [`Select`, `Unstained`, `ThinPrep Stain`, `Pap Stain`, `Diff-Quick Stain`, `GMS stained`, `Other`];
        this.processed = [`Select`, `ThinPrep Stain`, `Pap Stain`, `Diff-Quick Stain`, `GMS stained`, `Other`];
    }

    addStain = (e) => {
        const listStr = this.props.list || `[]`;
        let list = JSON.parse(listStr);
        list.push({
            slideSource: this.props.slideSource,
            slideStain: this.props.slideStain,
            slideProcessed: this.props.slideProcessed
        });
        this.props.changeSlideList(JSON.stringify(list));
    }

    deleteStain = (e) => {
        let list = JSON.parse(this.props.list);
        list.splice(Number(e.target.id), 1);
        this.props.changeSlideList(JSON.stringify(list));
    }

    render() {
        const listStr = this.props.list || `[]`;
        const list = JSON.parse(listStr);
        return (
            <div>
                <div className="columns-source">
                    {
                        list.map((row, i) => {
                            return (
                                <div key={i} className="flex-instr">
                                    <p>{`Received [1] ${row.slideSource} specimen as ${row.slideStain} slide. Submitted for evaluation`}</p>
                                    <div className="delete" onClick={this.deleteStain} id={i}></div>
                                </div>
                            )
                        })
                    }
                    <div className="drop-line">
                        <div className="drop-slide">
                            <DropDown
                                option={this.props.slideSource}
                                status={this.props.sourceStatus}
                                menu={this.source}
                                id="slideSource" />
                        </div>
                        <div className="drop-slide">
                            <DropDown
                                option={this.props.slideStain}
                                status={this.props.stainStatus}
                                menu={this.stain}
                                id="slideStain" />
                        </div>
                        <div className="drop-slide">
                            <DropDown
                                option={this.props.slideProcessed}
                                status={this.props.processedStatus}
                                menu={this.processed}
                                id="slideProcessed" />
                        </div>
                        <div className="drop-slide">
                            <div className="add-stain"><SubmitButton text="Add received slide" onClick={this.addStain} /></div>
                        </div>
                    </div>
                </div>

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
    list: state.patient.slides,
    sourceStatus: state.dropDown.slideSource,
    stainStatus: state.dropDown.slideStain,
    processedStatus: state.dropDown.slideProcessed,
    slideSource: state.patient.slideSource,
    slideStain: state.patient.slideStain,
    slideProcessed: state.patient.slideProcessed
})

const mapDispatchToProps = dispatch => ({
    changeSlideList: (obj) => dispatch(changeSlideList(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slide)
