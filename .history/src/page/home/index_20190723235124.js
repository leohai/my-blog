import React,{Component} from 'react';
import Header from '../components/header'
import {Layout} from 'antd'
import './index.less'
const {  Footer } = Layout;
class Home extends Component{
    constructor(){
        super()
    }
    handleInput(value){
        console.log(value,333)
    }
    render(){
        return <div className="home-container">
              <Layout >
                <Header handleInput={(value)=>this.handleInput(value)}/>
                <ROw
                <Footer>Footer</Footer>
                </Layout>
        </div>
    }
}

export default Home