import React,{Component} from 'react';
import App from './App';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import  Home from './page/home'
class MainRouter extends Component{
    render(){
        return <BrowserRouter >
            <App>
                     <Route exact path='/home' Component={Home}></Route>
            </App>
        </BrowserRouter>
    }
}

export default MainRouter