import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStainQcList } from '../store/actions/Analyzes';



export class AnalyzesStainQc extends Component {
    constructor(props) {
        super(props);
        this.analyzes = [
            { title: `GYN` },
            { title: `NGYN` },
        ]
    }

    componentDidMount() {
        this.props.getStainQcList(0, this.analyzes[0].title);
    }

    handleClick = (e) => {
        const title = e.currentTarget.textContent;
        const index = Number(e.currentTarget.id);
        this.props.getStainQcList(index, title);
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
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    index: state.activeAnalysis,
})

const mapDispatchToProps = dispatch => ({
    getStainQcList: (index, title) => dispatch(getStainQcList(index, title))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzesStainQc)
