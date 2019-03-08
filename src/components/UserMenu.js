import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { showMenu } from '../store/actions/UserMenu';




export class UserMenu extends Component {

    handleExit = () => {
        localStorage.removeItem(`emprToken`);
        this.props.history.push(`/`);
    }

    render() {
        return (
            <div className={this.props.userMenu}>
                <p className="login-name">{this.props.userLogin}</p>
                <Link to="/account/instruments">Instruments</Link>
                <Link to="/account/users">Users</Link>
                <Link to="/account/comments">Comments</Link>
                <div onClick={this.handleExit}>Log out</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userLogin: `Artem`,
    userMenu: state.userMenu,
})

const mapDispatchToProps = (dispatch) => ({
    showMenu: (bool) => dispatch(showMenu(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserMenu));
