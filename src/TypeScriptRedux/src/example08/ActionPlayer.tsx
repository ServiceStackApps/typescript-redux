/// <reference path='../../typings/tsd.d.ts'/>

import * as React from 'react';
import { subscribeToStore } from './core';

@subscribeToStore()
export default class ActionPlayer extends React.Component<any, any> {
    render() {
        return (
            <div>
                <button onClick={this.replayActions}>replay</button>
                <span> </span>
                <button onClick={this.resetState}>clear</button>
                <p>
                    <b>{this.props.history.actions.length}</b> actions
                </p>
                <button onClick={this.prevState} disabled={this.props.history.canPrev()}>prev</button>
                <span> </span>
                <button onClick={this.nextState} disabled={this.props.history.canNext() }>next</button>
                <p>
                    <b>{this.props.history.stateIndex}</b> position
                </p>
                <input type="range" min="0" max={this.props.history.states.length - 1}
                    value={this.props.history.stateIndex} onChange={this.goToState} />
            </div>
        );
    }
    resetState = () => {
        this.props.store.dispatch({ type: 'LOAD', state: this.props.defaultState });
        this.props.history.reset();
    }
    replayActions = () => {
        var snapshot = this.props.history.actions.slice(0);
        this.resetState();

        snapshot.forEach((action, i) =>
            setTimeout(() => this.props.store.dispatch(action), 10 * i));
    }
    prevState = () => {
        this.props.store.dispatch({ type: 'LOAD', state: this.props.history.prev() });
    }
    nextState = () => {
        this.props.store.dispatch({ type: 'LOAD', state: this.props.history.next() });
    }
    goToState = (event) => {
        const e = event.target as HTMLInputElement;
        this.props.store.dispatch({ type: 'LOAD', state: this.props.history.goTo(parseInt(e.value)) });
    }
}