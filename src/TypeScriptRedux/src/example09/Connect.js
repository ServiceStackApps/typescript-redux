/// <reference path='../../typings/browser.d.ts'/>
System.register(['react', 'jquery', 'ss-utils'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React;
    var Connect, userChannel, filterUsers;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            Connect = (function (_super) {
                __extends(Connect, _super);
                function Connect(props, context) {
                    var _this = this;
                    _super.call(this, props, context);
                    this.state = {
                        channels: ["home"], currentUser: null, users: [],
                        connectedToUserId: null, connectedUserActions: [], connectedStateIndex: -1
                    };
                    var source = new EventSource("/event-stream?channels=home");
                    $(source).handleServerEvents({
                        handlers: {
                            onConnect: function (currentUser) {
                                currentUser.usersChannel = userChannel(currentUser.userId);
                                _this.setState({ currentUser: currentUser, users: filterUsers(_this.state.users, currentUser.userId) });
                                _this.props.onConnect(currentUser);
                            },
                            onJoin: function () { return _this.refreshUsers(); },
                            onLeave: function () { return _this.refreshUsers(); },
                            onUpdate: function (user) { return _this.setState({
                                users: _this.state.users.map(function (x) { return x.userId === user.userId ? user : x; })
                            }); },
                            getState: function (json, e) {
                                var o = JSON.parse(json);
                                var index = o.stateIndex || _this.props.history.stateIndex;
                                var state = _this.props.history.states[index];
                                $.ss.postJSON("/send-user/" + o.replyTo + "?selector=cmd.onState", state);
                            },
                            onState: function (json, e) {
                                _this.props.store.dispatch({
                                    type: 'LOAD', state: json ? JSON.parse(json) : _this.props.defaultState
                                });
                            },
                            publishAction: function (json, e) {
                                var action = JSON.parse(json);
                                _this.props.store.dispatch(action);
                            }
                        }
                    });
                }
                Connect.prototype.render = function () {
                    var _this = this;
                    if (this.state.currentUser == null)
                        return null;
                    return (React.createElement("div", null, React.createElement("div", {style: { fontWeight: "bold" }}, this.renderUser(this.state.currentUser)), React.createElement("div", {style: { padding: "8px 0", textAlign: "center", fontSize: "18px" }}, this.state.users.length, " users online:"), this.state.users.map(function (u) { return _this.renderUser(u); }), React.createElement("div", {style: { textAlign: "center", padding: "10px 0" }}, this.state.connectedToUserId ? React.createElement("button", {onClick: function (e) { return _this.disconnect(); }}, "disconnect") : null)));
                };
                Connect.prototype.renderUser = function (u) {
                    var _this = this;
                    return (React.createElement("div", {key: u.userId, onClick: function (e) { return _this.connectToUser(u.userId); }, style: {
                        cursor: "pointer", padding: "4px",
                        background: u.userId === this.state.connectedToUserId ? "#ffc" : ""
                    }}, React.createElement("img", {src: u.profileUrl, style: { height: 24, verticalAlign: "middle" }}), React.createElement("span", {style: { padding: "2px 5px" }}, u.displayName, " ", u.userId === this.state.currentUser.userId ? " (me)" : "")));
                };
                Connect.prototype.connectToUser = function (userId) {
                    var _this = this;
                    if (userId === this.state.currentUser.userId)
                        return;
                    this.requestUsersState(userId);
                    var connectedChannels = this.state.channels.filter(function (x) { return x !== "home"; });
                    $.ss.updateSubscriber({
                        SubscribeChannels: userChannel(userId),
                        UnsubscribeChannels: connectedChannels.join(',')
                    }, function (r) {
                        _this.setState({
                            channels: r.channels,
                            connectedToUserId: userId
                        });
                    });
                };
                Connect.prototype.disconnect = function () {
                    $.ss.unsubscribeFromChannels([userChannel(this.state.connectedToUserId)]);
                    this.setState({ connectedToUserId: null });
                };
                Connect.prototype.requestUsersState = function (userId) {
                    return $.ss.postJSON("/send-user/" + userId + "?selector=cmd.getState", { replyTo: this.state.currentUser.userId });
                };
                Connect.prototype.refreshUsers = function () {
                    var _this = this;
                    $.getJSON("/event-subscribers?channels=home", function (users) {
                        _this.setState({ users: filterUsers(users, _this.state.currentUser.userId) });
                    });
                };
                return Connect;
            }(React.Component));
            exports_1("default", Connect);
            userChannel = function (userId) { return "u_" + userId; };
            filterUsers = function (users, userId) {
                return users.filter(function (x) { return x.userId !== userId; }).sort(function (x, y) { return x.userId.localeCompare(y.userId); });
            };
        }
    }
});
//# sourceMappingURL=Connect.js.map