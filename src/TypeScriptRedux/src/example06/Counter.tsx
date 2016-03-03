/// <reference path='../../typings/browser.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component<any, any> {
    render() {
        return (
            <div>
                <p>
                    <label>Counter: </label>
                    <b>#{this.props.counter}</b>
                </p>
                <button onClick={e => this.props.incr() }>INCREMENT</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => this.props.decr() }>DECREMENT</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    incr: () => {
        dispatch({ type: 'INCR', by: 1 });
    },
    decr: () => {
        dispatch({ type: 'INCR', by: -1 });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
