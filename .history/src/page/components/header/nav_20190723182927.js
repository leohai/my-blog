import React from 'react'
import propType from 'prop-types'
import {withRouter} from 'react-router-dom'
const navList=[
    {
        icon:'home',
        text:"首页",
        path:'/'
    },
    {
        icon:'floder',
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
@withRouter
const nav=(props)=>{
    console.log(props)
   
    return <Menu  selectedKeys={} mode="horizontal">
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
export default  nav