import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collapseInfo } from '../store/actions/Collapse';
import CyInfo from './CyInfo';
import InstrumentsPanel from './InstrumentsPanel';
import CommentsPanel from './CommentsPanel';
import { showHist } from '../store/actions/ShowHist';




export class CytologyInformation extends Component {

    transform = () => {
        if (this.props.isCollapsed) this.props.collapseInfo(false);
        else this.props.collapseInfo(true);
    }

    showHist = () => {
        this.props.showHist(true);
    }

    render() {
        if (window.location.href.includes(`/account/pending`)) {
            return (
                <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                    <div onClick={this.transform} className="section-title">Slide Preparation</div>
    
                    <CyInfo />
                    <InstrumentsPanel />
                    <CommentsPanel />
                </div>
            )
        } else {
            return (
                <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                    <div onClick={this.transform} className="section-title">Slide Preparation</div>
                    <div className="history padd">
                        <div onClick={this.showHist}>Histology cases</div>
                    </div>
    
                    <CyInfo />
                    <InstrumentsPanel />
                    <CommentsPanel />
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    isCollapsed: state.infoIsCollapsed,
    index: state.activeAnalysis,
})

const mapDispatchToProps = (dispatch) => ({
    collapseInfo: (bool) => dispatch(collapseInfo(bool)),
    showHist: (bool) => dispatch(showHist(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(CytologyInformation)
