import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showList, setOption } from '../store/actions/Instruments';



export class Instrum extends Component {

    setMenu = (type) => {
        this.menu = [];
        this.props.list.forEach((instrum, i) => {
            if (instrum.type === type) this.menu.push(instrum.title);
        });
    }

    componentWillMount() {
        document.addEventListener('click', this.handleMenu);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleMenu);
    }

    handleMenu = (e) => {
        if (this.option.contains(e.target)) {
            this.props.showList(true);
        } else {
            this.props.showList(false);
        }
    }

    choseOption = (e) => {
        this.props.setOption(e.target.id);
    }

    render() {
        this.setMenu(this.props.menu);
        return (
            <div className="relative basis38">
                <p className="inst-p">Instrument</p>
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
    list: state.instruments,
    menu: state.instrumTypeOption,
    status: state.instrumStaus,
    option: state.instrumOption,
})

const mapDispatchToProps = (dispatch) => ({
    showList: (bool) => dispatch(showList(bool)),
    setOption: (option) => dispatch(setOption(option)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Instrum)
