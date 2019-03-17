import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { setRole, setLogin, setPass, addNewUser } from '../store/actions/User';




export class AddUserPanel extends Component {
    handleRole = (e) => {
        this.props.setRole(e.target.value);
    }

    handleLogin = (e) => {
        this.props.setLogin(e.target.value);
    }

    handlePass = (e) => {
        this.props.setPass(e.target.value);
    }

    add = () => {
        this.props.addNewUser({
            userRole: this.props.role,
            login: this.props.login,
            pass: this.props.pass
        });
    }

    render() {
        return (
            <div className="user-add">
                <div>
                    <input
                        className="simple-input"
                        value={this.props.role}
                        onChange={this.handleRole}
                        placeholder="Role"
                        type="text" />
                </div>
                <div>
                    <input
                        className="simple-input"
                        value={this.props.login}
                        onChange={this.handleLogin}
                        placeholder="Unique login"
                        type="text" />
                </div>
                <div>
                    <input
                        className="simple-input"
                        value={this.props.pass}
                        onChange={this.handlePass}
                        placeholder="Password"
                        type="text" />
                </div>
                <div className="add-instrum-btn">
                    <SubmitButton text="Add" onClick={this.add} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    role: state.userRole,
    login: state.userLogin,
    pass: state.userPass
})

const mapDispatchToProps = dispatch => ({
    setRole: (text) => dispatch(setRole(text)),
    setLogin: (text) => dispatch(setLogin(text)),
    setPass: (text) => dispatch(setPass(text)),
    addNewUser: (user) => dispatch(addNewUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPanel)
