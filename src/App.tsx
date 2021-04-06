import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@view/home/index';
import Person from '@view/person/index';
import Shop from '@view/store_shop/shop_view/index';
import BottomBar from '@components/TabBar/TabBar';
import { AppStore } from '@store/index';
import './App.scss';

@inject('TaskStore', 'UserStore')
@observer
class App extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { UserStore } = AppStore;

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person" element={<Person user={UserStore}/>} />
          <Route path="/shop" element={<Shop />}>
            {/* <Route path="/" element={<PostLists />} />
            <Route path=":slug" element={<Post />} /> */}
          </Route>
        </Routes>
        <BottomBar></BottomBar>
      </Router>
    )
  }
}

export default App;