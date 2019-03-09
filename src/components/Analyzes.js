import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPendingList } from '../store/actions/Analyzes';



export class Analyzes extends Component {
    constructor(props) {
        super(props);
        this.analyzes = [
            { title: `GYN - 19655` },
            { title: `NGYN - 4085` },
            { title: `UVFISH - 3437` },
            { title: `CLL - 1` },
        ]
    }

    componentDidMount() {
        this.props.getPendingList(0, this.analyzes[0].title);
    }

    handleClick = (e) => {
        const title = e.currentTarget.textContent;
        const index = Number(e.currentTarget.id);
        this.props.getPendingList(index, title);
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
    getPendingList: (index, title) => dispatch(getPendingList(index, title))
})

export default connect(mapStateToProps, mapDispatchToProps)(Analyzes)
