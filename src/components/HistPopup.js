import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showHist } from '../store/actions/ShowHist';



export class PopupHistory extends Component {
    handleShadowClick = () => {
        this.props.showHist(false);
    }

    render() {

        return (
            <div onClick={this.handleShadowClick} className={this.props.isShwon ? "fixed-hist-shadow" : "fixed-hist-shadow-hidden"}>
                <div className="popup-history">
                    <h2>Histology cases</h2>
                    <div className="for-history">
                        <div className="flex-title-pop">
                            <div><p>Case #</p></div>
                        </div>
                        <div className="pop-height-overflow">
                            {
                                this.props.previousCytoList.map((item, i) => {
                                    return (
                                        <div key={i} className="flex-title-pop">                                        
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
    isShwon: state.histPopup,
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
    showHist: (bool) => dispatch(showHist(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupHistory)
