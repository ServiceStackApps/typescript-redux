/// <reference path='../../typings/tsd.d.ts'/>
System.register(['react-redux'], function(exports_1) {
    var react_redux_1;
    function reduxify(mapStateToProps, mapDispatchToProps) {
        return function (target) { return react_redux_1.connect(mapStateToProps, mapDispatchToProps)(target); };
    }
    exports_1("reduxify", reduxify);
    function subscribeToStore() {
        return function (target) {
            var didMount = target.prototype.componentDidMount;
            target.prototype.componentDidMount = function () {
                var _this = this;
                if (didMount != null)
                    didMount.call(this);
                this.unsubscribe = this.props.store.subscribe(function () { return _this.forceUpdate(); });
            };
            var willUnmount = target.prototype.componentWillUnmount;
            target.prototype.componentWillUnmount = function () {
                if (willUnmount != null)
                    willUnmount.call(this);
                this.unsubscribe();
            };
        };
    }
    exports_1("subscribeToStore", subscribeToStore);
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