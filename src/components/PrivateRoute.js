import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
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



export class PrivateRoute extends Component {
    componentDidMount() {
        this.props.getUser(this.props.history);
    }

    render() {
        if (this.props.isLoading) return <LineSpinner />

        return (
            <Router>
                <Switch>
                    <Route path="/account/pending" component={Pending} />
                    <Route path="/account/processing" component={Processing} />
                    <Route path="/account/screening" component={Screening} />
                    <Route path="/account/qc" component={Qc} />
                    <Route path="/account/batch-control" component={BatchControl} />
                    <Route path="/account/stain-qc" component={StainQc} />
                    <Route path="/account/history" component={History} />
                    <Route path="/account/stain-maintenance" component={StainMaintenance} />
                    <Route path="/account/instruments" component={Instruments} />
                    <Route path="/account/users" component={Users} />
                    <Route path="/account/comments" component={Comments} />
                </Switch>
            </Router>
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

