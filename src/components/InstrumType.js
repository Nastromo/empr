import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showInstrumList, setOption } from '../store/actions/InstrumDropDwon';
import { setOption as setInstrument, getInstrumTypeList } from '../store/actions/Instruments';





export class InstrumType extends Component {
    // constructor(props) {
    //     super(props);
    //     this.menu = [`Whater bath`, `Centrifuge`, `Hybridizer`, `Imager`, `Coverslipper`, `Stainer`, `Processor`];
    // }

    componentDidMount() {
        this.props.getInstrumTypeList();
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
        if (this.props.list) {
            // передать с сервера объект с полем types: [`type 1`, `type 2`];
            return (
                <div className="relative basis38">
                    <div ref={el => this.option = el}
                        className={this.props.option !== `Select` ? `drop-select drop-select-chosen` : `drop-select`}>
                        {this.props.option !== `Select` ? this.props.option : `Select`}</div>
    
                    <div className={this.props.status ? `drop-down drop-down-show` : `drop-down`}>
                        {
                            this.props.list.types.map((item, i) => {
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
        } else {
            return (
                <div className="relative basis38">
                    <div className="drop-select">Loading...</div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    list: state.instrumList,
    status: state.instrumTypeStaus,
    option: state.instrumTypeOption,
})

const mapDispatchToProps = (dispatch) => ({
    showInstrumList: (bool) => dispatch(showInstrumList(bool)),
    setOption: (option) => dispatch(setOption(option)),
    setInstrument: (instrum) => dispatch(setInstrument(instrum)),
    getInstrumTypeList: () => dispatch(getInstrumTypeList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(InstrumType)
