import { RouteProps } from "react-router-dom";
import Test1 from "@view/home/test_1";
import Test2 from "@view/home/test_2";


const config: RouteProps[] = [
  {
    path: "/",
    component: Test1
  },
  {
    path: "/user",
    component: Test2
  }
];


export default config;