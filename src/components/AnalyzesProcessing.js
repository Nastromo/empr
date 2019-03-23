import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProcessingList } from '../store/actions/Analyzes';
import LineSpinner from './LineSpinner';





export class AnalyzesProcessing extends Component {
    constructor(props) {
        super(props);
        this.analyzes = [
            { title: `UVFISH` },
            { title: `CLL` },
        ]
    }

    componentDidMount() {
        this.props.getProcessingList(0, this.analyzes[0].title);
    }

    handleClick = (e) => {
        const title = e.currentTarget.textContent;
        const index = Number(e.currentTarget.id);
        this.props.getProcessingList(index, title);
    }

    render() {
        return (
            <div className="analyzes">
                {
                    this.analyzes.map((tab, i) => {
                        return (
                            <div
                                id={i}
                                key={i}
                                className={this.props.index === i ? 'active-tab tab' : 'tab'}
                                onClick={this.handleClick}>
                                {tab.title}
                            </div>
                        );
                    })
                }
                {this.props.isLoading ? <div className="table-spinner"><LineSpinner /></div> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    index: state.activeAnalysis,
    isLoading: state.pendingLoading,
})

const mapDispatchToProps = dispatch => ({
    getProcessingList: (index, title) => dispatch(getProcessingList(index, title))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzesProcessing)
