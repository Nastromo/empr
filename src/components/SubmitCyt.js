import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';



export class SubmitCyt extends Component {


    render() {
        return (
            <div className="right-bind">
                <div className="main-btn-height save">
                    <SubmitButton status={this.props.status} text="Save" />
                </div>
                <div className="main-btn-height submit">
                    <SubmitButton status={this.props.status} text="Submit" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitCyt)
