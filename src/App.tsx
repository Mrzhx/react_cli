import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@view/home/index';
import Person from '@view/person/index';
import Shop from '@view/store_shop/shop_view/index';
import BottomBar from '@components/TabBar/TabBar'
import './App.scss';

class App extends Component {

  componentDidMount() {

  }
  
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person" element={<Person />} />
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