
import React,{useState,useEffect,useCallback}  from 'react';
import {Row,Col,Input,Button,Menu, Icon} from 'antd'
import {NavLink} from 'react-router-dom'
import './nav.less'
const { SubMenu } = Menu;
const Nav=(props)=>{
    console.log(this)
    const [current,setCurrent] = useState('')
    const handleClick=useCallback((e)=>{
        console.log(e)
    })
    useEffect(()=>{

    })
    return <div >
        <Row type="flex" align="center">
            <Col span={3} ><div>
                    logo
                </div></Col>
            
            <Col span={21}>
                 <div >
                    <Input.Search 
                    onSearch={props.handleInput}
                    >
                    </Input.Search>
                </div>
                        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                            <Menu.Item className="nav">
                              <NavLink to='/home'>首页</NavLink>
                            </Menu.Item>
                            <Menu.Item className="nav">
                              <NavLink to='/collect'>归档</NavLink>
                            </Menu.Item>
                            <Menu.Item className="nav">
                              <NavLink to='/other'>其他</NavLink>
                            </Menu.Item>
                        </Menu>
                    <Col span={3} offset={3}><Button type="primary">登陆</Button></Col>
                    <Col span={3} type="primary"><Button>注册</Button></Col>
                </Row>
            </Col>
        </Row>
    </div>
}
export default Nav