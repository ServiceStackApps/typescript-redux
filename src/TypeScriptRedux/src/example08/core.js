/// <reference path='../../typings/tsd.d.ts'/>
/// <reference path='../../typings/react-redux/react-redux.d.ts'/>
System.register(['react-redux'], function(exports_1) {
    var react_redux_1;
    function reduxify(mapStateToProps, mapDispatchToProps) {
        return function (target) { return react_redux_1.connect(mapStateToProps, mapDispatchToProps)(target); };
    }
    exports_1("reduxify", reduxify);
    function listenTo(store) {
        return function (target) {
            var didMount = target.prototype.componentDidMount;
            target.prototype.componentDidMount = function () {
                var _this = this;
                if (didMount != null)
                    didMount.call(this);
                this.unsubscribe = store.subscribe(function () { return _this.forceUpdate(); });
            };
            var willUnmount = target.prototype.componentWillUnmount;
            target.prototype.componentWillUnmount = function () {
                if (willUnmount != null)
                    willUnmount.call(this);
                this.unsubscribe();
            };
        };
    }
    exports_1("listenTo", listenTo);
    function bindAll() {
        return function (target) {
            function F() {
                for (var k in target.prototype) {
                    var fn = target.prototype[k];
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
    exports_1("bindAll", bindAll);
    function pureRender() {
        var _this = this;
        return function (target) {
            target.prototype.shouldComponentUpdate = function (nextProps, nextState) {
                return !shallowEqual(_this.props, nextProps) ||
                    !shallowEqual(_this.state, nextState);
            };
        };
    }
    exports_1("pureRender", pureRender);
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
    return {
        setters:[
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=core.js.map