import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import LineSpinner from './LineSpinner';
import { getUser } from '../store/actions/User';
import Pending from './Pending';
import Processing from './Processing';
import Screening from './Screening';
import Qc from './Qc';
import BatchControl from './BatchControl';
import StainQc from './StainQc';
import History from './History';
import StainMaintenance from './StainMaintenance';
import Instruments from './Instruments';
import Users from './Users';
import Comments from './Comments';
import Navigation from './Navigation';



export class PrivateRoute extends Component {
    componentDidMount() {
        this.props.getUser(this.props.history);
    }

    render() {
        if (this.props.isLoading) return <LineSpinner />

        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/account/pending" component={Pending} />
                    <Route exact path="/account/processing" component={Processing} />
                    <Route exact path="/account/screening" component={Screening} />
                    <Route exact path="/account/qc" component={Qc} />
                    <Route exact path="/account/batch-control" component={BatchControl} />
                    <Route exact path="/account/stain-qc" component={StainQc} />
                    <Route exact path="/account/history" component={History} />
                    <Route exact path="/account/stain-maintenance" component={StainMaintenance} />
                    <Route exact path="/account/instruments" component={Instruments} />
                    <Route exact path="/account/users" component={Users} />
                    <Route exact path="/account/comments" component={Comments} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.userLoading,
    user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (history) => dispatch(getUser(history))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute))

