import React from 'react';
import Card from '../../components/Card'
import { Layout, Row, Col } from 'antd';
const {Content} = Layout


const Home = ({history,location,match}) => (
    <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}> 
            <Row>
                { [0,1,2,3,4].map(() => (
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                     <Card/>
                 </Col>  
                ))  }  
            </Row>
        </Layout>
    </Content> 
  
)


export default Home;
