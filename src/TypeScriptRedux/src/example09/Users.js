/// <reference path='../../typings/tsd.d.ts'/>
System.register(['react', 'jquery', 'ss-utils'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React;
    var Users, userChannel, serverEventsUrl, filterUsers;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            Users = (function (_super) {
                __extends(Users, _super);
                function Users(props, context) {
                    var _this = this;
                    _super.call(this, props, context);
                    this.state = {
                        channels: ["home"], currentUser: null, users: [],
                        connectedToUserId: null, connectedUserActions: [], connectedStateIndex: -1
                    };
                    var source = new EventSource(serverEventsUrl());
                    $(source).handleServerEvents({
                        handlers: {
                            onConnect: function (currentUser) {
                                currentUser.usersChannel = userChannel(currentUser.userId);
                                _this.setState({ currentUser: currentUser, users: filterUsers(_this.state.users, currentUser.userId) });
                                _this.props.onConnect(currentUser);
                                console.log(currentUser);
                            },
                            onJoin: function () { return _this.refreshUsers(); },
                            onLeave: function () { return _this.refreshUsers(); },
                            onUpdate: function (user) { return console.log('onUpdate', user); },
                            onState: function (json, e) {
                                _this.props.store.dispatch({ type: 'LOAD', state: JSON.parse(json) });
                            },
                            getState: function (json, e) {
                                var o = JSON.parse(json);
                                var index = o.stateIndex || _this.props.history.stateIndex;
                                var state = _this.props.history.states[index];
                                $.ss.postJSON("/send-user/" + o.replyTo + "?selector=cmd.onState", state);
                            },
                            publishAction: function (json, e) {
                                var action = JSON.parse(json);
                                _this.props.store.dispatch(action);
                            }
                        }
                    });
                }
                Users.prototype.render = function () {
                    var _this = this;
                    if (this.state.currentUser == null)
                        return null;
                    return (React.createElement("div", null, React.createElement("div", {"style": { fontWeight: "bold" }}, this.renderUser(this.state.currentUser)), React.createElement("div", {"style": { padding: "8px 0", textAlign: "center", fontSize: "18px" }}, this.state.users.length, " users online:"), this.state.users.map(function (u) { return _this.renderUser(u); }), React.createElement("div", {"style": { textAlign: "center", padding: "10px 0" }}, this.state.connectedToUserId ? React.createElement("button", {"onClick": function (e) { return _this.disconnect(); }}, "disconnect") : null)));
                };
                Users.prototype.renderUser = function (u) {
                    var _this = this;
                    return (React.createElement("div", {"key": u.userId, "onClick": function (e) { return _this.connectToUser(u.userId); }, "style": {
                        cursor: "pointer", padding: "4px",
                        background: u.userId === this.state.connectedToUserId ? "#ffc" : ""
                    }}, React.createElement("img", {"src": u.profileUrl, "style": { height: 24, verticalAlign: "middle" }}), React.createElement("span", {"style": { padding: "2px 5px" }}, u.displayName, " ", u.userId === this.state.currentUser.userId ? " (me)" : "")));
                };
                Users.prototype.connectToUser = function (userId) {
                    var _this = this;
                    if (userId === this.state.currentUser.userId)
                        return;
                    this.requestUsersState(userId);
                    var connectedChannels = this.state.channels.filter(function (x) { return x !== "home"; });
                    $.ss.updateSubscriber({
                        SubscribeChannels: userChannel(userId),
                        UnsubscribeChannels: connectedChannels.join(',')
                    }, function (user) {
                        _this.setState({
                            channels: user.channels.split(','),
                            connectedToUserId: userId
                        });
                    });
                };
                Users.prototype.disconnect = function () {
                    $.ss.unsubscribeFromChannels([userChannel(this.state.connectedToUserId)]);
                    this.setState({ connectedToUserId: null });
                };
                Users.prototype.requestUsersState = function (userId) {
                    return $.ss.postJSON("/send-user/" + userId + "?selector=cmd.getState", { replyTo: this.state.currentUser.userId });
                };
                Users.prototype.refreshUsers = function () {
                    var _this = this;
                    $.getJSON("/event-subscribers?channels=home", function (users) {
                        _this.setState({ users: filterUsers(users, _this.state.currentUser.userId) });
                    });
                };
                return Users;
            })(React.Component);
            exports_1("default", Users);
            userChannel = function (userId) { return "u_" + userId; };
            serverEventsUrl = function (channels) {
                if (channels === void 0) { channels = ["home"]; }
                return "/event-stream?channel=" + channels.join(',');
            };
            filterUsers = function (users, userId) {
                return users.filter(function (x) { return x.userId !== userId; }).sort(function (x, y) { return x.userId.localeCompare(y.userId); });
            };
        }
    }
});
//# sourceMappingURL=Users.js.map