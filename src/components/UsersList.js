import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../store/actions/User';




export class UsersList extends Component {
    componentDidMount = () => {
        this.props.getUsers();
    }

    delete = (e) => {
        this.props.deleteUser(e.target.id);
    }

    render() {
        return (
            <div className="user-list">
                {
                    this.props.list.map((user, i) => {
                        return (
                            <div key={i} className="flex-instr">
                                <div className="instrum-item">
                                    <div>{`${user.userRole}  –  ${user.login}`}</div>
                                </div>
                                <div className="del-instr">
                                    <div className="delete" onClick={this.delete} id={user.login}></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.userList,
})

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers()),
    deleteUser: (login) => dispatch(deleteUser(login))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
