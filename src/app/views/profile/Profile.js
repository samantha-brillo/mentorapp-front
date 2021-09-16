import React,  {Component} from 'react';
import { Form, Input, Button, Checkbox, Layout, Select } from 'antd';

const {Content} = Layout
const { Option } = Select;


export default function Profile () {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      }
     



    return (
        <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}> 
            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item 
                label="Email"
                name="email"
                >
                    <Input/>
                    
                </Form.Item>

                <Form.Item
                    label="Aboutme"
                    name="aboutme"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Objective"
                    name="objective"
                >
                    <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    >
                    <Option value= "Revisión de CV">
                    Revisión de CV    
                    </Option>

                    <Option value= "Revisión de Portafolio">
                    Revisión de Portafolio
                    </Option>

                    <Option value= "Entrevista de Trabajo">
                    Entrevista de Trabajo  
                    </Option>

                    <Option value= "Otro">
                    Otro   
                    </Option>



                    </Select>
                </Form.Item>

        

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    </Content>
    )
}