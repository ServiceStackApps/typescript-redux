/// <reference path='../../typings/browser.d.ts'/>

import * as React from 'react';
import { subscribeToStore } from './core';

@subscribeToStore()
export default class History extends React.Component<any, any> {
    render() {
        return (
            <div>
                <button onClick={this.replayStates}>replay</button>
                <span> </span>
                <button onClick={this.resetState}>clear</button>
                <p>
                    <b>{this.props.history.states.length}</b> states
                </p>
                <button onClick={this.prevState} disabled={this.props.history.canPrev()}>prev</button>
                <span> </span>
                <button onClick={this.nextState} disabled={this.props.history.canNext()}>next</button>
                <p>
                    <b>{this.props.history.stateIndex + 1}</b> position
                </p>
                <input type="range" min="0" max={this.props.history.states.length - 1}
                    disabled={this.props.history.states.length === 0}
                    value={this.props.history.stateIndex} onChange={this.goToState} />
            </div>
        );
    }
    resetState = () => {
        this.props.store.dispatch({ type: 'LOAD', state: this.props.defaultState });
        this.props.history.reset();
    }
    replayStates = () => {
        this.props.history.states.forEach((state, i) =>
            setTimeout(() => this.props.store.dispatch({ type: 'LOAD', state }), 10 * i));
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