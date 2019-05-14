import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showDropDown } from '../store/actions/DropDown';
import { setOption } from '../store/actions/DropDown';
import { showNotification } from '../store/actions/Notification';



export class DropDown extends Component {
    componentWillMount() {
        document.addEventListener('click', this.handleMenu);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleMenu);
    }

    handleMenu = (e) => {
        if (this.option.contains(e.target)) {
            this.props.showDropDown({
                id: this.props.id,
                status: true
            });
        } else {
            this.props.showDropDown({
                id: this.props.id,
                status: false
            });
        }
    }

    choseOption = (e) => {
        if (Number(this.props.numberChroms) < 4 && e.target.id === `Negative`) {
            this.props.showNotification(`This case can't be negative`, `notification-show`);
        } else if (Number(this.props.numberZero) >= 12 && e.target.id === `Negative`) {
            this.props.showNotification(`This case can't be negative`, `notification-show`);
        } else if (Number(this.props.numberChroms) < 4 && e.target.id === `Unsatisfactory`) {
            this.props.showNotification(`This case can't be Unsatisfactory`, `notification-show`);
        } else if (Number(this.props.numberZero) >= 12 && e.target.id === `Unsatisfactory`) {
            this.props.showNotification(`This case can't be Unsatisfactory`, `notification-show`);
        } else {
            this.props.setOption({
                id: this.props.id,
                option: e.target.id,
            });
        }
    }

    render() {
        return (
            <div className="relative">
                <div ref={el => this.option = el}
                    className={this.props.option ? `drop-select drop-select-chosen` : `drop-select`}>
                    {this.props.option ? this.props.option : `Select`}</div>

                <div className={this.props.status ? `drop-down drop-down-show` : `drop-down`}>
                    {
                        this.props.menu.map((item, i) => {
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
    numberChroms: state.patient.numberChroms,
    numberZero: state.patient.numberZero
})

const mapDispatchToProps = (dispatch) => ({
    showDropDown: (obj) => dispatch(showDropDown(obj)),
    setOption: (obj) => dispatch(setOption(obj)),
    showNotification: (text, cla) => dispatch(showNotification(text, cla))
})

export default connect(mapStateToProps, mapDispatchToProps)(DropDown)
