import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCount, setPopupVisibility } from '../store/actions/SetGyn';



export class PopUpLimit extends Component {

    onClick = e => {
        if (this.gyn.value && this.ngyn.value) {
            this.props.setCount({
                gyn: this.gyn.value,
                ngyn: this.ngyn.value
            });
            this.props.setPopupVisibility(false);
        }
    }

    render() {
        if (!this.props.isShown) return <div></div>;
        return (
            <div className="popup-limit">
                <div className="popup-content">
                    <p className="popup-title">Daily Activity</p>
                    <div>
                        <p className="title-g">GYN Count</p>
                        <input ref={el => this.gyn = el} className="gyn-input" type="number" name="" id="" />
                    </div>
                    <div>
                        <p className="title-g">NGYN Count</p>
                        <input ref={el => this.ngyn = el} className="gyn-input" type="number" name="" id="" />
                    </div>
                    <div className="sbm-btn-g">
                        <button onClick={this.onClick} className="green-btn" type="submit">
                            <p className="show-text">Submit</p>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    setCount: obj => dispatch(setCount(obj)),
    setPopupVisibility: bool => dispatch(setPopupVisibility(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(PopUpLimit)
