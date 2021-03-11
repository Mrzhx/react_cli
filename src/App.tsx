import React, { useEffect } from 'react';
import { Button } from 'antd-mobile';
import { UserLogin } from '@api/test';
// import { StepBackwardOutlined } from '@ant-design/icons';
import './App.scss';

function App() {
  useEffect(() => {
    UserLogin({user_name: 'Tom'}).then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div className="App">
      <Button loading>loading button</Button>
      <div className='test-box'>我们爱</div>
      <div className='test-box-2'></div>
    </div>
  );
}

export default App;
