/// <reference path='../../typings/tsd.d.ts'/>
/// <reference path='../../typings/react-redux/react-redux.d.ts'/>

import { Store, Dispatch, ActionCreator } from 'redux';
import { Provider, connect } from 'react-redux';

export interface MapStateToProps {
    (state: any, ownProps?: any): any;
}

export interface MapDispatchToPropsFunction {
    (dispatch: Dispatch, ownProps?: any): any;
}

export interface MapDispatchToPropsObject {
    [name: string]: ActionCreator;
}

export function reduxify(mapStateToProps?: MapStateToProps,
    mapDispatchToProps?: MapDispatchToPropsFunction | MapDispatchToPropsObject) {
    return target => connect(mapStateToProps, mapDispatchToProps)(target);
}

export function listenTo(store:Store) {
    return target => {
        var didMount = target.prototype.componentDidMount;
        target.prototype.componentDidMount = function() {
            if (didMount != null)
                didMount.call(this);

            this.unsubscribe = store.subscribe(() => this.forceUpdate());
        };

        var willUnmount = target.prototype.componentWillUnmount;
        target.prototype.componentWillUnmount = function() {
            if (willUnmount != null)
                willUnmount.call(this);

            this.unsubscribe();
        }
    }
}