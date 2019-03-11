import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collapseInfo } from '../store/actions/Collapse';
import CyInfo from './CyInfo';
import InstrumentsPanel from './InstrumentsPanel';
import CommentsPanel from './CommentsPanel';




export class CytologyInformation extends Component {

    transform = () => {
        if (this.props.isCollapsed) this.props.collapseInfo(false);
        else this.props.collapseInfo(true);
    }

    render() {
        return (
            <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                <div onClick={this.transform} className="section-title">Cytology Information</div>
                <CyInfo />
                <InstrumentsPanel />
                <CommentsPanel />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isCollapsed: state.infoIsCollapsed,
})

const mapDispatchToProps = (dispatch) => ({
    collapseInfo: (bool) => dispatch(collapseInfo(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(CytologyInformation)
