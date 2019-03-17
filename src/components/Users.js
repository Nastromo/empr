import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddUserPanel from './AddUserPanel';
import UsersList from './UsersList';



export class Users extends Component {


    render() {
        return (
            <div className="center-content">
                <div className="add-instrument">
                    <h2>Add new user</h2>
                    <AddUserPanel />
                    <UsersList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
