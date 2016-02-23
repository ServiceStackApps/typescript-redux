/// <reference path='../../typings/main.d.ts'/>

import * as React from 'react';

import { createStore } from 'redux';

let store = createStore(
    (state, action) => {
        switch (action.type) {
            case 'INCR':
                return { counter: state.counter + action.by };
            default:
                return state;
        }
    },
    { counter: 0 });

export default class Counter extends React.Component<any, any> {

    private unsubscribe: Function;

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <p>
                    <label>Counter: </label><b>#{store.getState().counter}</b>
                </p>
                <button onClick={e => store.dispatch({ type:'INCR', by: 1 }) }>INCREMENT</button>
                <span style={{ padding: "0 5px" }} />
                <button onClick={e => store.dispatch({ type:'INCR', by: -1 }) }>DECREMENT</button>
            </div>
        );
    }
}
