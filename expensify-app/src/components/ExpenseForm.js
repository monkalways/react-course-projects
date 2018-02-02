import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.expense ? props.expense.id : '',
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e, data) => {
        const description = data.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e, data) => {
        const note = data.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e, data) => {
        const amount = data.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { // validate number
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                id: this.state.id,
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: +this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                {this.state.error || <p>{this.state.error}</p>}
                <Form.Field>
                    <label>Description</label>
                    <Input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <Input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Created At</label>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                        showDefaultInputIcon
                    />
                </Form.Field>
                <Form.Field>
                    <label>Note</label>
                    <TextArea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </TextArea>
                </Form.Field>
                <Button type="submit" primary>Save Expense</Button>
            </Form>
        );
    }
}
