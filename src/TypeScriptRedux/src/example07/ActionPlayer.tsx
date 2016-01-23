/// <reference path='../../typings/tsd.d.ts'/>

import * as React from 'react';

export default class ActionPlayer extends React.Component<any, any> {
    private unsubscribe: Function;
    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (
            <div>
                <button onClick={this.replayActions}>replay</button>
                <p>
                    <b>{this.props.actions.length}</b> actions
                </p>
                <button onClick={this.undoAction}>undo</button> <span></span>
                <button onClick={this.resetState}>clear</button>
            </div>
        );
    }
    resetState = () => {
        this.props.store.dispatch({ type: 'LOAD', state: this.props.defaultState });
        this.props.actions.length = 0;
    }
    replayActions = () => {
        var store = this.props.store, actions = this.props.actions;
        var snapshot = actions.slice(0);
        this.resetState();

        snapshot.forEach((action, i) =>
            setTimeout(() => store.dispatch(action), 10 * i));
    }
    undoAction = () => {
        var store = this.props.store, actions = this.props.actions;
        var snapshot = actions.slice(0, actions.length - 1);
        this.resetState();
        snapshot.forEach(action => store.dispatch(action));
    }
}