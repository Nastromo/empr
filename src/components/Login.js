import React, { Component } from 'react';
import { connect } from 'react-redux';
import microscope from '../img/microscope.svg';
import SubmitButton from './SubmitButton';
import { showNotification } from '../store/actions/Notification';



export class login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.login.value === `art` && this.pass.value === `art` ) this.props.history.push(`/pending`);
        else this.props.showNotification(`Incorrect login or password`, `notification-show`);
    }


    render() {
        return (
            <div className="flex-center-column">
                <img className="micro" src={microscope} alt="" />
                <h2>Welcome</h2>
                <p className="sub-title">Empire City Laboratories</p>

                <form className="signup-form" onSubmit={this.handleSubmit}>

                    <input 
                        ref={el => this.login = el}
                        className="input-login"
                        type="text"
                        placeholder="Enter Your Login" 
                        required="required"
                        autoComplete="username" />

                    <input 
                        ref={el => this.pass = el} 
                        className="input-login" 
                        type="password" 
                        placeholder="Enter Your Password" 
                        required="required"
                        autoComplete="current-password" />

                    <div className="main-btn-height">
                        <SubmitButton />
                    </div>
                    <p className="text-center">© 2008-2018 Empire City Laboratories, Inc. All Rights Reserved. ECL and Empire City Laboratories are registered trademarks of Empire City Laboratories®, Inc.</p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    showNotification: (text, css) => dispatch(showNotification(text, css)),
})

export default connect(mapStateToProps, mapDispatchToProps)(login)
