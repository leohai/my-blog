import  React,{Fragment} from 'react'
import {Input,Icon} from 'antd'

const search=props=>{
    return (
        <Fragment>
            <Icon type='search'/>
            <Input onChange={(value)=>props.handleClick(value)}/>
        </Fragment>
    )
}