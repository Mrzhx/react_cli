
export interface TabItem {
  title: string;
  path: string;
  icon: string;
}

export const TabArr: Array<TabItem> = [
  {
    title: '首页',
    path: '/',
    icon: 'HomeOutlined',
  },
  {
    title: '商城',
    path: '/shop',
    icon: 'ShopOutlined',
  },
  {
    title: '我的',
    path: '/person',
    icon: 'UsergroupAddOutlined',
  }
]