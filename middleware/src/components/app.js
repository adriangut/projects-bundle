import React, { Component } from 'react';
import UserList from './user_list';

export default class App extends Component {
  render() {
    return (
      <div className="user-list">
        <UserList />
      </div>
    );
  }
}