import React from 'react';
import { Button } from 'antd-mobile';
import { StepBackwardOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button loading>loading button</Button>
      <div className='test-box'>我们爱</div>
    </div>
  );
}

export default App;
