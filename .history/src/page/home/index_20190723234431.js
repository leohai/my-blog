import React,{Component} from 'react';
import Header from '../components/header'
import {Layout} from 'antd'
import './index.less'
const {  Footer, Sider, Content } = Layout;
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
                <Header>
                    <Myheader />
                </Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
                </Layout>
        </div>
    }
}

export default Home