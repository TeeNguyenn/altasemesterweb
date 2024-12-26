import React, { useState } from 'react'
import './style.css';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

interface LoginProps {
  handleLogin: (index: number) => void
}

const Login = (props: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (values.username === 'admin' && values.password === 'admin') {
      localStorage.setItem('username', 'admin');
      props.handleLogin(2);
    } else {
      alert('Error!!');
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    // <div className='login'>
    //   <div className='form'>
    //     <div className='group'>
    //       <label htmlFor="">User name:</label>
    //       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></div>
    //     <div className='group'>
    //       <label htmlFor="">Password: </label>
    //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
    //     <button onClick={() => handleLogin(2)}>Login</button>
    //   </div>
    // </div>

    <div className='form-wrapper'>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login