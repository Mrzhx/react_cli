import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { TabArr } from './init'
import './tabbar.scss'

interface TabBarProps {
  history: any;
}

class TabBarBottom extends Component<TabBarProps> {
  state = {
    selectedTab: 0,
    hidden: false,
  };

  changeRoute(path: string, index: number) {
    this.props.history.push(path)
    this.setState({ selectedTab: index })
  }

  render() {
    const { selectedTab } = this.state
    return (
      <div  className='tabbar-con'>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {
            TabArr.map((item, index) => {
              return (
                <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title={item.title}
                key={index}
                selected={selectedTab === index}
                onPress={() => this.changeRoute(item.path, index)}
                >
              </TabBar.Item>
              )
            })
          }
        </TabBar>
      </div>
    );
  }
}


export default TabBarBottom