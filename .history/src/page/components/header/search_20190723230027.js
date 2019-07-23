import  React,{Fragment} from 'react'
import {Input,Icon} from 'antd'

const Search=props=>{
    return (
        <Row>
            <Icon type='search'/>
            <Input onChange={(value)=>props.handleClick(value)}/>
        </Row>
    )
}
export default Search