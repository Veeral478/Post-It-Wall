import React from 'react';
import { Button, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { span: 16 },
};

const Post: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600}}
    >
      <Form.Item name="note" rules={[{ required: true }]}>
        <Input style={{ height: 'auto'}} />
      </Form.Item>
      
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}} >
          Post
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Post;