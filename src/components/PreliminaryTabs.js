import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTab } from '../store/actions/PreTabs';



export class PreliminaryTabs extends Component {

    handleClick = (e) => {
        this.props.setTab(e.currentTarget.textContent);
    }

    render() {
        return (
            <div className="gross-tabs">
                <div
                    className={this.props.title === `Specimen Adequacy` ? 'active-tab tab' : 'tab'}
                    onClick={this.handleClick}>
                    Specimen Adequacy
                </div>
                <div
                    className={this.props.title === `Diagnosis` ? 'active-tab tab' : 'tab'}
                    onClick={this.handleClick}>
                    Diagnosis
                </div>
                <div
                    className={this.props.title === `Comments` ? 'active-tab tab' : 'tab'}
                    onClick={this.handleClick}>
                    Comments
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    title: state.activePreTab,
})

const mapDispatchToProps = dispatch => ({
    setTab: (index, title) => dispatch(setTab(index, title))
})

export default connect(mapStateToProps, mapDispatchToProps)(PreliminaryTabs)
