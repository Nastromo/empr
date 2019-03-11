import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showInstrumList, setOption } from '../store/actions/InstrumDropDwon';
import { setOption as setInstrument } from '../store/actions/Instruments';





export class InstrumType extends Component {
    constructor(props) {
        super(props);
        this.menu = [`whater bath`, `centrifuge`, `hybridizer`, `imager`, `coverslipper`, `stainer`, `processor`];
    }

    componentWillMount() {
        document.addEventListener('click', this.handleMenu);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleMenu);
    }

    handleMenu = (e) => {
        if (this.option.contains(e.target)) {
            this.props.showInstrumList(true);
            this.props.setInstrument(`Select`);
        } else {
            this.props.showInstrumList(false);
        }
    }

    choseOption = (e) => {
        this.props.setOption(e.target.id);
    }

    render() {
        return (
            <div className="relative">
                <div ref={el => this.option = el}
                    className={this.props.option !== `Select` ? `drop-select drop-select-chosen` : `drop-select`}>
                    {this.props.option !== `Select` ? this.props.option : `Select`}</div>

                <div className={this.props.status ? `drop-down drop-down-show` : `drop-down`}>
                    {
                        this.menu.map((item, i) => {
                            return (
                                <div onClick={this.choseOption} id={item} className="menu-item" key={i}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    status: state.instrumTypeStaus,
    option: state.instrumTypeOption,
})

const mapDispatchToProps = (dispatch) => ({
    showInstrumList: (bool) => dispatch(showInstrumList(bool)),
    setOption: (option) => dispatch(setOption(option)),
    setInstrument: (instrum) => dispatch(setInstrument(instrum)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InstrumType)
