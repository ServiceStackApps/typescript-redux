/// <reference path='../../typings/browser.d.ts'/>
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=core.js.map