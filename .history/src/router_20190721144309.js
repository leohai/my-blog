import React,{Component} from 'react';
import App from './App';
import {HashRouter,Route,Switch} from 'react-router-dom'
import  Home from './page/home'
import  Article from './page/article'
class MainRouter extends Component{
    render(){
        return <HashRouter >
            <App>
                <Switch>
                     <Route  path='/' Component={Home}></Route>
                     <Route  path='/Article' Component={Article}></Route>
                </Switch>
            </App>
        </BrowserRouter>
    }
}

export default MainRouter