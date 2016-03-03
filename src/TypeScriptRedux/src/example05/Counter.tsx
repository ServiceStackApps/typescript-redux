/// <reference path='../../typings/browser.d.ts'/>

import * as React from 'react';

export default class Counter extends React.Component<any, any> {

    context: any;
    static contextTypes = {
        store: React.PropTypes.object
    }

    private unsubscribe: Function;

    componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <p>
                    <label>Counter: </label><b>#{this.context.store.getState().counter}</b>
                </p>
                <button onClick={e => this.context.store.dispatch({ type:'INCR', by: 1 }) }>INCREMENT</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => this.context.store.dispatch({ type:'INCR', by: -1 }) }>DECREMENT</button>
            </div>
        );
    }
}
