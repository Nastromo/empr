import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showDropDown } from '../store/actions/DropDown';



export class DropDown extends Component {

    handleClick = () => {
        this.props.showDropDown({
            status: true,
            id: this.props.id
        });
    }

    render() {
        return (
            <div className="relative">
                <div onClick={this.handleClick} className="drop-select">Select</div>

                <div className= {this.props.id === this.props.clickedID && this.props.isOpen ? `drop-down drop-down-show` : `drop-down`}>
                    {
                        this.props.menu.map((item, i) => {
                            return (
                                <div className="menu-item" key={i}>
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
    isOpen: state.dropDown.status,
    clickedID: state.dropDown.id
})

const mapDispatchToProps = (dispatch) => ({
    showDropDown: (obj) => dispatch(showDropDown(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(DropDown)
