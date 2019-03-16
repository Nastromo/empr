import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInstrums, deleteInstrum } from '../store/actions/Instruments';



export class InstrumentsList extends Component {
    componentDidMount = () => {
        this.props.getInstrums();
    }

    delete = (e) => {
        console.log(e.target.id)
        this.props.deleteInstrum(e.target.id);
    }

    render() {
        return (
            <div className="instrum-list">
                {
                    this.props.list.map((instrum, i) => {
                        return (
                            <div key={i} className="flex-instr">
                                <div className="instrum-item">
                                    <div>{`${instrum.type}  –  ${instrum.title}`}</div>
                                </div>
                                <div className="del-instr">
                                    <div className="delete" onClick={this.delete} id={instrum.title}></div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.newInstrumList,
})

const mapDispatchToProps = dispatch => ({
    getInstrums: () => dispatch(getInstrums()),
    deleteInstrum: (title) => dispatch(deleteInstrum(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsList)
