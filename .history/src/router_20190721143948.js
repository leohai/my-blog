import React,{Component} from 'react';
import App from './App';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import  Home from './page/home'
import  Article from './page/article'
class MainRouter extends Component{
    render(){
        return <BrowserRouter >
            <App>
                <Switch>
                     <Route  path='/home' Component={Home}></Route>
                     <Route  path='/home' Component={Article}></Route>
                </Switch>
            </App>
        </BrowserRouter>
    }
}

export default MainRouter