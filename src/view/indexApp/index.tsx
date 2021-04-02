import React, { Component } from 'react'
import BottomTabBar from '@components/TabBar/TabBar'
import Home from '@view/home/index'
import Person from '@view/person/index'
import Shop from '@view/store_shop/shop_view/index'
import { Switch, Route } from 'react-router-dom'


class InitApp extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/person' component={Person}></Route>
          <Route path='/shop' component={Shop}></Route>
        </Switch>
        <BottomTabBar></BottomTabBar>
      </div>
    )
  }
}

export default InitApp
