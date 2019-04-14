import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';



export class StainsBtns extends Component {


    render() {
        return (
            <div className="right-bind">
                <div className="main-btn-height fail">
                    <SubmitButton status={this.props.saveStatus} text="Fail" onClick={this.save} />
                </div>
                <div className="main-btn-height save">
                    <SubmitButton status={this.props.saveStatus} text="Save" onClick={this.save} />
                </div>
                <div className="main-btn-height submit">
                    <SubmitButton status={this.props.submitStatus} text="Submit" onClick={this.submit} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StainsBtns)
