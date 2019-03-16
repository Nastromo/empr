import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { setType, setTitle, addNewInstrum } from '../store/actions/AddInstrum';




export class AddInstrumPanel extends Component {
    handleType = (e) => {
        this.props.setType(e.target.value);
    }

    handleTitle = (e) => {
        this.props.setTitle(e.target.value);
    }

    add = () => {
        this.props.addNewInstrum({
            type: this.props.type,
            title: this.props.title
        });
    }

    render() {
        return (
            <div className="add-instrum-panel">
                <div>
                    <input
                        className="simple-input"
                        ref={el => this.type = el}
                        value={this.props.type}
                        onChange={this.handleType}
                        placeholder="Category"
                        type="text" />
                </div>
                <div>
                    <input
                        className="simple-input"
                        ref={el => this.type = el}
                        value={this.props.title}
                        onChange={this.handleTitle}
                        placeholder="Unique name"
                        type="text" />
                </div>
                <div className="add-instrum-btn">
                    <SubmitButton text="Add" onClick={this.add} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    title: state.newInstrumTitle,
    type: state.newInstrumType
})

const mapDispatchToProps = dispatch => ({
    setType: (text) => dispatch(setType(text)),
    setTitle: (text) => dispatch(setTitle(text)),
    addNewInstrum: (instrum) => dispatch(addNewInstrum(instrum)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddInstrumPanel)
