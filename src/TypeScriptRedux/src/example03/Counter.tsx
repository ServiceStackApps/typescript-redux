/// <reference path='../../typings/tsd.d.ts'/>

import * as React from 'react';

export default class Counter extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
        this.state = { counter: 0 };
    }

    render() {
        return (
            <div>
                <p>
                    <label>Counter: </label><b>#{this.state.counter}</b>
                </p>
                <button onClick={e => this.incr(1) }>INCREMENT</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => this.incr(-1) }>DECREMENT</button>
            </div>
        );
    }

    incr(by:number) {
        this.setState({ counter: this.state.counter + by });
    }
}

