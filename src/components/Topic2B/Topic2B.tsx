import React, { useState } from 'react'
import './Topic2B.css';
import { Button } from 'antd';


const Topic2B = () => {
  const [color, setColor] = useState(false);


  return (
    <div>

      <div className='container2b'>
        <div className='item' style={{ backgroundColor: !color ? '#0000ff' : '#ff0000' }}></div>
        <div className=''>
          <Button type='primary' onClick={() => setColor(!color)} className='btn'>Change color</Button>
        </div>
        <div className='item' style={{ backgroundColor: !color ? '#ff0000' : '#0000ff' }}></div>
      </div>
    </div>

  )
}

export default Topic2B