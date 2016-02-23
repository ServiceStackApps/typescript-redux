/// <reference path='../../typings/main.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component<any, any> {
    render() {
        var field = this.props.field, step = this.props.step || 1;
        return (
            <div>
                <p>
                    <label>{field}: </label>
                    <b>{this.props.counter}</b>
                </p>
                <button style={{ width:30, margin:2 }} onClick={e => this.props.decr(field, step) }>-</button>
                <button style={{ width: 30, margin: 2 }} onClick={e => this.props.incr(field, step) }>+</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({ counter: state[props.field] || 0 });

const mapDispatchToProps = (dispatch) => ({
    incr: (field, step) => {
        dispatch({ type: 'COUNTER_CHANGE', field, by: step });
    },
    decr: (field, step) => {
        dispatch({ type: 'COUNTER_CHANGE', field, by: -1 * step });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
