import React,{Compoent} from 'react'
import {Icon,Avatar} from 'antd'
class Sider extends Compoent {
    constructor(){

    }
    render(){
        return <div className='sider-wrapper'>
            <h2>海大大</h2>
            <p>前端打砸人员,略微代码洁癖</p>
            <Avatar src="../../../assets/images/avatar.jpeg" shape="circle" />
            
        </div>
    }
}