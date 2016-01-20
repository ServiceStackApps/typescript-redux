/// <reference path='../../typings/tsd.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';

interface IHelloWorldProps {
    counter?: number;
    incr?: Function;
    decr?: Function;
}

class Counter extends React.Component<IHelloWorldProps, any> {
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

const mapStateToProps = (state): IHelloWorldProps => state;

const mapDispatchToProps = (dispatch): IHelloWorldProps => ({
    incr: () => {
        dispatch({ type: 'INCR', by: 1 });
    },
    decr: () => {
        dispatch({ type: 'INCR', by: -1 });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
