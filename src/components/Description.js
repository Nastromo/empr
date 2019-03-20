import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Description extends Component {

    render() {
        return (
            <div className="description">
                <p className="field-title">Description</p>
                <textarea
                    className="description yell"
                    ref={el => this.description = el}
                    value={this.props.description}
                    disabled={true}
                ></textarea>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    description: state.patient.description,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Description)
