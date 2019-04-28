import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { showSlidePopup } from '../store/actions/SlidePopup';




export class AdditionalSlide extends Component {
    submit = () => {
        this.props.showSlidePopup(true);
    }

    render() {
        return (
            <div className="blue-add submit">
                <SubmitButton status={this.props.submitStatus} text="Additional slide" onClick={this.submit} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    showSlidePopup: (bool) => dispatch(showSlidePopup(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalSlide)
