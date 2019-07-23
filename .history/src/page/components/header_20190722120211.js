
import React,{Component} from 'react';
import {Row,Col,Input,Button} from 'antd'
const Header=(props)=>{
    return <div class='header'>
        <Row >
            <Col span='6'>logo</Col>
            <Col span='6'><Input.Search prefix={}></Input.Search></Col>
            <Col span='12'>
                <Row>
                    <Col span="5">首页</Col>
                    <Col span="5">归档</Col>
                    <Col span="5">其他</Col>
                    <Col span="3" offset="3"><Button type="primary">登陆</Button></Col>
                    <Col span="3" type="primary"><Button>注册</Button></Col>
                </Row>
            </Col>
        </Row>
    </div>
}
export default Header