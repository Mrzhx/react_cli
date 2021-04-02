
export interface TabItem {
  title: string;
  path: string;
  icon: string;
}

export const TabArr: Array<TabItem> = [
  {
    title: '首页',
    path: '',
    icon: 'HomeOutlined',
  },
  {
    title: '商城',
    path: '',
    icon: 'ShopOutlined',
  },
  {
    title: '我的',
    path: '',
    icon: 'UsergroupAddOutlined',
  }
]