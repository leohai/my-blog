import React,{Component} from 'react';
import App from './App';
import {BrowserRouter,Router,Route} from 'react-router-dom'
import  Home from './page/home'
class MainRouter extends Component{
    render(){
        return <Router histroy={BrowserRouter}>
            <App>
                <Route path='/' Component={Home}></Route>
            </App>
        </Router>
    }
}

export default rouMainRouterter