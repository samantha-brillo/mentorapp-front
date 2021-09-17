import React, {useState, useEffect} from 'react';
import {getList} from '../../services/auth-ws'
import Card from '../../components/Card'
import { Layout, Row, Col } from 'antd';
const {Content} = Layout


const Home = ({history,location,match}) => {
    const [list, setList]= useState([])
    const [loader, setLoader]= useState(true)
    const getData = async() => {
        setLoader(true)
    try{
        const localUser = JSON.parse(localStorage.getItem("user"))
        let role = "mentor"
        console.log(localUser)
        if (!localUser ){
            role = "mentor"
        }else{
           role = localUser.role === "mentor" ? "mentee" : "mentor"
        }
        const {data} = await getList(role)
        setLoader(false)
        setList(data.result)
    }catch(error){
        console.log(error)
        setLoader(false)

    }

    }
useEffect(()=>{
    getData()
}, [])
    return ( 
    <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}> 
            <Row>
                { list.map((item, index) => (
                  <Col key= {index}  xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                     <Card {...item}/>
                 </Col>  
                ))  }  
            </Row>
        </Layout>
    </Content> 
  
)}


export default Home;
