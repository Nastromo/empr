import React, { Component } from 'react';
import { connect } from 'react-redux';
import { print, setOption } from '../store/actions/Print';




export class DropDownPrint extends Component {
    constructor(props) {
        super(props);
        this.menu = [`ALL`, `GYN`, `NGYN`, `UVFISH`, `CLL`];
    }

    componentWillMount() {
        document.addEventListener('click', this.handleMenu);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleMenu);
    }

    handleMenu = (e) => {
        if (this.option.contains(e.target)) {
            this.props.print(true);
        } else {
            this.props.print(false);
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
    status: state.printStaus,
    option: state.printOption,
})

const mapDispatchToProps = (dispatch) => ({
    print: (bool) => dispatch(print(bool)),
    setOption: (option) => dispatch(setOption(option)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DropDownPrint)
