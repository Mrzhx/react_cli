import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import renderRoutes from "@route/route";
import config from "@route/router_config";
import './App.scss';

const routes = renderRoutes({
  routes: config
});

class App extends Component {
  componentDidMount() {
    console.log(routes)
  }
  render() {
    return (
    <BrowserRouter>
      { routes }
    </BrowserRouter>
    )
  }
}

export default App;