/// <reference path='../../typings/tsd.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';
import { reduxify } from './core';
import 'jquery';
import 'ss-utils';

declare var EventSource:ssutils.IEventSourceStatic;

export default class Users extends React.Component<any, any> {

    constructor(props?, context?) {
        super(props, context);
        this.state = {
            channels: ["home"], currentUser: null, users: [], 
            connectedToUserId: null, connectedUserActions: [], connectedStateIndex: -1
        };
        var source = new EventSource(serverEventsUrl());
        $(source).handleServerEvents({
            handlers: {
                onConnect: (currentUser) => {
                    currentUser.usersChannel = userChannel(currentUser.userId);
                    this.setState({ currentUser, users: filterUsers(this.state.users, currentUser.userId) });
                    this.props.onConnect(currentUser);
                    console.log(currentUser);
                },
                onJoin: () => this.refreshUsers(),
                onLeave: () => this.refreshUsers(),
                onUpdate: (user) => this.setState({
                     users: this.state.users.map(x => x.userId === user.userId ? user : x)
                }), 
                onState: (json, e) => {
                    this.props.store.dispatch({ type: 'LOAD', state: json ? JSON.parse(json) : this.props.defaultState });
                },
                getState: (json, e) => {
                    var o = JSON.parse(json);
                    var index = o.stateIndex || this.props.history.stateIndex;
                    var state = this.props.history.states[index];
                    $.ss.postJSON(`/send-user/${o.replyTo}?selector=cmd.onState`, state);
                },
                publishAction: (json, e) => {
                    var action = JSON.parse(json);
                    this.props.store.dispatch(action);
                }
            }
        });
    }

    render() {
        if (this.state.currentUser == null) return null;
        return (
            <div>
                <div style={{fontWeight:"bold"}}>
                    {this.renderUser(this.state.currentUser)}
                </div>
                <div style={{padding:"8px 0", textAlign:"center", fontSize:"18px"}}>
                    {this.state.users.length} users online:
                </div>
                
                { this.state.users.map(u => this.renderUser(u)) }

                <div style={{textAlign:"center", padding:"10px 0"}}>
                    { this.state.connectedToUserId ? <button onClick={e => this.disconnect()}>disconnect</button> : null}
                </div>
            </div>
        );
    }

    renderUser(u) {
        return (
            <div key={u.userId} onClick={e => this.connectToUser(u.userId)} style={{
                cursor:"pointer", padding:"4px",
                background:u.userId === this.state.connectedToUserId ? "#ffc" :  ""
            }}>
                <img src={u.profileUrl} style={{height:24,verticalAlign:"middle"}} />
                <span style={{padding:"2px 5px" }}>
                    {u.displayName} {u.userId === this.state.currentUser.userId ? " (me)" : ""}
                </span>
            </div>
        );
    }

    connectToUser(userId) {
        if (userId === this.state.currentUser.userId) return;

        this.requestUsersState(userId);
        var connectedChannels = this.state.channels.filter(x => x !== "home");
        $.ss.updateSubscriber({
            SubscribeChannels: userChannel(userId), 
            UnsubscribeChannels: connectedChannels.join(',')
        }, user => {
            this.setState({
                channels:user.channels.split(','), 
                connectedToUserId: userId
            });
        });
    }

    disconnect() {
        $.ss.unsubscribeFromChannels([userChannel(this.state.connectedToUserId)]);
        this.setState({ connectedToUserId: null });
    }

    requestUsersState(userId) {
        return $.ss.postJSON(`/send-user/${userId}?selector=cmd.getState`,
            { replyTo: this.state.currentUser.userId });
    }

    refreshUsers() {
        $.getJSON("/event-subscribers?channels=home", users => {
            this.setState({ users:filterUsers(users, this.state.currentUser.userId) });
        });    }
}

const userChannel = (userId) => "u_" + userId; 

const serverEventsUrl = (channels = ["home"]) => "/event-stream?channel=" + channels.join(',');

const filterUsers = (users, userId) => 
    users.filter(x => x.userId !== userId).sort((x,y) => x.userId.localeCompare(y.userId));
