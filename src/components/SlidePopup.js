import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSlidePopup, request } from '../store/actions/SlidePopup';
import DropDown from './DropDown';
import SubmitButton from './SubmitButton';



export class PopupHistory extends Component {
    constructor(props) {
        super(props);
        this.addSlide = [`Pop Slide`, `Cell Block`];
    }

    handleShadowClick = (e) => {
        if (e.target.id === `shadow`) {
            this.props.showSlidePopup(false);
        }
    }

    submit = () => {
        this.props.request(this.props.patient);
    }

    render() {
        return (
            <div id="shadow" onClick={this.handleShadowClick} className={this.props.isShwon ? "fixed-hist-shadow" : "fixed-hist-shadow-hidden"}>
                <div className="popup-history">
                    <h2>Request additional slide</h2>
                    <DropDown
                        option={this.props.addSlideOption}
                        status={this.props.addSlideStatus}
                        menu={this.addSlide}
                        id="addSlide" />
                    <div className="blue-add padd-up">
                        <SubmitButton text="Request" onClick={this.submit} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    patient: state.patient,
    isShwon: state.slidePopup,
    addSlideOption: state.patient.addSlide,
    addSlideStatus: state.dropDown.addSlide
})

const mapDispatchToProps = (dispatch) => ({
    showSlidePopup: (bool) => dispatch(showSlidePopup(bool)),
    request: (bool) => dispatch(request(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupHistory)
