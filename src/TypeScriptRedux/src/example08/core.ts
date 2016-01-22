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

export function bindAll() {
    return target => {
        function F() {
            for (let k in target.prototype) {
                const fn = target.prototype[k];
                if (typeof fn !== 'function' || !target.prototype.hasOwnProperty(k))
                    continue;
                this[k] = fn.bind(this);
            }
            target.apply(this, arguments);
        }
        F.prototype = target.prototype;

        var a = target; //Hack to get araound TypeScript build error
        a = F;
        return a;
    };
}

export function pureRender() {
    return target => {
        target.prototype.shouldComponentUpdate = (nextProps, nextState) =>
            !shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState);
    };
}

function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
        if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }

    return true;
}