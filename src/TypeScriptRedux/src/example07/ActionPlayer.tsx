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
                <button onClick={e => this.replayActions()}>replay</button>
                <p>
                    <b>{this.props.actions.length}</b> actions
                </p>
                <button onClick={e => this.undoAction()}>undo</button> <span></span>
                <button onClick={e => this.resetState()}>clear</button>
            </div>
        );
    }
    resetState() {
        this.props.store.dispatch({ type: 'LOAD', state: this.props.defaultState });
        this.props.actions.length = 0;
    }
    replayActions() {
        var snapshot = this.props.actions.slice(0);
        this.resetState();

        snapshot.forEach((action, i) =>
            setTimeout(() => this.props.store.dispatch(action), 10 * i));
    }
    undoAction() {
        var snapshot = this.props.actions.slice(0, this.props.actions.length - 1);
        this.resetState();
        snapshot.forEach(action => this.props.store.dispatch(action));
    }
}