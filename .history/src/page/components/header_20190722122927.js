
import React  from 'react';
import {Row,Col,Input,Button,Icon} from 'antd'
import {NavLink} from 'react-router-dom'
import './header.less'
const Header=(props)=>{
    return <div className='header'>
        <Row type="flex" >
            <Col span={3} offset={3}>logo</Col>
            <Col span={6}>
                <Input.Search 
                onSearch={value => props.handleInput(value)}
                >
                </Input.Search>
            </Col>
            <Col span={12}>
                <Row type="flex" justify="center" >
                    <Col span={5}><NavLink to="">首页</NavLink></Col>
                    <Col span={5}><NavLink to="">归档</NavLink></Col>
                    <Col span={5}><NavLink to="">其他</NavLink></Col>
                    <Col span={3} offset={3}><Button type="primary">登陆</Button></Col>
                    <Col span={3} type="primary"><Button>注册</Button></Col>
                </Row>
            </Col>
        </Row>
    </div>
}
export default Header