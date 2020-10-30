import React, { Component } from 'react'
import { withStyles, Typography, Paper } from "@material-ui/core";
import { styles } from './styles';
import { ActionButton } from '../..';

class CounterRaw extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            maxValue: 0,
            minValue: 0,
        }
    }

    componentDidMount() {
        this.setState({ counter: this.props.currentCount, maxValue: this.props.max, minValue: this.props.min })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentCount !== this.props.currentCount) {
            this.setState({
                counter: this.props.currentCount
            })
        }
        if (prevProps.max !== this.props.max) {
            this.setState({
                maxValue: this.props.max
            })
        }
    }

    addItem = () => {
        let currentCounter = this.state.counter
        if (currentCounter < this.state.maxValue) {
            this.props.changeCount(++currentCounter)
        }
    }

    deleteItem = () => {
        let currentCounter = this.state.counter
        if (currentCounter > this.state.minValue) {
            this.props.changeCount(--currentCounter)
        }
    }

    render() {
        const { classes, text } = this.props;

        return (
            <div className={classes.counterMainContainer}>
                <Paper elevation={3} className={classes.counterContainer}>
                    <Typography className={classes.counterText}>{text}</Typography>
                    <div className={classes.buttonsContainer}>
                        <ActionButton
                            title="-"
                            onClick={() => this.deleteItem()}
                            buttonStyle={classes.counterButton}
                        />
                        <ActionButton
                            title="+"
                            onClick={() => this.addItem()}
                            buttonStyle={classes.counterButton}
                        />
                    </div>
                </ Paper>
            </div>
        )
    }
}

export const Counter = withStyles(styles)(CounterRaw);
