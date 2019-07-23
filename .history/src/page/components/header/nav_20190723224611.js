import React from 'react'
import {withRouter,NavLink} from 'react-router-dom'
import {Menu,Icon} from 'antd'
const { SubMenu } = Menu;
const navList=[
    {
        icon:'home',
        text:"首页",
        path:'/'
    },
    {
        icon:'foder',
        text:"归档",
        path:'/category'
    },
    {
        icon:'coffee',
        text:"其他",
        path:'/other'
    },
    {
        icon:'user',
        text:"我的",
        path:'/mine'
    }
]
const nav=(props)=>{
    console.log(props)
    return <Menu  selectedKeys={[props.location.pathname]} mode="horizontal">
           {navList.map((item)=>(
            <Menu.Item className="nav" key={item.path}>
                <NavLink to={item.path}>
                    <Icon type={item.icon}/>
                    {item.text}
                </NavLink>
             </Menu.Item>
            ))}
    </Menu>
}
export default  withRouter(nav)