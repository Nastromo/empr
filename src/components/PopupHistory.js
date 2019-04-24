import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showHistoryPopup } from '../store/actions/HistoryPopup';



export class PopupHistory extends Component {
    handleShadowClick = () => {
        this.props.showHistoryPopup(false);
    }

    render() {

        return (
            <div onClick={this.handleShadowClick} className={this.props.isShwon ? "fixed-hist-shadow" : "fixed-hist-shadow-hidden"}>
                <div className="popup-history">
                    <h2>Previous Cyto/Histo results</h2>
                    <div className="for-history">
                        <div className="flex-title-pop">
                            <div><p>Accession #</p></div>
                            <div><p>Case #</p></div>
                        </div>
                        <div className="pop-height-overflow">
                            {
                                this.props.previousCytoList.map((item, i) => {
                                    return (
                                        <div key={i} className="flex-title-pop">
                                            <div><p>{item.access}</p></div>
                                            <div><p>{item.case}</p></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isShwon: state.historyPopup,
    previousCytoList: [
        {
            access: `3243434`,
            case: `case 222`,
        },
        {
            access: `355554`,
            case: `case 23332`,
        },
        {
            access: `3243434`,
            case: `case 222`,
        },
        {
            access: `355554`,
            case: `case 23332`,
        },
        {
            access: `3243434`,
            case: `case 222`,
        },
        {
            access: `355554`,
            case: `case 23332`,
        },
        {
            access: `3243434`,
            case: `case 222`,
        },
        {
            access: `355554`,
            case: `case 23332`,
        },
        {
            access: `3243434`,
            case: `case 222`,
        },
        {
            access: `355554`,
            case: `case 23332`,
        },
        {
            access: `3243434`,
            case: `case 222`,
        },
        {
            access: `355554`,
            case: `case 23332`,
        },
        {
            access: `3243434`,
            case: `case 222`,
        },
        {
            access: `355554`,
            case: `case 23332`,
        },
        {
            access: `3243434`,
            case: `case 222`,
        },
        {
            access: `355554`,
            case: `case 23332`,
        },
        {
            access: `3243434`,
            case: `case 222`,
        },
        {
            access: `355554`,
            case: `case 23332`,
        },
        {
            access: `3243434`,
            case: `case 222`,
        },
        {
            access: `355554`,
            case: `case 23332`,
        },
    ]
})

const mapDispatchToProps = (dispatch) => ({
    showHistoryPopup: (bool) => dispatch(showHistoryPopup(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupHistory)
