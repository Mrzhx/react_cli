import React, { Component } from 'react';
import { observer } from 'mobx-react';

interface UserStore {
  user: any;
}

@observer
class Person extends Component<UserStore> {
  componentDidMount() {
    console.log(this.props.user)
  }

  render() {
    return (<div>个人中心</div>)
  }
}

export default Person