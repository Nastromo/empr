import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTab } from '../store/actions/GrossTabs';


export class GrossTabs extends Component {

    handleClick = (e) => {
        this.props.setTab(e.currentTarget.textContent);
    }

    render() {
        return (
            <div className="gross-tabs">
                <div
                    className={this.props.title === `Fluid` ? 'active-tab tab' : 'tab'}
                    onClick={this.handleClick}>
                    Fluid
                </div>
                <div
                    className={this.props.title === `Slide` ? 'active-tab tab' : 'tab'}
                    onClick={this.handleClick}>
                    Slide
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    title: state.activeGrossTab,
})

const mapDispatchToProps = dispatch => ({
    setTab: (index, title) => dispatch(setTab(index, title))
})

export default connect(mapStateToProps, mapDispatchToProps)(GrossTabs)
