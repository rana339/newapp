import { Form, Input, Button, Checkbox } from 'antd';
import './login.css';



const Signup = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  

  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          {/*        
          <Link to ="/Settings" > aa
           <Link/>   */}

          <Button type="primary" htmlType="submit">
            login</Button>

         

        </Form.Item>
      </Form></div>

  );
};



export default Signup;