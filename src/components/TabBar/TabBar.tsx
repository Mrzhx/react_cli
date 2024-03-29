/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { TabBar } from "antd-mobile";
import { TabArr } from "./init";
import { useNavigate, useLocation } from "react-router-dom";
import "./tabbar.scss";

function TabBarBottom() {

  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setTab] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [arrPath] = useState(['/person', '/', '/shop'])

  useEffect(() => {
    getTabBarStatus()
  }, [])


  const getTabBarStatus = () => {
    if (arrPath.indexOf(location.pathname) < 0) {
      setHidden(true)
    }
  }

  const changeRoute = (path: string, index: number) => {
    setTab(index)
    navigate(path)
  }
  
  return (
    <div className="tabbar-con">
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={hidden}
      >
        {TabArr.map((item, index) => {
          return (
            <TabBar.Item
              icon={{
                uri:
                  "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg",
              }}
              selectedIcon={{
                uri:
                  "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg",
              }}
              title={item.title}
              key={index}
              selected={selectedTab === index}
              onPress={()=>changeRoute(item.path, index)}
            ></TabBar.Item>
          );
        })}
      </TabBar>
    </div>
  );
}


export default TabBarBottom;
