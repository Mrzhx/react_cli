import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { AppStore } from "@store/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@view/home/index";
import Person from "@view/person/index";
import Shop from "@view/store_shop/shop_view/index";
import BottomBar from "@components/TabBar/TabBar";
import Login from "@view/login/index";
import "./App.scss";

@inject("TaskStore", "UserStore")
@observer
class App extends Component {
  state = {
    isLoginStatus: false,
  };

  componentDidMount() {
    this.isLogin();
  }

  isLogin = async () => {
    const { UserStore } = AppStore;
    this.setState({ isLoginStatus: await UserStore.initUserLogin()})
  };

  render() {
    const { UserStore } = AppStore;
    const { isLoginStatus } = this.state;

    if (isLoginStatus) {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="person" element={<Person user={UserStore} />} />
            <Route path="shop" element={<Shop />} />
          </Routes>
          <BottomBar></BottomBar>
        </Router>
      );
    }
    return <Login></Login>
  }
}

export default App;
