import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showList, setOption } from '../store/actions/Instruments';



export class Instrum extends Component {
    constructor(props) {
        super(props);
        this.menu = [];
    }

    setMenu = (type) => {
        switch (type) {
            case `whater bath`:
                this.menu = [`Anova Whater Bath`, `Fisher Whater Bath`];
                break;
            case `centrifuge`:
                this.menu = [`Centrifuge #1`, `Centrifuge #2`];
                break;
            case `hybridizer`:
                this.menu = [`Abbott Termobrite #1`, `Abbott Termobrite #2`];
                break;
            case `imager`:
                this.menu = [`Hologic Imager`];
                break;
            case `coverslipper`:
                this.menu = [`Manual Coverslipper`, `Sacura Coverslipper`];
                break;
            case `stainer`:
                this.menu = [`Manual Staining`, `Abbott VP2000`, `Sakura Stainer`];
                break;
            case `processor`:
                this.menu = [`T2000 #1`, `T2000 #2`];
                break;
            default: break;
        }
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
    menu: state.instrumTypeOption,
    status: state.instrumStaus,
    option: state.instrumOption,
})

const mapDispatchToProps = (dispatch) => ({
    showList: (bool) => dispatch(showList(bool)),
    setOption: (option) => dispatch(setOption(option)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Instrum)
