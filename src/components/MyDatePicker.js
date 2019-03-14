import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import '../datepicker.css';
import moment from 'moment';
import { changeDate } from '../store/actions/DatePicket';



export class MyDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: null,
        };
    }

    onDateChange = (date) => {
        this.props.changeDate({
            id: this.props.id,
            date: date.valueOf()
        });
    }

    render() {
        return (
            <div className="date-picker">
                <SingleDatePicker
                    id="date_input"
                    numberOfMonths={1}
                    date={moment(this.props.date)}
                    focused={this.state.focused}
                    onDateChange={this.onDateChange}
                    onFocusChange={({ focused }) => { this.setState({ focused }); }}
                    isOutsideRange={() => false}
                    hideKeyboardShortcutsPanel={true}
                    daySize={32}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    changeDate: (obj) => dispatch(changeDate(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyDatePicker)
